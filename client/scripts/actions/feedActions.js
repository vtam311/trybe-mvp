/*
* @Author: vincetam
* @Date:   2015-07-29 17:19:35
* @Last Modified by:   vincetam
* @Last Modified time: 2015-09-23 15:48:46
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var feedConstants = require('../constants/feedConstants');

var feedActions = {
  getCards: function(feedView) {
    //To do: make get req to server
    var dummyCards = [
      {
        username: 'John Snow',
        activity: 'completed today\'s workout',
        createdAt: '3 hours ago',
        trybe: 'NorCal Strength & Conditioning CF On-Ramp',
        day: 17, //for day number in training program
        workout: {
          id: 24,
          username: 'John_Snow',
          trybe: 'CF San Mateo Team Elite',
          day: 17,
          createdAt: '2015-06-28T02:16:44.000Z',
          type: 'Custom',
          parts: [
            {
              instructions:'Every 2 Minutes For As Long As Possible, Complete:',
              media: {
                title: 'Speed and Efficiency',
                url: 'www.youtube.com'
              },
              exercises: [
                {
                  name: 'Rope Climb',
                  reps: null,
                  load: {units: 'lbs', val: null},
                  time: null,
                  distance: {units: 'ft', val: 15},
                  url: null
                },
                {
                  name: 'Front Squats',
                  reps: 2,
                  load: {units: 'lbs', val: 185},
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
          finalResult: {type: 'Time', value: '00:16:23'}
        },
        origin: null, //to track if workout is inspired by another user
        likes: 17,
        comments: 3
      }
    ];

    this.setCards(dummyCards);
  },
  setCards: function(cards) {
    AppDispatcher.handleAction({
      actionType: feedConstants.SET_CARDS,
      data: cards
    });
  }
};

module.exports = feedActions;
