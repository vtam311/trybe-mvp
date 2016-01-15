/*
* @Author: vincetam
* @Date:   2015-10-28 19:35:23
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-14 23:15:21
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var editWorkoutConstants = require('../constants/editWorkoutConstants');

//temp use workout model
var newWorkout = require('../common/newWorkout');
var newObject = require('../common/copyObjectHelper');
var DUMMY_WORKOUT = require('../../../Documentation/workoutModel.js');


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
    //temp use DUMMY_WORKOUT and make its id unique
    var dummyWorkout = newWorkout(DUMMY_WORKOUT);
    dummyWorkout.id = 4;

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
  savePartNotes: function(notes){
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SAVE_PART_NOTES,
      data: {
        notes: notes
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
  saveBackupWorkout: function(){
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SAVE_BACKUP_WORKOUT
    });
  },
  cancelChanges: function(){
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.CANCEL_CHANGES
    });
  },
};

module.exports = editWorkoutActions;
