/*
* @Author: vincetam
* @Date:   2015-10-28 19:35:23
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-03 15:51:04
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var createWorkoutConstants = require('../constants/createWorkoutConstants');

var createWorkoutActions = {
  getWorkout: function() {
    AppDispatcher.handleAction({
      actionType: createWorkoutConstants.GET_WORKOUT,
      data: null
    });
  },
  addExercise: function(partIdx) {
    AppDispatcher.handleAction({
      actionType: createWorkoutConstants.ADD_EXERCISE,
      data: {
        partIdx: partIdx
      }
    });
  },
  addPart: function(){
    AppDispatcher.handleAction({
      actionType: createWorkoutConstants.ADD_PART,
      data: null
    });
  },
  setTargetExerciseIdx: function(partIdx, exIdx){
    AppDispatcher.handleAction({
      actionType: createWorkoutConstants.SET_TARGET_EXERCISE_IDX,
      data: {
        partIdx: partIdx,
        exIdx: exIdx
      }
    });
  },
  // setExerciseName: function(exName, partIdx, exIdx){
  //   AppDispatcher.handleAction({
  //     actionType: createWorkoutConstants.SET_EXERCISE_NAME,
  //     data: {
  //       exName: exName,
  //       partIdx: partIdx,
  //       exIdx: exIdx
  //     }
  //   });
  // },
  // setReps: function(reps, partIdx, exIdx) {
  //   AppDispatcher.handleAction({
  //     actionType: createWorkoutConstants.SET_REPS,
  //     data: {
  //       reps: reps,
  //       partIdx: partIdx,
  //       exIdx: exIdx
  //     }
  //   });
  // },
  // setLoad: function(load, partIdx, exIdx) {
  //   AppDispatcher.handleAction({
  //     actionType: createWorkoutConstants.SET_LOAD,
  //     data: {
  //       load: load,
  //       partIdx: partIdx,
  //       exIdx: exIdx
  //     }
  //   });
  // },
  // setHold: function(hold, partIdx, exIdx) {
  //   AppDispatcher.handleAction({
  //     actionType: createWorkoutConstants.SET_HOLD,
  //     data: {
  //       hold: hold,
  //       partIdx: partIdx,
  //       exIdx: exIdx
  //     }
  //   });
  // },
  // setDist: function(dist, partIdx, exIdx){
  //   AppDispatcher.handleAction({
  //     actionType: createWorkoutConstants.SET_DIST,
  //     data: {
  //       dist: dist,
  //       partIdx: partIdx,
  //       exIdx: exIdx
  //     }
  //   });
  // },
  // setDistUnit: function(unit, partIdx, exIdx){
  //   AppDispatcher.handleAction({
  //     actionType: createWorkoutConstants.SET_DISTUNIT,
  //     data: {
  //       unit: unit,
  //       partIdx: partIdx,
  //       exIdx: exIdx
  //     }
  //   });
  // }
};

module.exports = createWorkoutActions;
