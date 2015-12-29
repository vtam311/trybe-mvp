/*
* @Author: vincetam
* @Date:   2015-10-23 16:05:18
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-28 18:50:29
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var editWorkoutConstants = require('../constants/editWorkoutConstants');
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';
var copyObjectHelper = require('../common/copyObjectHelper');

var EXERCISE_TEMPLATE = {
  name: null,
  reps: null,
  load: {units: 'lb', val: null},
  time: null,
  distance: {units: null, val: null},
  src: null
};

var PART_TEMPLATE = {
  name: null,
  instructions: null,
  media: {
    title: null,
    src: null
  },
  exercises: [],
  result: {isRecording: false, type: null, val: null},
  notes: null
};

var WORKOUT_TEMPLATE = {
  id: null,
  username: null,
  trybe: null,
  day: null,
  date: new Date(),
  //copyObject so parts don't refer to same obj
  parts: [copyObjectHelper(PART_TEMPLATE)],
  origin: null,
};

var _store = {
  workout: WORKOUT_TEMPLATE,
  targetPartIdx: 0, //set to null once setTargetPartIdx is written
  targetExerciseIdx: null,
};

var setWorkout = function(data){
  var workout = data.workout;
  console.log('editWorkoutStore setWorkout to', workout);
  _store.workout = workout;
};

var resetWorkout = function(){
  _store.workout = WORKOUT_TEMPLATE;
};

var saveDate = function(data){
  var date = data.date;
  _store.workout.date = date;
};

var setInstructions = function(data){
  var instructions = data.instructions;
  var partIdx = data.partIdx;
  _store.workout.parts[partIdx].instructions = instructions;
};

var addExercise = function(data){
  var partIdx = data.partIdx;

  //Set exIdx to the next empty index of exercises array
  //Adding of exercise happens once saveExercise is called
  var exIdx = _store.workout.parts[partIdx].exercises.length;
  _store.targetExerciseIdx = exIdx;
  _store.targetPartIdx = partIdx;
};

var removeExercise = function(data){
  var partIdx = data.partIdx;
  var exIdx = data.exIdx;
  _store.workout.parts[partIdx].exercises.splice(exIdx, 1);
};

//Specifies which exercise of workout to edit
var setTargetExerciseIdx = function(data){
  var partIdx = data.partIdx;
  var exIdx = data.exIdx;
  _store.targetExerciseIdx = exIdx;
};

var saveExercise = function(data){
  var partIdx = _store.targetPartIdx;
  var exIdx = _store.targetExerciseIdx;
  var exercise = data.exercise;
  _store.workout.parts[partIdx].exercises[exIdx] = exercise;
};

var toggleRecording = function(data){
  var bool = data.bool;
  var partIdx = data.partIdx;
  _store.workout.parts[partIdx].result.isRecording = bool;
};

var setResultType = function(data){
  var type = data.type;
  var partIdx = data.partIdx;
  _store.workout.parts[partIdx].result.type = type;
};

var addPart = function(){
  var newPart = copyObjectHelper(PART_TEMPLATE);
  _store.workout.parts.push(newPart);
};

var removePart = function(){
  var partIdx = _store.targetPartIdx;
  _store.workout.parts.splice(partIdx, 1);
};

//Specifies which part of workout to edit
var setTargetPartIdx = function(data){
  var partIdx = data.partIdx;
  _store.targetPartIdx = partIdx;
};

var setPartName = function(data){
  var name = data.name;
  var partIdx = _store.targetPartIdx;
  _store.workout.parts[partIdx].name = name;
};

var editWorkoutStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getWorkout: function(){
    return _store.workout;
  },
  getDate: function(){
    return _store.workout.date;
  },
  getTargetPartIdx: function(){
    return _store.targetPartIdx;
  },
  getTargetExerciseIdx: function(){
    return _store.targetExerciseIdx;
  },
  getTargetExercise: function(){
    //Target exercise being modified or created.
    //Used for reference in editExerciseModal
    var partIdx = _store.targetPartIdx;
    var exIdx = _store.targetExerciseIdx;
    var targetExercise = _store.workout.parts[partIdx].exercises[exIdx];

    //If partIdx and exIdx are pointing to an existing
    //exercise, send it. Otherwise, user is creating new
    //exercise, so send exercise template.
    if(targetExercise) {
      return _store.workout.parts[partIdx].exercises[exIdx];
    } else {
      return EXERCISE_TEMPLATE;
    }
  },
  getPartName: function(){
    var partIdx = _store.targetPartIdx;
    return _store.workout.parts[partIdx].name;
  },
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch (action.actionType) {
    case editWorkoutConstants.SET_WORKOUT:
      setWorkout(action.data);
      editWorkoutStore.emit(CHANGE_EVENT);
      break;
    case editWorkoutConstants.RESET_WORKOUT:
      resetWorkout();
      editWorkoutStore.emit(CHANGE_EVENT);
      break;
    case editWorkoutConstants.SAVE_DATE:
      saveDate(action.data);
      editWorkoutStore.emit(CHANGE_EVENT);
      break;
    case editWorkoutConstants.SET_INSTRUCTIONS:
      setInstructions(action.data);
      editWorkoutStore.emit(CHANGE_EVENT);
      break;
    case editWorkoutConstants.ADD_EXERCISE:
      addExercise(action.data);
      editWorkoutStore.emit(CHANGE_EVENT);
      break;
    case editWorkoutConstants.REMOVE_EXERCISE:
      removeExercise(action.data);
      editWorkoutStore.emit(CHANGE_EVENT);
      break;
    case editWorkoutConstants.SET_TARGET_EXERCISE_IDX:
      setTargetExerciseIdx(action.data);
      editWorkoutStore.emit(CHANGE_EVENT);
      break;
    case editWorkoutConstants.SAVE_EXERCISE:
      saveExercise(action.data);
      editWorkoutStore.emit(CHANGE_EVENT);
      break;
    case editWorkoutConstants.TOGGLE_RECORDING:
      toggleRecording(action.data);
      editWorkoutStore.emit(CHANGE_EVENT);
      break;
    case editWorkoutConstants.SET_RESULT_TYPE:
      setResultType(action.data);
      editWorkoutStore.emit(CHANGE_EVENT);
      break;
    case editWorkoutConstants.ADD_PART:
      addPart();
      editWorkoutStore.emit(CHANGE_EVENT);
      break;
    case editWorkoutConstants.REMOVE_PART:
      removePart();
      editWorkoutStore.emit(CHANGE_EVENT);
      break;
    case editWorkoutConstants.SET_TARGET_PART_IDX:
      setTargetPartIdx(action.data);
      editWorkoutStore.emit(CHANGE_EVENT);
      break;
    case editWorkoutConstants.SET_PART_NAME:
      setPartName(action.data);
      editWorkoutStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = editWorkoutStore;
