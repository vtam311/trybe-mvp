/*
* @Author: vincetam
* @Date:   2015-07-29 17:19:35
* @Last Modified by:   vincetam
* @Last Modified time: 2015-10-06 15:48:10
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var feedConstants = require('../constants/feedConstants');

var feedActions = {
  getTrybeWorkout: function(){
    //To do: make a get req to server
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
      finalResult: {type: 'Time', value: '00:00:23'}
    };
    this.setTrybeWorkout(dummyWorkout);
  },
  setTrybeWorkout: function(workout){
    AppDispatcher.handleAction({
      actionType: feedConstants.SET_TRYBE_WORKOUT,
      data: workout
    });
  },
  getCards: function(feedView) {
    //To do: make get req to server
    var dummyCards = [
      {
        username: 'John Snow',
        activity: 'completed',
        createdAt: '3hr',
        trybe: 'APEX Ninja Warriors',
        day: 17, //for day number in training program
        workout: {
          id: 24,
          username: 'John_Snow',
          trybe: 'APEX Ninja Warriors',
          day: 17,
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
                  reps: 2,
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
          origin: 23, //copied from workout id 23
          finalResult: {type: 'Time', value: '00:15:23'}
        },
        origin: null, //to track if workout is inspired by another user
        likes: 17,
        comments: 3
      },
      {
        username: 'Arnold Stan',
        activity: 'modified',
        createdAt: '3hr',
        trybe: 'APEX Ninja Warriors',
        day: 17, //for day number in training program
        workout: {
          id: 24,
          username: 'Arnie247',
          trybe: 'APEX Ninja Warriors',
          day: 17,
          createdAt: '2015-06-28T02:16:44.000Z',
          type: 'Custom',
          parts: [
            {
              instructions:'Every 3 Minutes For As Long As Possible, Perform',
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
                  distance: {units: 'ft', val: 25},
                  url: null
                },
                {
                  name: 'Front Squats',
                  reps: 5,
                  load: {units: 'lb', val: 225},
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
          origin: 23, //copied from workout id 23
          finalResult: {type: 'Time', value: '01:00:01'}
        },
        origin: null, //to track if workout is inspired by another user
        likes: 24,
        comments: 6
      },
      {
        username: 'Jacob Greensbury',
        activity: 'modified',
        createdAt: '3hr',
        trybe: 'APEX Ninja Warriors',
        day: 17, //for day number in training program
        workout: {
          id: 24,
          username: 'Greens17',
          trybe: 'APEX Ninja Warriors',
          day: 17,
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
                  name: 'Towel Pull Ups',
                  reps: 7,
                  load: {units: 'lb', val: null},
                  time: null,
                  distance: {units: 'ft', val: null},
                  url: null
                },
                {
                  name: 'Front Squats',
                  reps: 3,
                  load: {units: 'lb', val: 155},
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
          origin: 23, //copied from workout id 23
          finalResult: {type: 'Time', value: '00:09:06'}
        },
        origin: null, //to track if workout is inspired by another user
        likes: 19,
        comments: 8
      }
    ];

    this.setCards(dummyCards);
  },
  setCards: function(cards) {
    AppDispatcher.handleAction({
      actionType: feedConstants.SET_CARDS,
      data: cards
    });
  },
  sendMessage: function(text){
    //To do: post to server
    //To do: call getCards

    //Temp solution: create dummy card, dispatch for store
    var DUMMY_COMMENT_CARD = {
      username: 'Jacob Greensbury',
      activity: 'comment',
      createdAt: '3hr',
      trybe: 'APEX Ninja Warriors',
      day: 17, //for day number in training program
      comment: text,
      likes: 3,
      comments: 3
    };

    AppDispatcher.handleAction({
      actionType: feedConstants.SEND_MESSAGE,
      data: DUMMY_COMMENT_CARD
    });
  }
};

module.exports = feedActions;
