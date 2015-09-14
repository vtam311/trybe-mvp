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
  // notes: '',
  // tutorials: {},
  origin: null,
  finalResult: {type: null, value: null}
};

var _store = {
  workout: BLANK_WORKOUT,
};

var setWorkout = function(workout) {
  _store.workout = workout;
};

var setReps = function(data) {
  //To do: correct the exercise name
  var reps = data.reps;
  var roundNum = data.roundNum;
  var exerciseNum = data.exerciseNum;
  var targetExercise = _store.workout.rounds['round' + roundNum][exerciseNum];

  targetExercise.reps = reps;
};

var setLoad = function(data) {
  var load = data.load;
  var roundNum = data.roundNum;
  var exerciseNum = data.exerciseNum;
  var targetExercise = _store.workout.rounds['round' + roundNum][exerciseNum];

  targetExercise.load.val = load;
};

var setHold = function(data) {
  var hold = data.hold;
  var roundNum = data.roundNum;
  var exerciseNum = data.exerciseNum;
  var targetExercise = _store.workout.rounds['round' + roundNum][exerciseNum];

  targetExercise.hold = hold;
};

var modifyWorkoutStore = Object.assign({}, EventEmitter.prototype, {
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
    case modifyWorkoutConstants.MODIFY_WORKOUT:
      setWorkout(action.data);
      modifyWorkoutStore.emit(CHANGE_EVENT);
      break;
    case modifyWorkoutConstants.UPDATE_WORKOUT:
      setWorkout(action.data);
      modifyWorkoutStore.emit(CHANGE_EVENT);
      break;
    case modifyWorkoutConstants.SET_REPS:
      setReps(action.data);
      modifyWorkoutStore.emit(CHANGE_EVENT);
      break;
    case modifyWorkoutConstants.SET_LOAD:
      setLoad(action.data);
      modifyWorkoutStore.emit(CHANGE_EVENT);
      break;
    case modifyWorkoutConstants.SET_HOLD:
      setHold(action.data);
      modifyWorkoutStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = modifyWorkoutStore;
