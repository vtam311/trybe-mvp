/*
* @Author: vincetam
* @Date:   2015-07-29 17:19:35
* @Last Modified by:   vincetam
* @Last Modified time: 2015-08-16 10:52:24
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var feedConstants = require('../constants/feedConstants');

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
      },
      {
        username: 'Jonny Ive',
        activity: 'modified today\'s workout',
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
          instructions:
            'Every 2 minutes for as long as possible complete: \n' +
              '15-ft. rope climbs, 2 ascents \n' +
              '185-lb. front squats, 2 reps \n' +
            'Continue adding 2 reps to the front squat each interval for as long as you are able. \n' +
            'Track number of minutes completed',
          time: null,
          rounds: {
            numRounds: null,
            repeat: null,
            round1: {
              exercise1: {
                name: null,
                reps: null,
                load: {units: 'lbs', val: null},
                hold: null,
                standard: {type: null, value: null},
                focusArea: {name: null, progression: null},
                video: null
              }
            }
          },
          origin: 23, //copied from workout id 23
          finalResult: {type: 'Time', value: '00:16:00'}
        },
        origin: null, //to track if workout is inspired by another user
        likes: 17,
        comments: 3
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
      actionType: feedConstants.SET_CARDS,
      data: cards
    });
  }
};

module.exports = feedActions;
