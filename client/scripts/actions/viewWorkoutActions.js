'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var viewWorkoutConstants = require('../constants/viewWorkoutConstants');

//temp use workout model
var TEMP_WORKOUT = require('../../../Documentation/workoutModel.js')

var viewWorkoutActions = {
  getWorkout: function() {
    //To do: make get req to server
    var dummyWorkout = TEMP_WORKOUT;

    this.setWorkout(dummyWorkout);
  },
  setWorkout: function(workout) {
    AppDispatcher.handleAction({
      actionType: viewWorkoutConstants.SET_WORKOUT,
      data: workout
    });
  },
};

module.exports = viewWorkoutActions;
