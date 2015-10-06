/*
* @Author: vincetam
* @Date:   2015-07-29 17:19:16
* @Last Modified by:   vincetam
* @Last Modified time: 2015-10-06 15:50:25
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var feedConstants = require('../constants/feedConstants');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  trybeWorkout: {},
  cards: []
};

var setCards = function(cards){
  _store.cards = cards;
};

var setTrybeWorkout = function(workout){
  _store.trybeWorkout = workout;
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
  getTrybeWorkout: function(){
    return _store.trybeWorkout;
  },
  getCards: function(){
    return _store.cards;
  },
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch (action.actionType) {
    case feedConstants.SET_TRYBE_WORKOUT:
      setTrybeWorkout(action.data);
      feedStore.emit(CHANGE_EVENT);
      break;
    case feedConstants.SET_CARDS:
      setCards(action.data);
      feedStore.emit(CHANGE_EVENT);
      break;
    case feedConstants.SEND_MESSAGE:
      addCard(action.data);
      feedStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = feedStore;
