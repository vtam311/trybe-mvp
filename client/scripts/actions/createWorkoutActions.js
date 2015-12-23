/*
* @Author: vincetam
* @Date:   2015-10-28 19:35:23
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-18 15:53:18
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var createWorkoutConstants = require('../constants/createWorkoutConstants');

var createWorkoutActions = {
  saveDate: function(date) {
    AppDispatcher.handleAction({
      actionType: createWorkoutConstants.SAVE_DATE,
      data: {
        date: date
      }
    });
  },
  setInstructions: function(instructions, partIdx) {
    AppDispatcher.handleAction({
      actionType: createWorkoutConstants.SET_INSTRUCTIONS,
      data: {
        instructions: instructions,
        partIdx: partIdx
      }
    });
  },
  addExercise: function(partIdx) {
    AppDispatcher.handleAction({
      actionType: createWorkoutConstants.ADD_EXERCISE,
      data: {
        partIdx: partIdx
      }
    });
  },
  removeExercise: function(partIdx, exIdx) {
    AppDispatcher.handleAction({
      actionType: createWorkoutConstants.REMOVE_EXERCISE,
      data: {
        partIdx: partIdx,
        exIdx: exIdx
      }
    });
  },
  setTargetExerciseIdx: function(partIdx, exIdx){
    AppDispatcher.handleAction({
      actionType: createWorkoutConstants.SET_TARGET_EXERCISE_IDX,
      data: {
        partIdx: partIdx,
        exIdx: exIdx
      }
    });
  },
  saveExercise: function(exercise){
    AppDispatcher.handleAction({
      actionType: createWorkoutConstants.SAVE_EXERCISE,
      data: {
        exercise: exercise
      }
    });
  },
  toggleRecording: function(bool, partIdx){
    AppDispatcher.handleAction({
      actionType: createWorkoutConstants.TOGGLE_RECORDING,
      data: {
        bool: bool,
        partIdx: partIdx
      }
    });
  },
  setResultType: function(type, partIdx){
    AppDispatcher.handleAction({
      actionType: createWorkoutConstants.SET_RESULT_TYPE,
      data: {
        type: type,
        partIdx: partIdx
      }
    });
  },
  addPart: function(){
    AppDispatcher.handleAction({
      actionType: createWorkoutConstants.ADD_PART,
    });
  },
  removePart: function(){
    AppDispatcher.handleAction({
      actionType: createWorkoutConstants.REMOVE_PART,
    });
  },
  setTargetPartIdx: function(partIdx){
    AppDispatcher.handleAction({
      actionType: createWorkoutConstants.SET_TARGET_PART_IDX,
      data: {
        partIdx: partIdx
      }
    });
  },
  setPartName: function(name){
    AppDispatcher.handleAction({
      actionType: createWorkoutConstants.SET_PART_NAME,
      data: {
        name: name
      }
    });
  },
};

module.exports = createWorkoutActions;
