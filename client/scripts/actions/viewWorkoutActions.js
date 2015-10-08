'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var viewWorkoutConstants = require('../constants/viewWorkoutConstants');

var viewWorkoutActions = {
  getWorkout: function() {
    //To do: make get req to server
    var dummyWorkout = {
      id: 24,
      username: 'Ryan Ford',
      trybe: 'APEX Ninja Warriors',
      day: 3,
      createdAt: '2015-06-28T02:16:44.000Z',
      type: 'Custom',
      parts: [
        {
          instructions:'Every 2 Minutes For As Long As Possible, Perform',
          media: {
            title: 'Speed and Efficiency',
            url: 'www.youtube.com'
          },
          exercises: [
            {
              name: 'Rope Climb',
              reps: null,
              load: {units: 'lb', val: null},
              time: null,
              distance: {units: 'ft', val: 15},
              url: null
            },
            {
              name: 'Front Squats',
              reps: 3,
              load: {units: 'lb', val: 185},
              time: null,
              distance: null,
              url: null
            },
          ],
          notes:
            'Continue Adding 2 Reps to the Front Squat Each Interval. \n' +
            'Track number of minutes completed',
        }
      ],
      origin: 23,
      finalResult: {type: 'Time', value: '00:21:23'}
    };

    this.setDefaultWorkout(dummyWorkout);
  },
  setDefaultWorkout: function(workout) {
    AppDispatcher.handleAction({
      actionType: viewWorkoutConstants.SET_DEFAULT_WORKOUT,
      data: workout
    });
  },
  setSelectedWorkout: function(workout) {
    AppDispatcher.handleAction({
      actionType: viewWorkoutConstants.SET_SELECTED_WORKOUT,
      data: workout
    });
  }
};

module.exports = viewWorkoutActions;
