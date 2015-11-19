/*
* @Author: vincetam
* @Date:   2015-10-23 16:05:18
* @Last Modified by:   vincetam
* @Last Modified time: 2015-11-18 20:05:35
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var createWorkoutConstants = require('../constants/createWorkoutConstants');
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';

var EXERCISE_TEMPLATE = {
  name: null,
  reps: null,
  load: {units: 'lbs', val: null},
  time: null,
  distance: {units: null, val: null},
  url: null
};

var PART_TEMPLATE = {
  instructions: null,
  media: {
    title: null,
    url: null
  },
  exercises: [],
  notes: null
};

var WORKOUT_TEMPLATE = {
  id: null,
  username: null,
  trybe: null,
  day: null,
  createdAt: null,
  type: null,
  parts: [PART_TEMPLATE],
  origin: null,
  finalResult: {type: 'Time', value: null}
};

var _store = {
  workout: WORKOUT_TEMPLATE,
  getIsCreatingOrModifying: 'CREATING' //by default is creating
};

var addExercise = function(data){
  var partIdx = data.partIdx;
  _store.workout.parts[partIdx].exercises.push(EXERCISE_TEMPLATE);
  console.log('createWorkoutStore addExercise called. num exercises:', _store.workout.parts[partIdx].exercises.length);
};

var addPart = function(){
  _store.workout.parts.push(PART_TEMPLATE);
};

var findExercise = function(data){
  var partIdx = data.partIdx;
  var exIdx = data.exIdx;
  return _store.workout.parts[partIdx].exercises[exIdx];
};

var setExerciseName = function(data) {
  var exName = data.exName;
  var targetExercise = findExercise(data);
  targetExercise.name = exName;
};

var setReps = function(data) {
  //To do: correct the exercise name
  var reps = data.reps;
  var targetExercise = findExercise(data);
  targetExercise.reps = reps;
};

var setLoad = function(data) {
  var load = data.load;
  var targetExercise = findExercise(data);
  targetExercise.load.val = load;
};

var setHold = function(data) {
  var hold = data.hold;
  var targetExercise = findExercise(data);
  targetExercise.hold = hold;
};

var setDist = function(data) {
  var dist = data.dist;
  var targetExercise = findExercise(data);
  targetExercise.distance.val = dist;
};

var setDistUnit = function(data) {
  var unit = data.unit;
  var targetExercise = findExercise(data);
  targetExercise.distance.units = unit;
};

var createWorkoutStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getWorkout: function(){
    return _store.workout;
  },
  getIsCreatingOrModifying: function(){
    return _store.getIsCreatingOrModifying;
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch (action.actionType) {
    case createWorkoutConstants.ADD_EXERCISE:
      addExercise(action.data);
      break;
    case createWorkoutConstants.SET_EXERCISE_NAME:
      setExerciseName(action.data);
      createWorkoutStore.emit(CHANGE_EVENT);
      break;
    case createWorkoutConstants.SET_REPS:
      setReps(action.data);
      createWorkoutStore.emit(CHANGE_EVENT);
      break;
    case createWorkoutConstants.SET_LOAD:
      setLoad(action.data);
      createWorkoutStore.emit(CHANGE_EVENT);
      break;
    case createWorkoutConstants.SET_HOLD:
      setHold(action.data);
      createWorkoutStore.emit(CHANGE_EVENT);
      break;
    case createWorkoutConstants.SET_DIST:
      setDist(action.data);
      createWorkoutStore.emit(CHANGE_EVENT);
      break;
    case createWorkoutConstants.SET_DISTUNIT:
      setDistUnit(action.data);
      createWorkoutStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = createWorkoutStore;
