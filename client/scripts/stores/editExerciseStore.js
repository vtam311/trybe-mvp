/*
* @Author: vincetam
* @Date:   2015-12-03 15:29:02
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-03 15:48:08
*/

'use strict';

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var editExerciseConstants = require('../constants/editExerciseConstants');
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

var _store = {
  exercise: EXERCISE_TEMPLATE
};

var setExerciseName = function(data) {
  var exName = data.exName;
  _store.exercise.name = exName;
};

var setReps = function(data) {
  //To do: correct the exercise name
  var reps = data.reps;
  _store.exercise.reps = reps;
};

var setLoad = function(data) {
  var load = data.load;
  _store.exercise.load.val = load;
};

var setHold = function(data) {
  var hold = data.hold;
  _store.exercise.hold = hold;
};

var setDist = function(data) {
  var dist = data.dist;
  _store.exercise.distance.val = dist;
};

var setDistUnit = function(data) {
  var unit = data.unit;
  _store.exercise.distance.units = unit;
};

var editExerciseStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  //Target exercise being modified or created.
  //Used for reference in createExerciseModal
  getTargetExercise: function(){
    return _store.exercise;
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch (action.actionType) {
    case editExerciseConstants.SET_EXERCISE_NAME:
      setExerciseName(action.data);
      editExerciseStore.emit(CHANGE_EVENT);
      break;
    case editExerciseConstants.SET_REPS:
      setReps(action.data);
      editExerciseStore.emit(CHANGE_EVENT);
      break;
    case editExerciseConstants.SET_LOAD:
      setLoad(action.data);
      editExerciseStore.emit(CHANGE_EVENT);
      break;
    case editExerciseConstants.SET_HOLD:
      setHold(action.data);
      editExerciseStore.emit(CHANGE_EVENT);
      break;
    case editExerciseConstants.SET_DIST:
      setDist(action.data);
      editExerciseStore.emit(CHANGE_EVENT);
      break;
    case editExerciseConstants.SET_DISTUNIT:
      setDistUnit(action.data);
      editExerciseStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = editExerciseStore;
