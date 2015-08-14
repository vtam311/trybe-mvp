/*
* @Author: vincetam
* @Date:   2015-07-29 17:19:35
* @Last Modified by:   VINCE
* @Last Modified time: 2015-08-14 13:59:28
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var feedEvents = require('../events/feedEvents.js');

var feedActions = {
  getCards: function(feedView) {
    //To do: make get req to server
    var dummyCards = [
      {
        username: 'Robb Wolf',
        activity: 'assigned today\'s workout',
        createdAt: '3 hours ago',
        trybe: 'NorCal Strength & Conditioning CF On-Ramp',
        day: 17, //for day number in training program
        workout: {
          id: 24,
          username: 'Robb_Wolf',
          trybe: 'NorCal Strength & Conditioning CF On-Ramp',
          day: 17,
          createdAt: '2015-06-28T02:16:44.000Z',
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
                name: 'Push Ups',
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
          origin: null,
          finalResult: {type: 'Rounds', value: '23'}
        },
        origin: null, //to track if workout is inspired by another user
        likes: 89,
        comments: 22
      },
      {
        username: 'Wilbert Tirta',
        activity: 'modified today\'s workout',
        createdAt: '2 hours ago',
        trybe: 'NorCal Strength & Conditioning CF On-Ramp',
        day: 17, //for day number in training program
        workout: {
          id: 25,
          username: 'Dub_T',
          trybe: 'NorCal Strength & Conditioning CF On-Ramp',
          day: 17,
          createdAt: '2015-06-28T02:16:44.000Z',
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
                name: 'Push Ups',
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
                load: {units: 'lbs', val: 45},
                hold: null,
                standard: {type: null, value: null},
                focusArea: {name: null, progression: null},
                video: null
              }
            }
          },
          origin: 24,
          finalResult: {type: 'Rounds', value: '16'}
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
      data: new feedEvents.SetCards(cards)
    });
  }
};

module.exports = feedActions;
