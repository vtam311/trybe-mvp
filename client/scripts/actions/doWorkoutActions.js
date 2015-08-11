/*
* @Author: vincetam
* @Date:   2015-08-04 16:20:44
* @Last Modified by:   vincetam
* @Last Modified time: 2015-08-11 13:30:29
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
      type: 'AMRAP',
      instructions: null,
      time: '00:20:00',
      rounds: {
        numRounds: null,
        repeat: true,
        round1: {
          exercise1: {
            name: 'Pull Ups',
            reps: 5,
            load: {units: 'lbs', val: null},
            hold: null,
            standard: {type: null, value: null},
            focusArea: {name: null, progression: null},
            video: null
          },
          exercise2: {
            name: 'Push ups',
            reps: 10,
            load: {units: 'lbs', val: null},
            hold: null,
            standard: {type: null, value: null},
            focusArea: {name: null, progression: null},
            video: null
          },
          exercise3: {
            name: 'Squats',
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
      finalResult: {type: 'Rounds', value: '23'}
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
