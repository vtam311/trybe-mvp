/*
* @Author: vincetam
* @Date:   2015-10-28 19:35:23
* @Last Modified by:   VINCE
* @Last Modified time: 2015-12-04 09:29:18
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var createWorkoutConstants = require('../constants/createWorkoutConstants');

var createWorkoutActions = {
  getWorkout: function() {
    AppDispatcher.handleAction({
      actionType: createWorkoutConstants.GET_WORKOUT,
      data: null
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
