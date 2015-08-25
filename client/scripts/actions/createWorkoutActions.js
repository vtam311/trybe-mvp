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
  modifyWorkout: function(workout) {
    AppDispatcher.handleAction({
      actionType: createWorkoutConstants.MODIFY_WORKOUT,
      data: workout
    });
  },
  updateWorkout: function(workout) {
    AppDispatcher.handleAction({
      actionType: createWorkoutConstants.UPDATE_WORKOUT,
      data: workout
    });
  },
  toggleTimeEdit: function() {
    AppDispatcher.handleAction({
      actionType: createWorkoutConstants.TOGGLE_TIME_EDIT,
      data: null
    });
  },
  toggleRepEdit: function() {
    AppDispatcher.handleAction({
      actionType: createWorkoutConstants.TOGGLE_REP_EDIT,
      data: null
    });
  },
  setReps: function(reps, roundNum, exNum) {
    AppDispatcher.handleAction({
      actionType: createWorkoutConstants.SET_REPS,
      data: {
        reps: reps,
        roundNum: roundNum,
        exNum: exNum
      }
    });
  }
};

module.exports = createWorkoutActions;
