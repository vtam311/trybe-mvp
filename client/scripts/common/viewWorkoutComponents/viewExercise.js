'use strict';

var React = require('react-native');
var viewWorkoutActions = require('../../actions/viewWorkoutActions');
var renderExerciseTime = require('../renderExerciseTime');

var {
  StyleSheet,
  Text,
  View,
} = React;

//This outputs a string description of an exercise
//and changes based on what parameters the exercise has,
//such as reps, time, distance, and load
var viewExercise = React.createClass({
  render: function(){
    var customFontSize = this.props.customFontSize;

    //Enable custom font size when using this component
    var exStyleText;
    if(customFontSize){
      exStyleText = [...{}, styles.exerciseText, {fontSize: customFontSize}];
    } else {
      exStyleText = [...{}, styles.exerciseText];
    }

    var exercise = this.props.exercise;
    var rep, amount, load, exerciseName;

    var renderReps = function() {
      /* jshint ignore:start*/
      //If there are both reps and a distance or time,
      //add 'x' to reps - ie. 5x 50m Sprints.
      if(exercise.reps && (exercise.time || exercise.distance && exercise.distance.val)) {
        rep = <Text style={exStyleText}>{exercise.reps}x</Text>;
      } else if (exercise.reps) {
      //Otherwise just show reps
        rep = <Text style={exStyleText}>{exercise.reps}</Text>;
      }
      /* jshint ignore:end*/
    };

    var renderTimeAndDistance = function() {
      /* jshint ignore:start*/
      if (exercise.time){
        if(exercise.distance && exercise.distance.val) {
          //If both time and dist, show like: 60 Sec 400m Sprint
          amount =
            <Text style={exStyleText}>
              {renderExerciseTime(exercise.time)} {exercise.distance.val}{exercise.distance.units}
            </Text>;
        } else {
          //If only time, show like: 60 Sec Sprint
          amount = <Text style={exStyleText}>{renderExerciseTime(exercise.time)}</Text>;
        }
      } else if (exercise.distance && exercise.distance.val) {
        //If only dist, show like: 400m Sprint
        amount = <Text style={exStyleText}>{exercise.distance.val}{exercise.distance.units}</Text>;
      }
      /* jshint ignore:end*/
    };

    var renderLoad = function() {
      /* jshint ignore:start*/
      if(exercise.load.val) {
        load = <Text style={exStyleText}>at {exercise.load.val}{exercise.load.units}</Text>;
      }
      /* jshint ignore:end*/
    };

    var renderExerciseName = function() {
      /* jshint ignore:start*/
      if(exercise.name){
        var lastCharAt = exercise.name.length - 1;
        //If last letter of exercise name is a space, ignore it
        if(exercise.name.charAt(lastCharAt) === ' '){
          var exName = exercise.name.slice(0, lastCharAt);
          exerciseName = <Text style={exStyleText}>{exName}</Text>;
        } else {
          exerciseName = <Text style={exStyleText}>{exercise.name}</Text>;
        }
      } else return null;
      /* jshint ignore:end*/
    };

    var renderExercise = function() {
      //Render exercise description such that order is
      //Rep, Amount(Time or Dist), Weight, ExerciseName
      renderReps();
      renderTimeAndDistance();
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
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  exerciseText: {
    marginRight: 4,
    fontFamily: 'Helvetica',
    fontSize: 15,
    color: '#2D2D2D'
  }
});

module.exports = viewExercise;
