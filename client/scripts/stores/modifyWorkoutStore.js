'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var modifyWorkoutConstants = require('../constants/modifyWorkoutConstants');
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';
var BLANK_WORKOUT = {
  id: null,
  username: null,
  trybe: null,
  day: null,
  createdAt: null,
  type: null,
  parts: [
    {
      instructions: null,
      media: {
        title: null,
        url: null
      },
      exercises: [
        {
          name: null,
          reps: null,
          load: {units: 'lbs', val: null},
          time: null,
          distance: {units: null, val: null},
          url: null
        }
      ],
      notes: null
    }
  ],
  origin: null,
  finalResult: {type: 'Time', value: null}
};

var _store = {
  workout: BLANK_WORKOUT,
};

var setWorkout = function(workout) {
  _store.workout = workout;
};

var setExerciseName = function(data) {
  var exName = data.exName;
  var partIdx = data.partIdx;
  var exIdx = data.exIdx;
  var targetExercise = _store.workout.parts[partIdx].exercises[exIdx];

  targetExercise.name = exName;
};

var setReps = function(data) {
  //To do: correct the exercise name
  var reps = data.reps;
  var partIdx = data.partIdx;
  var exIdx = data.exIdx;
  var targetExercise = _store.workout.parts[partIdx].exercises[exIdx];

  targetExercise.reps = reps;
};

var setLoad = function(data) {
  var load = data.load;
  var partIdx = data.partIdx;
  var exIdx = data.exIdx;
  var targetExercise = _store.workout.parts[partIdx].exercises[exIdx];

  targetExercise.load.val = load;
};

var setHold = function(data) {
  var hold = data.hold;
  var partIdx = data.partIdx;
  var exIdx = data.exIdx;
  var targetExercise = _store.workout.parts[partIdx].exercises[exIdx];

  targetExercise.hold = hold;
};

var setDist = function(data) {
  var dist = data.dist;
  var partIdx = data.partIdx;
  var exIdx = data.exIdx;
  var targetExercise = _store.workout.parts[partIdx].exercises[exIdx];

  targetExercise.distance.val = dist;
};

var setDistUnit = function(data) {
  var unit = data.unit;
  var partIdx = data.partIdx;
  var exIdx = data.exIdx;
  var targetExercise = _store.workout.parts[partIdx].exercises[exIdx];

  targetExercise.distance.units = unit;
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
    case modifyWorkoutConstants.SET_EXERCISE_NAME:
      setExerciseName(action.data);
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
    case modifyWorkoutConstants.SET_DIST:
      setDist(action.data);
      modifyWorkoutStore.emit(CHANGE_EVENT);
      break;
    case modifyWorkoutConstants.SET_DISTUNIT:
      setDistUnit(action.data);
      modifyWorkoutStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = modifyWorkoutStore;
