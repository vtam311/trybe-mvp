/*
* @Author: VINCE
* @Date:   2015-09-25 14:07:47
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-10 14:55:55
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var logConstants = require('../constants/logConstants');

var newWorkout = require('../common/newWorkout');
var newObject = require('../common/copyObjectHelper');

var DUMMY_WORKOUT = require('../../../Documentation/workoutModel');
var DUMMY_WORKOUT_2 = newWorkout(DUMMY_WORKOUT);
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
  //once workouts are added to db, should no longer need this
  tempAddCard: function(workout){
    AppDispatcher.handleAction({
      actionType: logConstants.ADD_LOG_WORKOUT,
      data: {
        workout: workout
      }
    });
  }
};

module.exports = logActions;
