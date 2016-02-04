/*
* @Author: vincetam
* @Date:   2015-12-03 15:48:45
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-03 19:41:00
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var editExerciseConstants = require('../constants/editExerciseConstants');

var editExerciseActions = {
  initializeExercise: function(exercise){
    AppDispatcher.handleAction({
      actionType: editExerciseConstants.INITIALIZE_EXERCISE,
      data: {
        exercise: exercise
      }
    });
  },
  setModifyOrCreate: function(type){
    AppDispatcher.handleAction({
      actionType: editExerciseConstants.SET_MODIFY_OR_CREATE,
      data: {
        type: type
      }
    });
  },
  setExerciseName: function(exName){
    AppDispatcher.handleAction({
      actionType: editExerciseConstants.SET_NAME,
      data: {
        exName: exName
      }
    });
  },
  setReps: function(reps) {
    AppDispatcher.handleAction({
      actionType: editExerciseConstants.SET_REPS,
      data: {
        reps: reps
      }
    });
  },
  setLoadVal: function(load) {
    AppDispatcher.handleAction({
      actionType: editExerciseConstants.SET_LOAD_VAL,
      data: {
        load: load
      }
    });
  },
  setLoadUnit: function(units) {
    AppDispatcher.handleAction({
      actionType: editExerciseConstants.SET_LOAD_UNIT,
      data: {
        units: units
      }
    });
  },
  setDistVal: function(dist){
    AppDispatcher.handleAction({
      actionType: editExerciseConstants.SET_DIST_VAL,
      data: {
        dist: dist
      }
    });
  },
  setDistUnit: function(unit){
    AppDispatcher.handleAction({
      actionType: editExerciseConstants.SET_DIST_UNIT,
      data: {
        unit: unit
      }
    });
  },
  setTime: function(time) {
    AppDispatcher.handleAction({
      actionType: editExerciseConstants.SET_TIME,
      data: {
        time: time
      }
    });
  },
};

module.exports = editExerciseActions;
