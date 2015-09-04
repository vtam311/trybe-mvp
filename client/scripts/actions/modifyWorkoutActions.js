'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var modifyWorkoutConstants = require('../constants/modifyWorkoutConstants');

var modifyWorkoutActions = {
  getWorkout: function() {
    AppDispatcher.handleAction({
      actionType: modifyWorkoutConstants.GET_WORKOUT,
      data: null
    });
  },
  modifyWorkout: function(workout) {
    AppDispatcher.handleAction({
      actionType: modifyWorkoutConstants.MODIFY_WORKOUT,
      data: workout
    });
  },
  updateWorkout: function(workout) {
    AppDispatcher.handleAction({
      actionType: modifyWorkoutConstants.UPDATE_WORKOUT,
      data: workout
    });
  },
  // toggleTimeEdit: function() {
  //   AppDispatcher.handleAction({
  //     actionType: modifyWorkoutConstants.TOGGLE_TIME_EDIT,
  //     data: null
  //   });
  // },
  // toggleRepEdit: function(exerciseNum) {
  //   AppDispatcher.handleAction({
  //     actionType: modifyWorkoutConstants.TOGGLE_REP_EDIT,
  //     data: exerciseNum
  //   });
  // },
  setReps: function(reps, roundNum, exerciseNum) {
    AppDispatcher.handleAction({
      actionType: modifyWorkoutConstants.SET_REPS,
      data: {
        reps: reps,
        roundNum: roundNum,
        exerciseNum: exerciseNum
      }
    });
  },
  setLoad: function(load, roundNum, exerciseNum) {
    AppDispatcher.handleAction({
      actionType: modifyWorkoutConstants.SET_LOAD,
      data: {
        load: load,
        roundNum: roundNum,
        exerciseNum: exerciseNum
      }
    });
  }
};

module.exports = modifyWorkoutActions;
