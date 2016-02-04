/*
* @Author: vincetam
* @Date:   2016-02-03 20:25:12
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-04 12:47:18
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

    //Determines when to render commas, if has >1 parameters
    var lastExParam;

    var renderReps = function() {
      if(exercise.reps){
        if(lastExParam === 'load' ||
          lastExParam === 'distance' ||
          lastExParam === 'time'){
          //if there is another exercise param to render,
          //add a comma and space
          repsPress =
            <TouchableOpacity onPress={() => handleRepPress()}>
              <Text style={styles.exerciseText}>{exercise.reps} reps, </Text>
            </TouchableOpacity> ;
        } else {
          repsPress =
            <TouchableOpacity onPress={() => handleRepPress()}>
              <Text style={styles.exerciseText}>{exercise.reps} reps</Text>
            </TouchableOpacity> ;
        }
      }
    };

    var renderLoad = function() {
      if(exercise.load.val){
        if(lastExParam === 'distance' ||
          lastExParam === 'time'){
          //if there is another exercise param to render,
          //add a comma and space
          loadPress =
            <TouchableOpacity onPress={() => handleLoadPress()}>
              <Text style={styles.exerciseText}>{exercise.load.val}{exercise.load.units}, </Text>
            </TouchableOpacity> ;
        } else {
          loadPress =
            <TouchableOpacity onPress={() => handleLoadPress()}>
              <Text style={styles.exerciseText}>{exercise.load.val}{exercise.load.units}</Text>
            </TouchableOpacity> ;
        }
      }
    };

    var renderDistance = function() {
      if(exercise.distance.val){
        if(lastExParam === 'time'){
          //if there is another exercise param to render,
          //add a comma and space
          distancePress =
            <TouchableOpacity onPress={() => handleDistancePress()}>
              <Text style={styles.exerciseText}>{exercise.distance.val}{exercise.distance.units}, </Text>
            </TouchableOpacity> ;
        } else {
          distancePress =
            <TouchableOpacity onPress={() => handleDistancePress()}>
              <Text style={styles.exerciseText}>{exercise.distance.val}{exercise.distance.units}</Text>
            </TouchableOpacity> ;
        }
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

    var findLastExerciseParam = function(){
      //Determines the need of whether a comma is necessary,
      //when there are mroe than one exercise parameters
      //Finds the last param given the set order of:
      //reps, load, distance, time. Once set,
      //renderExercise functions rely on the last param
      if(exercise.time) lastExParam = 'time';
      else if(exercise.distance.val) lastExParam = 'distance';
      else if(exercise.load.val) lastExParam = 'load';
      else if(exercise.reps) lastExParam = 'reps';
    };

    var renderExercise = function() {
      findLastExerciseParam();

      //Render exercise parameters in this order:
      //reps, load, distance, time
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
    // flexWrap: 'wrap',
    // backgroundColor: 'grey'
  },
  exerciseText: {
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    fontSize: 25,
    color: '#fff'
  },
});

module.exports = ExerciseParameters;
