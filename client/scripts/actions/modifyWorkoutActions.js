'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var modifyWorkoutConstants = require('../constants/modifyWorkoutConstants');

var modifyWorkoutActions = {
  getWorkout: function() {
    AppDispatcher.handleAction({
      actionType: modifyWorkoutConstants.GET_WORKOUT,
      data: null
    });
  },
  modifyWorkout: function(workout) {
    AppDispatcher.handleAction({
      actionType: modifyWorkoutConstants.MODIFY_WORKOUT,
      data: workout
    });
  },
  updateWorkout: function(workout) {
    AppDispatcher.handleAction({
      actionType: modifyWorkoutConstants.UPDATE_WORKOUT,
      data: workout
    });
  },
  // toggleTimeEdit: function() {
  //   AppDispatcher.handleAction({
  //     actionType: modifyWorkoutConstants.TOGGLE_TIME_EDIT,
  //     data: null
  //   });
  // },
  // toggleRepEdit: function(exerciseKey) {
  //   AppDispatcher.handleAction({
  //     actionType: modifyWorkoutConstants.TOGGLE_REP_EDIT,
  //     data: exerciseKey
  //   });
  // },
  setReps: function(reps, partIdx, exIdx) {
    AppDispatcher.handleAction({
      actionType: modifyWorkoutConstants.SET_REPS,
      data: {
        reps: reps,
        partIdx: partIdx,
        exIdx: exIdx
      }
    });
  },
  setLoad: function(load, partIdx, exIdx) {
    AppDispatcher.handleAction({
      actionType: modifyWorkoutConstants.SET_LOAD,
      data: {
        load: load,
        partIdx: partIdx,
        exIdx: exIdx
      }
    });
  },
  setHold: function(hold, partIdx, exIdx) {
    AppDispatcher.handleAction({
      actionType: modifyWorkoutConstants.SET_HOLD,
      data: {
        hold: hold,
        partIdx: partIdx,
        exIdx: exIdx
      }
    });
  },
  setDist: function(dist, partIdx, exIdx){
    AppDispatcher.handleAction({
      actionType: modifyWorkoutConstants.SET_DIST,
      data: {
        dist: dist,
        partIdx: partIdx,
        exIdx: exIdx
      }
    });
  },
  setDistUnit: function(unit, partIdx, exIdx){
    AppDispatcher.handleAction({
      actionType: modifyWorkoutConstants.SET_DISTUNIT,
      data: {
        unit: unit,
        partIdx: partIdx,
        exIdx: exIdx
      }
    });
  }
};

module.exports = modifyWorkoutActions;
