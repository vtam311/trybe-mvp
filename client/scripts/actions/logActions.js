/*
* @Author: VINCE
* @Date:   2015-09-25 14:07:47
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-09 18:23:01
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var logConstants = require('../constants/logConstants');

var newWorkout = require('../common/newWorkout');
var newObject = require('../common/copyObjectHelper');
var sortByDate = require('../common/sortByDate');

var WORKOUT_MODEL = require('../../../Documentation/workoutModel');

var logActions = {
  getWorkouts: function() {
    //To do: make get req to server
    var DUMMY_WORKOUT = newWorkout(WORKOUT_MODEL);
    DUMMY_WORKOUT.id = Math.random() * 9999;
    DUMMY_WORKOUT.date = new Date('December 17, 2015 03:24:00');
    DUMMY_WORKOUT.parts[0].notes = 'Took a break, last time got 19';

    var DUMMY_WORKOUT_2 = newWorkout(WORKOUT_MODEL);
    DUMMY_WORKOUT_2.date = new Date('December 21, 2015 03:24:00');
    DUMMY_WORKOUT_2.id = Math.random() * 9999;
    DUMMY_WORKOUT_2.parts[0].notes = 'Felt great on this one. Big improvement overall.';

    var DUMMY_WORKOUT_3 = newWorkout(WORKOUT_MODEL);
    DUMMY_WORKOUT_3.date = new Date('December 11, 2015 03:24:00');
    DUMMY_WORKOUT_3.id = Math.random() * 9999;
    DUMMY_WORKOUT_3.parts[0].notes = 'Working on form, so took it slower today';
    DUMMY_WORKOUT_3.parts.push(newObject(DUMMY_WORKOUT_3.parts[0]));

    var DUMMY_WORKOUTS = [
      DUMMY_WORKOUT,
      DUMMY_WORKOUT_2,
      DUMMY_WORKOUT_3
    ];

    sortByDate.mergeSort(DUMMY_WORKOUTS, 0, DUMMY_WORKOUTS.length);

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
  },
  setCalendarMonthAndYear: function(month, year){
    AppDispatcher.handleAction({
      actionType: logConstants.SET_CALENDAR_MONTH_AND_YEAR,
      data: {
        month: month,
        year: year
      }
    });
  },
};

module.exports = logActions;
