/*
* @Author: VINCE
* @Date:   2015-09-25 14:20:07
* @Last Modified by:   VINCE
* @Last Modified time: 2015-09-25 14:59:38
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var logConstants = require('../constants/logConstants');
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';

var _store = {
  cards: []
};

var setCards = function(cards){
  cards.forEach( (i) => _store.cards.push(i) );
};

var addCard = function(card){
  _store.cards.push(card);
};

var logStore = Object.assign({}, EventEmitter.prototype, {
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
  switch (action.actionType) {
    case logConstants.SET_LOG_CARDS:
      setCards(action.data);
      logStore.emit(CHANGE_EVENT);
      break;
    case logConstants.ADD_LOG_CARD:
      addCard(action.data);
      logStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = logStore;
