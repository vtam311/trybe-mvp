/*
* @Author: vincetam
* @Date:   2015-10-28 19:35:23
* @Last Modified by:   VINCE
* @Last Modified time: 2015-12-13 19:58:22
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var createWorkoutConstants = require('../constants/createWorkoutConstants');

var createWorkoutActions = {
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
      data: null
    });
  },
};

module.exports = createWorkoutActions;
