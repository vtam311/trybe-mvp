/*
* @Author: vincetam
* @Date:   2015-08-04 16:21:33
* @Last Modified by:   vincetam
* @Last Modified time: 2015-08-16 11:11:11
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var doWorkoutConstants = require('../constants/doWorkoutConstants');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  isSelectedWorkout: false,
  workout: {}
};

var setIsSelectedWorkout = function(bool) {
  _store.isSelectedWorkout = bool;
};

var setWorkout = function(workout) {
  _store.workout = workout;
};

var doWorkoutStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getIsSelectedWorkout: function() {
    return _store.isSelectedWorkout;
  },
  getWorkout: function(){
    return _store.workout;
  },
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch (action.actionType) {
    case doWorkoutConstants.SET_DEFAULT_WORKOUT:
      setWorkout(action.data);
      doWorkoutStore.emit(CHANGE_EVENT);
      break;
    case doWorkoutConstants.SET_SELECTED_WORKOUT:
      setIsSelectedWorkout(true);
      setWorkout(action.data);
      doWorkoutStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = doWorkoutStore;
