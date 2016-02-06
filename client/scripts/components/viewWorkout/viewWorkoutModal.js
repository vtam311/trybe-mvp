/*
* @Author: vincetam
* @Date:   2016-01-16 12:52:29
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-05 16:33:35
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
  ScrollView,
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  View,
  Text
} = React;

//Load components
var PageControl = require('react-native-page-control'); //
var PartPage = require('./partPage');
var AddPartPage = require('./addPartPage');

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

  render: function() {
    if(this.state.workout){
      var partPages = this.state.workout.parts.map( (part, index) =>
        /* jshint ignore:start */
        <PartPage
          part={part}
          partIdx={index}
          key={index}
          isModifying={this.state.isModifying}
          visibleHeight={this.state.visibleHeight}
          visibleWidth={this.state.visibleWidth} />
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

                <ScrollView
                  horizontal={true}
                  pagingEnabled={true}
                  onScroll={this.handleScroll}
                  scrollEventThrottle={256} >

                  {partPages}

                  {this.state.isModifying ?
                    <AddPartPage
                      isModifying={this.state.isModifying}
                      visibleHeight={this.state.visibleHeight}
                      visibleWidth={this.state.visibleWidth} />
                    : null
                  }
                </ScrollView>

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
                    <PageControl style={{position:'absolute', top: 5, left: 0, right: 0}}
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
    top: 115,
    left: 0,
    right: 0
  }
});

module.exports = ViewWorkoutModal;
