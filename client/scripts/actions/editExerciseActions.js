/*
* @Author: vincetam
* @Date:   2015-12-03 15:48:45
* @Last Modified by:   VINCE
* @Last Modified time: 2015-12-08 09:38:26
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
  setExerciseName: function(exName, partIdx, exIdx){
    AppDispatcher.handleAction({
      actionType: editExerciseConstants.SET_EXERCISE_NAME,
      data: {
        exName: exName,
        partIdx: partIdx,
        exIdx: exIdx
      }
    });
  },
  setReps: function(reps) {
    AppDispatcher.handleAction({
      actionType: editExerciseConstants.SET_REPS,
      data: {
        reps: reps,
      }
    });
  },
  setLoadVal: function(load) {
    AppDispatcher.handleAction({
      actionType: editExerciseConstants.SET_LOAD_VAL,
      data: {
        load: load,
      }
    });
  },
  setLoadUnits: function(units) {
    console.log('editExerciseActions setLoadUnits called');
    AppDispatcher.handleAction({
      actionType: editExerciseConstants.SET_LOAD_UNITS,
      data: {
        units: units,
      }
    });
  },
  setHold: function(hold, partIdx, exIdx) {
    AppDispatcher.handleAction({
      actionType: editExerciseConstants.SET_HOLD,
      data: {
        hold: hold,
        partIdx: partIdx,
        exIdx: exIdx
      }
    });
  },
  setDist: function(dist, partIdx, exIdx){
    AppDispatcher.handleAction({
      actionType: editExerciseConstants.SET_DIST,
      data: {
        dist: dist,
        partIdx: partIdx,
        exIdx: exIdx
      }
    });
  },
  setDistUnit: function(unit, partIdx, exIdx){
    AppDispatcher.handleAction({
      actionType: editExerciseConstants.SET_DISTUNIT,
      data: {
        unit: unit,
        partIdx: partIdx,
        exIdx: exIdx
      }
    });
  }
};

module.exports = editExerciseActions;
