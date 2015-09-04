'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var modifyWorkoutConstants = require('../constants/modifyWorkoutConstants');
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
  // isEditingTime: false,
  // isEditingReps: {}
};

var setIsModifyingWorkout = function(bool) {
  _store.IsModifyingWorkout = bool;
};

var setWorkout = function(workout) {
  _store.workout = workout;
};

// var toggleTimeEdit = function() {
//   _store.isEditingTime = !_store.isEditingTime;
// };

// var toggleRepEdit = function(exerciseNum) {
//   if(_store.isEditingReps[exerciseNum] === undefined){
//     _store.isEditingReps[exerciseNum] = true;
//   } else {
//     _store.isEditingReps[exerciseNum] = !_store.isEditingReps[exerciseNum];
//   }
// };

var setReps = function(data) {
  //To do: correct the exercise name
  var reps = data.reps;
  var roundNum = data.roundNum;
  var exerciseNum = data.exerciseNum;

  _store.workout.rounds['round' + roundNum][exerciseNum].reps = reps;
};

var modifyWorkoutStore = Object.assign({}, EventEmitter.prototype, {
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
  // getIsEditingTime: function(){
  //   return _store.isEditingTime;
  // },
  // getIsEditingReps: function(exerciseNum){
  //   return _store.isEditingReps[exerciseNum];
  // }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch (action.actionType) {
    case modifyWorkoutConstants.MODIFY_WORKOUT:
      setWorkout(action.data);
      setIsModifyingWorkout(true);
      modifyWorkoutStore.emit(CHANGE_EVENT);
      break;
    case modifyWorkoutConstants.UPDATE_WORKOUT:
      setWorkout(action.data);
      modifyWorkoutStore.emit(CHANGE_EVENT);
      break;
    // case modifyWorkoutConstants.TOGGLE_TIME_EDIT:
    //   toggleTimeEdit();
    //   modifyWorkoutStore.emit(CHANGE_EVENT);
    //   break;
    // case modifyWorkoutConstants.TOGGLE_REP_EDIT:
    //   toggleRepEdit(action.data);
    //   modifyWorkoutStore.emit(CHANGE_EVENT);
    //   break;
    case modifyWorkoutConstants.SET_REPS:
      setReps(action.data);
      modifyWorkoutStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = modifyWorkoutStore;
