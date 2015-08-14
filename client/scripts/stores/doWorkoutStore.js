/*
* @Author: vincetam
* @Date:   2015-08-04 16:21:33
* @Last Modified by:   vincetam
* @Last Modified time: 2015-08-13 17:53:59
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var doWorkoutEvents = require('../events/doWorkoutEvents');
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
  if(action.data instanceof doWorkoutEvents.SetDefaultWorkout) {
    setWorkout(action.data.workout);
      doWorkoutStore.emit(CHANGE_EVENT);
  }
  if(action.data instanceof doWorkoutEvents.SetSelectedWorkout) {
    setIsSelectedWorkout(false);
    setWorkout(action.data.workout);
      doWorkoutStore.emit(CHANGE_EVENT);
  }
});

module.exports = doWorkoutStore;
