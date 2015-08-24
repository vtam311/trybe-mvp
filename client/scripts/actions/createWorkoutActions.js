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
  }
};

module.exports = createWorkoutActions;
