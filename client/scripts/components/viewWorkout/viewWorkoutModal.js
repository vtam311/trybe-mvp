/*
* @Author: vincetam
* @Date:   2016-01-16 12:52:29
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-18 18:32:32
*/

'use strict';

var React = require('react-native');
var editWorkoutStore = require('../../stores/editWorkoutStore');
var editWorkoutActions = require('../../actions/editWorkoutActions');
var modalActions = require('../../actions/modalActions');

var {
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  View,
} = React;

//Load components
var PartPage = require('./_partPage');

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
      swiperIndex: 1,
      offset: new Animated.Value(deviceHeight),
      visibleHeight: Dimensions.get('window').height,
      visibleWidth: Dimensions.get('window').width,
    };
  },
  componentWillMount: function(){
    editWorkoutStore.addChangeListener(this._onChange);

    if(this.state.isDefaultOrCustom === 'default'){
      editWorkoutActions.getDailyWorkout();
    }
  },
  componentDidMount: function() {
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: 0
    }).start();
  },
  componentWillUnmount: function(){
    editWorkoutStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      workout: editWorkoutStore.getWorkout(),
    });
  },
  closeModal: function() {
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: deviceHeight
    }).start(modalActions.closeViewWorkoutModal);
  },
  render: function() {
    var partPages = this.state.workout.parts.map( (part, index) =>
      /* jshint ignore:start */
      <PartPage part={part} partIdx={index} key={index} />
      /* jshint ignore:end */
    );

    return (
      /* jshint ignore:start */
      <Animated.View style={[styles.modal, {transform: [{translateY: this.state.offset}]}]}>
        <View style={[styles.container, {height: this.state.visibleHeight, width: this.state.visibleWidth}]}>
          <Image
            source={require('image!iconAthletesBackground')}
            style={{flex: 1, height: null, width: null}}
            resizeMode='contain' >

            <ScrollView
              horizontal={true}
              pagingEnabled={true} >

              {partPages}

            </ScrollView>

          </Image>

          <View style={styles.backButtonContainer}>
            <TouchableOpacity onPress={this.closeModal}>
             <Image
                style={styles.closeButton}
                source={require('image!closeButton')} />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
      /* jshint ignore:end */
    );
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
    backgroundColor: 'rgba(73,162,160,.5)',
  },
  backButtonContainer: {
    height: 60,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  closeButton: {
    width: 18,
    height: 18,
    marginTop: 30,
    marginLeft: 10,
  }
});

module.exports = ViewWorkoutModal;
