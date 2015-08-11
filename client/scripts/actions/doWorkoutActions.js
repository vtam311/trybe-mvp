/*
* @Author: vincetam
* @Date:   2015-08-04 16:20:44
* @Last Modified by:   vincetam
* @Last Modified time: 2015-08-11 10:23:31
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var doWorkoutEvents = require('../events/doWorkoutEvents.js');

var doWorkoutActions = {
  getWorkout: function() {
    //To do: make get req to server
    var dummyWorkout = {
      id: 24,
      username: 'John_Snow',
      trybe: 'Chris Spealler\'s CF Conditioning',
      day: 17,
      type: 'Timed Circuit',
      instructions: null,
      time: null,
      rounds: {
        numRounds: 5,
        repeat: true,
        round1: {
          exercise1: {
            name: 'Pull Ups',
            reps: 15,
            load: {units: 'lbs', val: null},
            hold: null,
            standard: {type: null, value: null},
            focusArea: {name: null, progression: null},
            video: null
          },
          exercise2: {
            name: 'Thrusters',
            reps: 15,
            load: {units: 'lbs', val: 95},
            hold: null,
            standard: {type: null, value: null},
            focusArea: {name: null, progression: null},
            video: null
          }
        }
      },
      origin: 23, //copied from workout id 23
      finalResult: {type: 'Time', value: '8:38'}
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
