/*
* @Author: vincetam
* @Date:   2015-08-04 16:20:44
* @Last Modified by:   vincetam
* @Last Modified time: 2015-08-04 17:57:17
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var doWorkoutEvents = require('../events/doWorkoutEvents.js');

var doWorkoutActions = {
  getWorkout: function() {
    //To do: make get req to server
    var dummyWorkout = {
      id: 24,
      username: 'John Snow',
      trybe: 'NorCal Strength & Conditioning CF On-Ramp',
      day: 17,
      type: 'AMRAP',
      time: "00:20:00",
      rounds: null,
      exercises: [
        {name: 'Pull Ups', reps: '5', load: null},
        {name: 'Push Ups', reps: '10', load: null},
        {name: 'Squats', reps: '15', load: null}
      ],
      origin: 23, //copied from workout id 23
      finalResult: {type: 'rounds', result: null},
    };

    this.setWorkout(dummyWorkout);
  },
  setWorkout: function(workout) {
    console.log('in doWorkoutActions, setWorkout called');
    AppDispatcher.handleAction({
      data: new doWorkoutEvents.SetWorkout(workout)
    });
  }
};

module.exports = doWorkoutActions;
