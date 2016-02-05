/*
* @Author: vincetam
* @Date:   2016-02-05 09:48:17
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-05 09:52:24
*/

'use strict';

var React = require('react-native');
var renderExerciseTime = require('../../common/renderExerciseTime');

var {
  StyleSheet,
  Text,
  View,
} = React;

//This outputs a line giving the exercise parameters
var ExerciseParameters = React.createClass({
  render: function(){
    var exercise = this.props.exercise;
    var reps, load, distance, time;

    var renderReps = function() {
      if(exercise.reps){
        reps =
          <Text style={styles.exerciseText}>{exercise.reps} reps</Text> ;
      }
    };

    var renderLoad = function() {
      if(exercise.load.val){
        load =
          <Text style={styles.exerciseText}>{exercise.load.val}{exercise.load.units}</Text> ;
      }
    };

    var renderDistance = function() {
      if(exercise.distance.val){
        distance =
          <Text style={styles.exerciseText}>{exercise.distance.val}{exercise.distance.units}</Text> ;
      }
    };

    var renderTime = function(){
      if(exercise.time){
        time =
          <Text style={styles.exerciseText}>{renderExerciseTime(exercise.time)}</Text> ;
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
        <View style={styles.row}>
          {reps}
          {load}
          {distance}
          {time}
        </View>
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
