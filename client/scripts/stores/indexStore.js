'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var indexConstants = require('../constants/indexConstants');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  selectedTab: 'feed'
};

var setTab = function(tab){
  _store.selectedTab = tab;
};

var indexStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getTab: function(){
    return _store.selectedTab;
  },
});

AppDispatcher.register(function(payload){
  var action = payload.action;

  switch (action.actionType) {
    case indexConstants.SET_TAB:
      setTab(action.data);
      indexStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = indexStore;
