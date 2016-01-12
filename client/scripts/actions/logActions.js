/*
* @Author: VINCE
* @Date:   2015-09-25 14:07:47
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-11 14:59:09
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var logConstants = require('../constants/logConstants');

var newWorkout = require('../common/newWorkout');
var newObject = require('../common/copyObjectHelper');

var DUMMY_WORKOUT = require('../../../Documentation/workoutModel');
DUMMY_WORKOUT.id = 2;
var DUMMY_WORKOUT_2 = newWorkout(DUMMY_WORKOUT);
DUMMY_WORKOUT.id = 3;
DUMMY_WORKOUT_2.parts.push(newObject(DUMMY_WORKOUT.parts[0]));

var logActions = {
  getWorkouts: function() {
    //To do: make get req to server
    var DUMMY_WORKOUTS = [
      newWorkout(DUMMY_WORKOUT),
      newWorkout(DUMMY_WORKOUT_2)
    ];

    this.setWorkouts(DUMMY_WORKOUTS);
  },
  setWorkouts: function(workouts) {
    AppDispatcher.handleAction({
      actionType: logConstants.SET_LOG_WORKOUTS,
      data: {
        workouts: workouts
      }
    });
  },
  //manually save a workout part's results to log
  //for immediate rendering
  addWorkoutPart: function(workout, partIdx){
    AppDispatcher.handleAction({
      actionType: logConstants.ADD_WORKOUT_PART,
      data: {
        workout: workout,
        partIdx: partIdx
      }
    });
  }
};

module.exports = logActions;
