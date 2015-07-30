/*
* @Author: vincetam
* @Date:   2015-07-29 17:19:16
* @Last Modified by:   vincetam
* @Last Modified time: 2015-07-30 14:19:35
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var feedConstants = require('../constants/feedConstants'); //
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  cards: [
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
  ]
};

var addCard = function(card){
  _store.cards.push(card);
};

var feedStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getCards: function(){
    return _store.cards;
  },
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case feedConstants.ADD_CARD:
      addCard(action.data);
      feedStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = feedStore;
