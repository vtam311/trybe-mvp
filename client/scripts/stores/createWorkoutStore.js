'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var createWorkoutConstants = require('../constants/createWorkoutConstants');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  isModifyingWorkout: false,
  workout: {
    id: null, //must assign unique id
    username: null, //must assign
    trybe: null,
    day: null,
    createdAt: null,
    type: null,
    instructions: null,
    time: null,
    rounds: {
      numRounds: null,
      repeat: null,
      round1: {
        exercise1: {
          name: null,
          reps: null,
          load: {units: 'lbs', val: null},
          hold: null,
          standard: {type: 'reps', value: null},
          focusArea: {name: null, progression: null},
          video: null
        }
      }
    },
    origin: null,
    finalResult: {type: null, value: null}
  }
};

var setIsModifyingWorkout = function(bool) {
  _store.IsModifyingWorkout = bool;
};

var setWorkout = function(workout) {
  _store.workout = workout;
};

var createWorkoutStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getIsModifyingWorkout: function() {
    return _store.isModifyingWorkout;
  },
  getWorkout: function(){
    return _store.workout;
  },
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch (action.actionType) {
    case createWorkoutConstants.MODIFY_WORKOUT:
      setWorkout(action.data);
      setIsModifyingWorkout(true);
      createWorkoutStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = createWorkoutStore;
