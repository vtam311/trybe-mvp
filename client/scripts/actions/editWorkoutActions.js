/*
* @Author: vincetam
* @Date:   2015-10-28 19:35:23
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-28 18:29:06
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var editWorkoutConstants = require('../constants/editWorkoutConstants');

var editWorkoutActions = {
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
