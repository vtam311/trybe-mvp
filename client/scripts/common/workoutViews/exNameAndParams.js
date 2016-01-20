'use strict';

var React = require('react-native');
var viewWorkoutActions = require('../../actions/viewWorkoutActions');
var renderExerciseTime = require('../renderExerciseTime');

var {
  StyleSheet,
  Text,
  View,
} = React;

//This outputs a line giving the exercise description
//on the left, and its parameters on the right
var viewExercise = React.createClass({
  render: function(){
    var exercise = this.props.exercise;
    var customFontSize = this.props.customFontSize;
    var customFontColor = this.props.customFontColor;

    var exerciseName, reps, load, distance, time;
    var exParams = '';
    var lastExParam;

    //Enable custom font size when using this component
    var exStyleText;

    if(customFontSize){
      exStyleText = [...{}, styles.exerciseText, {fontSize: customFontSize}];
    } else {
      exStyleText = [...{}, styles.exerciseText];
    }

    //active custom font color if prop is specified
    if(customFontSize){
      exStyleText = [...{}, exStyleText, {color: customFontColor}];
    }

    var renderReps = function() {
      if(exercise.reps){
        if(lastExParam === 'load' ||
          lastExParam === 'distance' ||
          lastExParam === 'time'){
          //if there is another exercise param to render,
          //add a comma and space
          exParams += exercise.reps + ' reps, ';
        } else {
          exParams += exercise.reps + ' reps';
        }
      }
      // console.log('renderReps exParams now', exParams);
    };

    var renderLoad = function() {
      if(exercise.load.val){
        if(lastExParam === 'distance' ||
          lastExParam === 'time'){
          //if there is another exercise param to render,
          //add a comma and space
          exParams += exercise.load.val + exercise.load.units + ', ';
        } else {
          exParams += exercise.load.val + exercise.load.units;
        }
      }
      // console.log('renderLoad exParams now', exParams);
    };

    var renderDistance = function() {
      if(exercise.distance.val){
        if(lastExParam === 'time'){
          //if there is another exercise param to render,
          //add a comma and space
          exParams += exercise.distance.val + exercise.distance.units + ', ';
        } else {
          exParams += exercise.distance.val + exercise.distance.units;
        }
      }
      // console.log('renderDistance exParams now', exParams);
    };

    var renderTime = function(){
      if(exercise.time){
        exParams += renderExerciseTime(exercise.time);
      }
      // console.log('renderTime exParams now', exParams);
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

    var setLastExerciseParam = function(){
      //Determines the need of whether a comma is necessary,
      //when there are more than one exercise parameters
      //(like reps and load).
      //Finds the last param given the set order of:
      //reps, load, distance, time. Once set,
      //renderExercise functions refer to the last param
      if(exercise.time) lastExParam = 'time';
      else if(exercise.distance.val) lastExParam = 'distance';
      else if(exercise.load.val) lastExParam = 'load';
      else if(exercise.reps) lastExParam = 'reps';
    };

    var renderExercise = function() {
      setLastExerciseParam();

      //Render exercise parameters, in this order
      //reps, load, distance, time
      renderExerciseName();
      renderReps();
      renderLoad();
      renderDistance();
      renderTime();
    };

    renderExercise();

    return (
      /* jshint ignore:start */
      <View style={styles.exerciseContainer}>
        <View style={styles.leftHalf}>
          {exerciseName}
        </View>

        <View style={styles.rightHalf}>
          <Text style={[exStyleText, {textAlign: 'right'}]}>{exParams}</Text>
        </View>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  exerciseContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  exerciseText: {
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    fontSize: 15,
    color: '#8D867E'
  },
  leftHalf: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rightHalf: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});

module.exports = viewExercise;
