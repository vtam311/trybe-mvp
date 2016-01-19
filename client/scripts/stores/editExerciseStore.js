/*
* @Author: vincetam
* @Date:   2015-12-03 15:29:02
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-19 10:36:36
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var editExerciseConstants = require('../constants/editExerciseConstants');

var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';
var copyObjHelper = require('../common/copyObjectHelper');

var _store = {
  exercise: null,
  isModifyOrCreate: null,
};

var initializeExercise = function(data) {
  //Initializes exercise with exercise user selected
  //Retrieved from editWorkoutStore's targetExercise
  //Using copyObjHelper to prevent changes in this store to auto
  //change in editWorkoutStore, as assignment would reference
  //same place in memory
  var ex = copyObjHelper(data.exercise);
  _store.exercise = ex;
};

var setModifyOrCreate = function(data) {
  var type = data.type;
  _store.isModifyOrCreate = type;
};

var setExerciseName = function(data) {
  var exName = data.exName;
  _store.exercise.name = exName;
};

var setReps = function(data) {
  var reps = data.reps;
  _store.exercise.reps = reps;
};

var setLoadVal = function(data) {
  var load = data.load;
  _store.exercise.load.val = load;
};

var setLoadUnit = function(data) {
  var units = data.units;
  _store.exercise.load.units = units;
};

var setDistVal = function(data) {
  var dist = data.dist;
  _store.exercise.distance.val = dist;
};

var setDistUnit = function(data) {
  var unit = data.unit;
  _store.exercise.distance.units = unit;
};

var setTime = function(data) {
  var time = data.time;
  _store.exercise.time = time;
};

var editExerciseStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getExercise: function(){
    //Exercise being modified or created.
    //Used in createExerciseModal
    return _store.exercise;
  },
  getIsModifyOrCreate: function(){
    return _store.isModifyOrCreate;
  },
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch (action.actionType) {
    case editExerciseConstants.INITIALIZE_EXERCISE:
      initializeExercise(action.data);
      editExerciseStore.emit(CHANGE_EVENT);
      break;
    case editExerciseConstants.SET_MODIFY_OR_CREATE:
      setModifyOrCreate(action.data);
      editExerciseStore.emit(CHANGE_EVENT);
      break;
    case editExerciseConstants.SET_EXERCISE_NAME:
      setExerciseName(action.data);
      editExerciseStore.emit(CHANGE_EVENT);
      break;
    case editExerciseConstants.SET_REPS:
      setReps(action.data);
      editExerciseStore.emit(CHANGE_EVENT);
      break;
    case editExerciseConstants.SET_LOAD_VAL:
      setLoadVal(action.data);
      editExerciseStore.emit(CHANGE_EVENT);
      break;
    case editExerciseConstants.SET_LOAD_UNIT:
      setLoadUnit(action.data);
      editExerciseStore.emit(CHANGE_EVENT);
      break;
    case editExerciseConstants.SET_DIST_VAL:
      setDistVal(action.data);
      editExerciseStore.emit(CHANGE_EVENT);
      break;
    case editExerciseConstants.SET_DIST_UNIT:
      setDistUnit(action.data);
      editExerciseStore.emit(CHANGE_EVENT);
      break;
    case editExerciseConstants.SET_TIME:
      setTime(action.data);
      editExerciseStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = editExerciseStore;
