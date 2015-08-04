/*
* @Author: vincetam
* @Date:   2015-07-29 17:19:35
* @Last Modified by:   vincetam
* @Last Modified time: 2015-07-30 19:36:35
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var feedEvents = require('../events/feedEvents.js');

//To Do: update action properties
var feedActions = {
  getCards: function(feedView) {
    //To do: make get req to server
    var dummyCards = [
      {
        username: 'Robb Wolf',
        activity: 'assigned today\'s workout',
        createdAt: '3 hours ago',
        trybe: 'NorCal Strength & Conditioning CF On-Ramp',
        workout: {
          id: 23,
          type: 'timed circuit',
          time: null,
          rounds: 15,
          exercises: [
            {name: 'Pull Ups', reps: '5', load: null},
            {name: 'Push Ups', reps: '10', load: null},
            {name: 'Squats', reps: '15', load: null}
          ],
          finalResult: null,
        },
        likes: 89,
        comments: 22
      }
    ];

    this.setCards(dummyCards);
  },
  setCards: function(cards) {
    console.log('in feedActions, setCards called');
    AppDispatcher.handleAction({
      data: new feedEvents.SetCards(cards)
    });
  },
  addCard: function(card){
    AppDispatcher.handleAction({
      data: new feedEvents.AddCard(cards)
    });
  }
};

module.exports = feedActions;
