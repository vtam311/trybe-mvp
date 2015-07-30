/*
* @Author: vincetam
* @Date:   2015-07-29 17:19:16
* @Last Modified by:   vincetam
* @Last Modified time: 2015-07-30 13:04:41
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var feedConstants = require('../constants/feedConstants'); //
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  cards: [
    {title: 'Card 1 Title', body: 'Card 1 Body', footer: 'Card 1 Footer'},
    {title: 'Card 2 Title', body: 'Card 2 Body', footer: 'Card 2 Footer'},
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
