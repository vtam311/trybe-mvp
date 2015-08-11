/*
* @Author: vincetam
* @Date:   2015-08-04 16:20:44
* @Last Modified by:   vincetam
* @Last Modified time: 2015-08-10 20:23:32
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
      trybe: 'Smolov\'s Squat Program',
      day: 17,
      type: 'Lift',
      instructions: null,
      time: null,
      rounds: {
        numRounds: 5,
        repeat: false,
        round1: {
          exercise1: {
            name: 'Squats',
            reps: 5,
            load: {units: 'lbs', val: 185},
            hold: null,
            standard: {type: null, value: null},
            focusArea: {name: null, progression: null},
            video: null
          }
        },
        round2: {
          exercise1: {
            name: 'Squats',
            reps: 5,
            load: {units: 'lbs', val: 190},
            hold: null,
            standard: {type: null, value: null},
            focusArea: {name: null, progression: null},
            video: null
          }
        },
        round3: {
          exercise1: {
            name: 'Squats',
            reps: 5,
            load: {units: 'lbs', val: 195},
            hold: null,
            standard: {type: null, value: null},
            focusArea: {name: null, progression: null},
            video: null
          }
        },
        round4: {
          exercise1: {
            name: 'Front Squats',
            reps: 5,
            load: {units: 'lbs', val: 175},
            hold: null,
            standard: {type: null, value: null},
            focusArea: {name: null, progression: null},
            video: null
          }
        },
        round5: {
          exercise1: {
            name: 'Front Squats',
            reps: 5,
            load: {units: 'lbs', val: 185},
            hold: null,
            standard: {type: null, value: null},
            focusArea: {name: null, progression: null},
            video: null
          }
        },
      },
      origin: 23, //copied from workout id 23
      finalResult: {type: null, value: null}
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
