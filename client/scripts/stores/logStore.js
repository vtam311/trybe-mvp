/*
* @Author: VINCE
* @Date:   2015-09-25 14:20:07
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-10 15:03:37
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var logConstants = require('../constants/logConstants');
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';

var _store = {
  workouts: []
};

var setWorkouts = function(data){
  var workouts = data.workouts;
  workouts.forEach( (workout) => _store.workouts.push(workout) );
};

var addWorkout = function(data){
  var workout = data.workout;
  _store.workouts.push(workout);
};

var logStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getWorkouts: function(){
    return _store.workouts;
  },
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch (action.actionType) {
    case logConstants.SET_LOG_WORKOUTS:
      setWorkouts(action.data);
      logStore.emit(CHANGE_EVENT);
      break;
    case logConstants.ADD_LOG_WORKOUT:
      addWorkout(action.data);
      logStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = logStore;
