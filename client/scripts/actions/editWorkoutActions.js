/*
* @Author: vincetam
* @Date:   2015-10-28 19:35:23
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-06 13:32:10
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var editWorkoutConstants = require('../constants/editWorkoutConstants');

//temp use workout model
var TEMP_WORKOUT = require('../../../Documentation/workoutModel.js');
var newObject = require('../common/copyObjectHelper'); //not using, since changes date object


var editWorkoutActions = {
  setDefaultOrCustom: function(val){
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SET_DEFAULT_OR_CUSTOM,
      data: {
        val: val
      }
    });
  },
  getDailyWorkout: function() {
    //To do: make get req to server
    var dummyWorkout = TEMP_WORKOUT;

    this.setWorkout(dummyWorkout);
  },
  setWorkout: function(workout) {
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SET_WORKOUT,
      data: {
        workout: workout
      }
    });
  },
  resetWorkout: function() {
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.RESET_WORKOUT,
    });
  },
  saveDate: function(date) {
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SAVE_DATE,
      data: {
        date: date
      }
    });
  },
  setInstructions: function(instructions, partIdx) {
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SET_INSTRUCTIONS,
      data: {
        instructions: instructions,
        partIdx: partIdx
      }
    });
  },
  addExercise: function(partIdx) {
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.ADD_EXERCISE,
      data: {
        partIdx: partIdx
      }
    });
  },
  removeExercise: function(partIdx, exIdx) {
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.REMOVE_EXERCISE,
      data: {
        partIdx: partIdx,
        exIdx: exIdx
      }
    });
  },
  setTargetExerciseIdx: function(partIdx, exIdx){
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SET_TARGET_EXERCISE_IDX,
      data: {
        partIdx: partIdx,
        exIdx: exIdx
      }
    });
  },
  saveExercise: function(exercise){
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SAVE_EXERCISE,
      data: {
        exercise: exercise
      }
    });
  },
  savePartResult: function(result){
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SAVE_PART_RESULT,
      data: {
        result: result
      }
    });
  },
  toggleRecording: function(bool, partIdx){
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.TOGGLE_RECORDING,
      data: {
        bool: bool,
        partIdx: partIdx
      }
    });
  },
  setResultType: function(type, partIdx){
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SET_RESULT_TYPE,
      data: {
        type: type,
        partIdx: partIdx
      }
    });
  },
  addPart: function(){
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.ADD_PART,
    });
  },
  removePart: function(){
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.REMOVE_PART,
    });
  },
  setTargetPartIdx: function(partIdx){
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SET_TARGET_PART_IDX,
      data: {
        partIdx: partIdx
      }
    });
  },
  setPartName: function(name){
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SET_PART_NAME,
      data: {
        name: name
      }
    });
  },
};

module.exports = editWorkoutActions;
