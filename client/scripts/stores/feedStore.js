/*
* @Author: vincetam
* @Date:   2015-07-29 17:19:16
* @Last Modified by:   vincetam
* @Last Modified time: 2015-08-13 15:41:53
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
  if(action.data instanceof feedEvents.SetCards) {
    setCards(action.data.cards);
      feedStore.emit(CHANGE_EVENT);
  }
});

module.exports = feedStore;
