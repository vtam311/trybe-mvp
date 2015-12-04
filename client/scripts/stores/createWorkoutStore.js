/*
* @Author: vincetam
* @Date:   2015-10-23 16:05:18
* @Last Modified by:   VINCE
* @Last Modified time: 2015-12-04 09:53:38
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var createWorkoutConstants = require('../constants/createWorkoutConstants');
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';
var copyObjectHelper = require('../common/copyObjectHelper');

var TEMP_EXERCISES_ARRAY_FOR_DEBUGGING = [
  {
    name: 'Kongs',
    reps: 5,
    load: {units: 'lbs', val: null},
    time: null,
    distance: {units: null, val: null},
    url: null
  },
  {
    name: 'Tic Tacs',
    reps: 5,
    load: {units: 'lbs', val: null},
    time: null,
    distance: {units: null, val: null},
    url: null
  },
  {
    name: 'Precisions',
    reps: 5,
    load: {units: 'lbs', val: null},
    time: null,
    distance: {units: null, val: null},
    url: null
  },
];

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
  // exercises: [],
  exercises: TEMP_EXERCISES_ARRAY_FOR_DEBUGGING,
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
  targetPartIdx: 0, //set to null once setTargetPartIdx is written
  targetExerciseIdx: null,
};

var addExercise = function(data){
  var partIdx = data.partIdx;
  var newExerciseObj = copyObjectHelper(EXERCISE_TEMPLATE);
  _store.workout.parts[partIdx].exercises.push(newExerciseObj);
};

var addPart = function(){
  _store.workout.parts.push(PART_TEMPLATE);
};

var setTargetExerciseIdx = function(data){
  var partIdx = data.partIdx;
  var exIdx;
  //If creating a new exercise, exIdx will not be supplied,
  //and addExercise will have already been called.
  //So set to last index val of exercises array
  if(data.exIdx === undefined) {
    exIdx = _store.workout.parts[partIdx].exercises.length - 1;
  } else {
    exIdx = data.exIdx;
  }

  _store.targetExerciseIdx = exIdx;
};

var saveExercise = function(data){
  var partIdx = _store.targetPartIdx;
  var exIdx = _store.targetExerciseIdx;
  var exercise = data.exercise;
  _store.workout.parts[partIdx].exercises[exIdx] = exercise;
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
  getTargetPartIdx: function(){
    return _store.targetPartIdx;
  },
  getTargetExerciseIdx: function(){
    return _store.targetExerciseIdx;
  },
  getTargetExercise: function(){
    //Target exercise being modified or created.
    //Used for reference in createExerciseModal
    var partIdx = _store.targetPartIdx;
    var exIdx = _store.targetExerciseIdx;
    return _store.workout.parts[partIdx].exercises[exIdx];
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch (action.actionType) {
    case createWorkoutConstants.ADD_EXERCISE:
      addExercise(action.data);
      break;
    //Add ADD_PART
    case createWorkoutConstants.SET_TARGET_EXERCISE_IDX:
      setTargetExerciseIdx(action.data);
      break;
    case createWorkoutConstants.SAVE_EXERCISE:
      saveExercise(action.data);
      break;
    default:
      return true;
  }
});

module.exports = createWorkoutStore;
