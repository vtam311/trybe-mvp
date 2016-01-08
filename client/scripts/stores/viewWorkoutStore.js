'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var editWorkoutStore = require('../stores/editWorkoutStore');
var viewWorkoutConstants = require('../constants/viewWorkoutConstants');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  //reflects which parts in viewWorkout have been logged
  //is an array of bools
  partsAreLogged: []
};


var initPartsAreLogged = function(data){
  //reset store's partsAreLogged to empty array
  _store.partsAreLogged = [];

  //get numParts from editWorkoutStore
  var numParts = editWorkoutStore.getNumParts();
  console.log('viewWorkoutStore got numParts from editWorkoutStore of', numParts);

  // var numParts = data.numParts;
  for(let i = 0; i < numParts; i++){
    _store.partsAreLogged.push(false);
  }
  console.log('viewWorkoutStore initPartsAreLogged set partsAreLogged to', _store.partsAreLogged);
};

var viewWorkoutStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getWorkout: function(){
    return _store.workout;
  },
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch (action.actionType) {
    case viewWorkoutConstants.INIT_PARTS_ARE_LOGGED:
      initPartsAreLogged(action.data);
      viewWorkoutStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = viewWorkoutStore;
