/*
* @Author: vincetam
* @Date:   2015-07-29 17:19:16
* @Last Modified by:   vincetam
* @Last Modified time: 2015-08-16 11:11:08
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var feedConstants = require('../constants/feedConstants');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  cards: []
};

var setCards = function(cards){
  // console.log('in feedStore, updating cards to:', cards);
  _store.cards = cards;
};

var feedStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getCards: function(){
    // console.log('in feedStore, getCards called. returning:', _store.cards);
    return _store.cards;
  },
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch (action.actionType) {
    case feedConstants.SET_CARDS:
      setCards(action.data);
      feedStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = feedStore;
