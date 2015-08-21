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
  setWorkout: function(workout) {
    AppDispatcher.handleAction({
      actionType: createWorkoutConstants.SET_WORKOUT,
      data: workout
    });
  }
};

module.exports = createWorkoutActions;
