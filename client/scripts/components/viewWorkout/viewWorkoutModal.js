/*
* @Author: vincetam
* @Date:   2016-01-16 12:52:29
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-05 17:49:43
*/

'use strict';

var React = require('react-native');
var editWorkoutStore = require('../../stores/editWorkoutStore');
var editWorkoutActions = require('../../actions/editWorkoutActions');
var viewWorkoutStore = require('../../stores/viewWorkoutStore');
var viewWorkoutActions = require('../../actions/viewWorkoutActions');
var modalActions = require('../../actions/modalActions');

var {
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  ScrollView,
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  View,
  Text
} = React;

//Load components
var PageControl = require('react-native-page-control');
var PartHeader = require('./partHeader');
var AddPartPage = require('./addPartPage');
var Swipeout = require('react-native-swipeout');
var InstructionsView = require('./instructionsView');
var ExerciseView = require('./exerciseView');
var AddExerciseView = require('./addExerciseView');

//Gets device height for animating app
var {
  height: deviceHeight
} = Dimensions.get('window');

var ViewWorkoutModal = React.createClass({
  getInitialState: function() {
    return {
      //shows default daily workout unless a custom one is selected/created
      isDefaultOrCustom: editWorkoutStore.getDefaultOrCustom(),
      workout: editWorkoutStore.getWorkout(),
      isModifying: viewWorkoutStore.getIsModifying(),
      offset: new Animated.Value(deviceHeight),
      visibleHeight: Dimensions.get('window').height,
      visibleWidth: Dimensions.get('window').width,
      currPage: 0,
    };
  },
  componentDidMount: function() {
    editWorkoutStore.addChangeListener(this._onChange);
    viewWorkoutStore.addChangeListener(this._onChange);

    if(this.state.isDefaultOrCustom === 'default'){
      editWorkoutActions.setToDefaultWorkout();
    }
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: 0
    }).start();
  },
  componentWillUnmount: function(){
    editWorkoutStore.removeChangeListener(this._onChange);
    viewWorkoutStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      workout: editWorkoutStore.getWorkout(),
      isModifying: viewWorkoutStore.getIsModifying()
    });
  },
  closeModal: function() {
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: deviceHeight
    }).start(modalActions.closeViewWorkoutModal);
  },
  handleScroll: function(event: Object) {
    var horizontalOffset = event.nativeEvent.contentOffset.x;
    var currPage = Math.round(horizontalOffset/this.state.visibleWidth);
    this.setState({currPage: currPage});
  },
  handleLogButtonPress: function(){
    //notifies editWorkoutStore which part to modify
    editWorkoutActions.setTargetPartIdx(this.state.currPage);
    modalActions.openLogModal();
  },

  render: function() {
    if(this.state.workout){
      var partPages = this.state.workout.parts.map( (part, index) =>
        /* jshint ignore:start */
        <PartHeader
          part={part}
          partIdx={index}
          key={index}
          isModifying={this.state.isModifying}
          visibleHeight={this.state.visibleHeight}
          visibleWidth={this.state.visibleWidth} />
        /* jshint ignore:end */
      );

      var currPart = this.state.workout.parts[this.state.currPage];

      var swipeoutBtns = [
        { text: 'Delete', onPress: this.handleSwipeoutButtonPress },
        { text: 'More', onPress: this.handleSwipeoutButtonPress },
      ];

      var exerciseViews = currPart.exercises.map((exercise, index) =>
        /* jshint ignore:start */
        <Swipeout right={swipeoutBtns} backgroundColor='rgba(155,155,155,0)'>
          <View style={{width: 330}} key={index}>
            <ExerciseView
              exercise={exercise}
              partIdx={this.state.currPage}
              exIdx={index}
              isModifying={this.state.isModifying} />
          </View>
        </Swipeout>
        /* jshint ignore:end */
      );

      return (
        /* jshint ignore:start */
        <Animated.View style={[styles.modal, {transform: [{translateY: this.state.offset}]}]}>
          <Image
            source={require('image!iconAthletesBackground')}
            style={{flex: 1, height: null, width: null}}
            resizeMode='contain' >
              <View style={[styles.container, {height: this.state.visibleHeight, width: this.state.visibleWidth}]}>
                <View style={{flex: .25, backgroundColor: 'rgba(77,186,151,.6)'}}>
                  <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    onScroll={this.handleScroll}
                    scrollEventThrottle={256}
                    showsHorizontalScrollIndicator={false} >

                    {partPages}

                    {this.state.isModifying ?
                      <AddPartPage
                        isModifying={this.state.isModifying}
                        visibleHeight={this.state.visibleHeight}
                        visibleWidth={this.state.visibleWidth} />
                      : null
                    }
                  </ScrollView>
                </View>

                <View style={{flex: .75}}>
                  <ScrollView
                    contentContainerStyle={styles.partContentContainer} >
                    <View style={{width: 330}}>
                      <InstructionsView
                        instructions={currPart.instructions}
                        partIdx={this.state.currPage}
                        isModifying={this.state.isModifying} />
                    </View>

                    {exerciseViews}

                    {this.state.isModifying ?
                      <View style={styles.addExerciseView}>
                        <AddExerciseView partIdx={this.state.currPage}/>
                      </View>
                      : null
                    }
                  </ScrollView>

                  {this.state.isModifying ?
                    null :
                    <TouchableHighlight onPress={this.handleLogButtonPress}
                      style={[styles.logButton]}>
                      <Text style={styles.logButtonText}>Log Results</Text>
                    </TouchableHighlight>
                  }
                </View>

                <View style={[styles.topContentContainer, {width: this.state.visibleWidth}]}>
                  {this.state.isModifying ?
                    null :
                    <TouchableOpacity onPress={this.closeModal}>
                     <Image
                        style={styles.closeButton}
                        source={require('image!closeButton')} />
                    </TouchableOpacity>
                  }
                  <TouchableOpacity onPress={() => viewWorkoutActions.setIsModifying(!this.state.isModifying)}>
                      {this.state.isModifying ?
                       <Text style={[styles.modifyButtonText, {fontWeight: '600'}]}>Done</Text>
                        : <Text style={styles.modifyButtonText}>Modify</Text>
                      }
                  </TouchableOpacity>
                  <View style={styles.pageControlContainer}>
                    <PageControl style={{position:'absolute', top: 0, left: 0, right: 0}}
                      numberOfPages={this.state.isModifying ?
                        this.state.workout.parts.length + 1 : this.state.workout.parts.length}
                      currentPage={this.state.currPage}
                      hidesForSinglePage={true}
                      pageIndicatorTintColor='gray'
                      currentPageIndicatorTintColor='white'
                      indicatorStyle={{borderRadius: 4}}
                      currentIndicatorStyle={{borderRadius: 4}}
                      indicatorSize={{width:8, height:8}} />
                  </View>
                </View>
              </View>
          </Image>
        </Animated.View>
        /* jshint ignore:end */
      );
    } else {
      return <Text>Loading</Text>;
    }
  }
});

var styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(23,115,140,.55)',
  },
  topContentContainer: {
    height: 60,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    left: 10,
    width: 18,
    height: 18,
  },
  modifyButtonText: {
    position: 'absolute',
    top: 40,
    right: 10,
    color: '#fff',
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    fontSize: 18
  },
  pageControlContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    top: 135,
    left: 0,
    right: 0
  },
  partContentContainer: {
    paddingBottom: 60,
    flexDirection: 'column',
    alignItems: 'center',
  },
  logButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: 'rgba(23,115,140,.75)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logButtonText: {
    fontFamily: 'Avenir Next',
    fontSize: 24,
    fontWeight: '500',
    color: '#fff'
  }
});

module.exports = ViewWorkoutModal;
