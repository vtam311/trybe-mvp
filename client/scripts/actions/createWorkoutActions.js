/*
* @Author: vincetam
* @Date:   2015-10-28 19:35:23
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-11 16:32:49
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
  addPart: function(){
    AppDispatcher.handleAction({
      actionType: createWorkoutConstants.ADD_PART,
      data: null
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
};

module.exports = createWorkoutActions;
