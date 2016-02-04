/*
* @Author: vincetam
* @Date:   2016-02-03 20:25:12
* @Last Modified by:   VINCE
* @Last Modified time: 2016-02-04 12:53:08
*/

'use strict';

var React = require('react-native');
var renderExerciseTime = require('../../common/renderExerciseTime');

var {
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
} = React;

//This outputs a line giving the exercise parameters
//When one is licked, show pickers in parent to allow user to edit them
var ExerciseParameters = React.createClass({
  render: function(){
    var exercise = this.props.exercise;
    var repsPress, loadPress, distancePress, timePress;

    //Load component functions for use in renderExercise functions
    var handleRepPress = this.props.handleRepPress;
    var handleLoadPress = this.props.handleLoadPress;
    var handleDistancePress = this.props.handleDistancePress;
    var handleTimePress = this.props.handleTimePress;

    var renderReps = function() {
      if(exercise.reps){
        repsPress =
          <TouchableOpacity onPress={() => handleRepPress()}>
            <Text style={styles.exerciseText}>{exercise.reps} reps</Text>
          </TouchableOpacity> ;
      }
    };

    var renderLoad = function() {
      if(exercise.load.val){
        loadPress =
          <TouchableOpacity onPress={() => handleLoadPress()}>
            <Text style={styles.exerciseText}>{exercise.load.val}{exercise.load.units}</Text>
          </TouchableOpacity> ;
      }
    };

    var renderDistance = function() {
      if(exercise.distance.val){
        distancePress =
          <TouchableOpacity onPress={() => handleDistancePress()}>
            <Text style={styles.exerciseText}>{exercise.distance.val}{exercise.distance.units}</Text>
          </TouchableOpacity> ;
      }
    };

    var renderTime = function(){
      if(exercise.time){
        timePress =
          <TouchableOpacity onPress={() => handleTimePress()}>
            <Text style={styles.exerciseText}>{renderExerciseTime(exercise.time)}</Text>
          </TouchableOpacity> ;
      }
    };

    var renderExercise = function() {
      renderReps();
      renderLoad();
      renderDistance();
      renderTime();
    };

    renderExercise();

    return (
      /* jshint ignore:start */
      <View style={styles.exerciseContainer}>
        <TouchableWithoutFeedback onPress={() => this.props.setShowPicker(false)}>
          <View style={styles.row}>
            {repsPress}
            {loadPress}
            {distancePress}
            {timePress}
          </View>
        </TouchableWithoutFeedback>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  exerciseContainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  exerciseText: {
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    fontSize: 25,
    color: '#fff'
  },
});

module.exports = ExerciseParameters;
