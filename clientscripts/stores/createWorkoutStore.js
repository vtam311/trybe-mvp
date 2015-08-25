'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var createWorkoutConstants = require('../constants/createWorkoutConstants');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';
var BLANK_WORKOUT = {
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
};

var _store = {
  isModifyingWorkout: false,
  workout: BLANK_WORKOUT,
  isEditingTime: false,
  isEditingReps: false
};

var setIsModifyingWorkout = function(bool) {
  _store.IsModifyingWorkout = bool;
};

var setWorkout = function(workout) {
  _store.workout = workout;
};

var toggleTimeEdit = function() {
  _store.isEditingTime = !_store.isEditingTime;
};

// var toggleRepEdit = function() {
//   _store.isEditingReps = !_store.isEditingReps;
// };

var setReps = function(data) {
  //To do: correct the exercise name
  var reps = data.reps;
  var roundNum = data.roundNum;
  var exNum = data.exNum;

  _store.workout.rounds['round' + roundNum][exNum].reps = reps;
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
  getIsEditingTime: function(){
    return _store.isEditingTime;
  },
  getIsEditingReps: function(){
    return _store.isEditingReps;
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch (action.actionType) {
    case createWorkoutConstants.MODIFY_WORKOUT:
      setWorkout(action.data);
      setIsModifyingWorkout(true);
      createWorkoutStore.emit(CHANGE_EVENT);
      break;
    case createWorkoutConstants.UPDATE_WORKOUT:
      setWorkout(action.data);
      createWorkoutStore.emit(CHANGE_EVENT);
      break;
    case createWorkoutConstants.TOGGLE_TIME_EDIT:
      toggleTimeEdit();
      createWorkoutStore.emit(CHANGE_EVENT);
      break;
    // case createWorkoutConstants.TOGGLE_REP_EDIT:
    //   toggleRepEdit();
    //   createWorkoutStore.emit(CHANGE_EVENT);
    //   break;
    case createWorkoutConstants.SET_REPS:
      setReps(action.data);
      createWorkoutStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = createWorkoutStore;
