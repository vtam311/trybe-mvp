/*
* @Author: vincetam
* @Date:   2015-07-29 17:19:35
* @Last Modified by:   vincetam
* @Last Modified time: 2015-08-04 16:53:57
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
          id: 23,
          type: 'AMRAP',
          time: null,
          rounds: null,
          exercises: [
            {name: 'Pull Ups', reps: '5', load: null},
            {name: 'Push Ups', reps: '10', load: null},
            {name: 'Squats', reps: '15', load: null}
          ],
          finalResult: {type: 'rounds', result: null},
        },
        origin: null, //to track if workout is inspired by another user
        likes: 89,
        comments: 22
      }
    ];

    this.setCards(dummyCards);
  },
  setCards: function(cards) {
    // console.log('in feedActions, setCards called');
    AppDispatcher.handleAction({
      data: new feedEvents.SetCards(cards)
    });
  }
};

module.exports = feedActions;
