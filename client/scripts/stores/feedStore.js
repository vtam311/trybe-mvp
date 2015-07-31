/*
* @Author: vincetam
* @Date:   2015-07-29 17:19:16
* @Last Modified by:   vincetam
* @Last Modified time: 2015-07-30 21:14:49
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var feedConstants = require('../constants/feedConstants');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  // cards: []
  cards: [
      {
        username: 'feedStore Default',
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

var setCards = function(cards){
  _store.cards = cards;
  console.log('in feedStore setCards, cards now:', _store.cards);
};

var feedStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
    console.log('in feedStore, addChangeListener called');
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getCards: function(){
    console.log('in feedStore, getCards called, cards:', _store.cards);
    return _store.cards;
  },
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case feedConstants.SET_CARDS:
      setCards(action.data);
      feedStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = feedStore;
