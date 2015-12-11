'use strict';

var React = require('react-native');
var viewWorkoutActions = require('../../actions/viewWorkoutActions');
var renderExerciseTime = require('../renderExerciseTime');

var {
  StyleSheet,
  Text,
  View,
} = React;

var viewExercise = React.createClass({

  render: function(){
    var exercise = this.props.exercise;
    var rep, amount, load, exerciseName;

    var renderReps = function() {
      //If there are both reps and an amount, add 'x' to reps
      //ie. 5x 50m Sprints.

      /* jshint ignore:start*/
      if(exercise.reps && (exercise.time || exercise.distance && exercise.distance.val)) {
        rep = <Text style={styles.exerciseText}>{exercise.reps}x</Text>;
      } else if (exercise.reps) {
        rep = <Text style={styles.exerciseText}>{exercise.reps}</Text>;
      }
      /* jshint ignore:end*/
    };

    var renderAmount = function() {
      //Renders amount for time or distance
      //For now, there will only ever be one.

      /* jshint ignore:start*/
      if (exercise.time){
        amount = <Text style={styles.exerciseText}>{renderExerciseTime(exercise.time)}</Text>;
      } else if (exercise.distance && exercise.distance.val) {
        amount = <Text style={styles.exerciseText}>{exercise.distance.val}{exercise.distance.units}</Text>;
      }
      /* jshint ignore:end*/
    };

    var renderLoad = function() {
      /* jshint ignore:start*/
      if(exercise.load.val) {
        load = <Text style={styles.exerciseText}>at {exercise.load.val}{exercise.load.units}</Text>;
      }
      /* jshint ignore:end*/
    };

    var renderExerciseName = function() {
      /* jshint ignore:start*/
      exerciseName = <Text style={styles.exerciseText}>{exercise.name}</Text>;
      /* jshint ignore:end*/
    };

    var renderExercise = function() {
      //Render exercise description such that order is
      //Rep, Amount(Time or Dist), Weight, ExerciseName
      renderReps();
      renderAmount();
      renderLoad();
      renderExerciseName();
    };

    renderExercise();

    return (
      /* jshint ignore:start */
      <View style={styles.exerciseContainer}>
        {rep}
        {amount}
        {exerciseName}
        {load}
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  exerciseContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 5,
    marginLeft: 0
  },
  exerciseText: {
    marginRight: 4,
    fontFamily: 'Avenir Next',
    fontSize: 16,
    color: '#000000'
  }
});

module.exports = viewExercise;
