/*
* @Author: vincetam
* @Date:   2015-12-03 15:48:45
* @Last Modified by:   VINCE
* @Last Modified time: 2015-12-04 08:24:49
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
  setReps: function(reps, partIdx, exIdx) {
    AppDispatcher.handleAction({
      actionType: editExerciseConstants.SET_REPS,
      data: {
        reps: reps,
        partIdx: partIdx,
        exIdx: exIdx
      }
    });
  },
  setLoad: function(load, partIdx, exIdx) {
    AppDispatcher.handleAction({
      actionType: editExerciseConstants.SET_LOAD,
      data: {
        load: load,
        partIdx: partIdx,
        exIdx: exIdx
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
