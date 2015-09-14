/*
* @Author: vincetam
* @Date:   2015-09-14 11:38:32
* @Last Modified by:   vincetam
* @Last Modified time: 2015-09-14 14:29:41
*/

'use strict';
var AppDispatcher = require('../dispatchers/AppDispatcher');
var doWorkoutConstants = require('../constants/doWorkoutConstants');

var doWorkoutActions = {
  setReps: function(reps, roundNum, exerciseNum) {
    AppDispatcher.handleAction({
      actionType: doWorkoutConstants.SET_REPS,
      data: {
        reps: reps,
        roundNum: roundNum,
        exerciseNum: exerciseNum
      }
    });
  },
  setLoad: function(load, roundNum, exerciseNum) {
    AppDispatcher.handleAction({
      actionType: doWorkoutConstants.SET_LOAD,
      data: {
        load: load,
        roundNum: roundNum,
        exerciseNum: exerciseNum
      }
    });
  },
  setHold: function(hold, roundNum, exerciseNum) {
    AppDispatcher.handleAction({
      actionType: doWorkoutConstants.SET_HOLD,
      data: {
        hold: hold,
        roundNum: roundNum,
        exerciseNum: exerciseNum
      }
    });
  }
};

module.exports = doWorkoutActions;
