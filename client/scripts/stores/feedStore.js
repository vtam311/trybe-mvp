/*
* @Author: vincetam
* @Date:   2015-07-29 17:19:16
* @Last Modified by:   vincetam
* @Last Modified time: 2015-07-30 20:04:24
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
  if(action.data instanceof feedEvents.SetCards) {
    setCards(action.data.cards);
      feedStore.emit(CHANGE_EVENT);
  }
});

module.exports = feedStore;
