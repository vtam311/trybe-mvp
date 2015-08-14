/*
* @Author: vincetam
* @Date:   2015-07-29 17:19:16
* @Last Modified by:   VINCE
* @Last Modified time: 2015-08-14 14:00:03
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var feedEvents = require('../events/feedEvents');
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
  if(action.data instanceof feedEvents.SetCards) {
    setCards(action.data.cards);
    feedStore.emit(CHANGE_EVENT);
  }
});

module.exports = feedStore;
