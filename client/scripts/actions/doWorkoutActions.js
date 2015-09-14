/*
* @Author: vincetam
* @Date:   2015-09-14 11:38:32
* @Last Modified by:   vincetam
* @Last Modified time: 2015-09-14 14:49:06
*/

'use strict';
var AppDispatcher = require('../dispatchers/AppDispatcher');
var doWorkoutConstants = require('../constants/doWorkoutConstants');

var doWorkoutActions = {
  setReps: function(reps, roundNum, exerciseKey) {
    AppDispatcher.handleAction({
      actionType: doWorkoutConstants.SET_REPS,
      data: {
        reps: reps,
        roundNum: roundNum,
        exerciseKey: exerciseKey
      }
    });
  },
  setLoad: function(load, roundNum, exerciseKey) {
    AppDispatcher.handleAction({
      actionType: doWorkoutConstants.SET_LOAD,
      data: {
        load: load,
        roundNum: roundNum,
        exerciseKey: exerciseKey
      }
    });
  },
  setHold: function(hold, roundNum, exerciseKey) {
    AppDispatcher.handleAction({
      actionType: doWorkoutConstants.SET_HOLD,
      data: {
        hold: hold,
        roundNum: roundNum,
        exerciseKey: exerciseKey
      }
    });
  }
};

module.exports = doWorkoutActions;
