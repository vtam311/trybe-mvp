/*
* @Author: vincetam
* @Date:   2015-08-04 16:20:44
* @Last Modified by:   vincetam
* @Last Modified time: 2015-08-16 10:53:27
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var doWorkoutConstants = require('../constants/doWorkoutConstants');

var doWorkoutActions = {
  getWorkout: function() {
    //To do: make get req to server
    var dummyWorkout = {
      id: 24,
      username: 'John_Snow',
      trybe: 'Ryan Hurst\'s Muscle Up Program',
      day: 17,
      type: 'Progressions',
      instructions: null,
      time: null,
      rounds: {
        numRounds: 5,
        repeat: true,
        round1: {
          exercise1: {
            name: 'Pull Ups',
            reps: 10,
            load: {units: 'lbs', val: null},
            hold: null,
            standard: {type: 'reps', value: 10},
            focusArea: {name: 'Strength', progression: 1},
            video: null
          },
          exercise2: {
            name: 'False Grip Hang',
            reps: null,
            load: {units: 'lbs', val: null},
            hold: 60,
            standard: {type: 'time', value: 60},
            focusArea: {name: 'Grip', progression: 3},
            video: null
          }
        }
      },
      origin: 23, //copied from workout id 23
      finalResult: {type: null, value: null}
    };

    this.setDefaultWorkout(dummyWorkout);
  },
  setDefaultWorkout: function(workout) {
    AppDispatcher.handleAction({
      actionType: doWorkoutConstants.SET_DEFAULT_WORKOUT,
      data: workout
    });
  },
  setSelectedWorkout: function(workout) {
    AppDispatcher.handleAction({
      actionType: doWorkoutConstants.SET_SELECTED_WORKOUT,
      data: workout
    });
  }
};

module.exports = doWorkoutActions;
