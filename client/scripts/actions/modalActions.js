/*
* @Author: vincetam
* @Date:   2016-01-12 12:10:22
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-12 13:12:57
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var modalConstants = require('../constants/modalConstants');

var modalActions = {
  openWorkoutModal: function() {
    AppDispatcher.handleAction({
      actionType: modalConstants.OPEN_WORKOUT_MODAL
    });
  },
  closeWorkoutModal: function() {
    AppDispatcher.handleAction({
      actionType: modalConstants.CLOSE_WORKOUT_MODAL
    });
  },
  openExerciseModal: function() {
    AppDispatcher.handleAction({
      actionType: modalConstants.OPEN_EXERCISE_MODAL
    });
  },
  closeExerciseModal: function() {
    AppDispatcher.handleAction({
      actionType: modalConstants.CLOSE_EXERCISE_MODAL
    });
  },
  openPartModal: function() {
    AppDispatcher.handleAction({
      actionType: modalConstants.OPEN_PART_MODAL
    });
  },
  closePartModal: function() {
    AppDispatcher.handleAction({
      actionType: modalConstants.CLOSE_PART_MODAL
    });
  },
  openDateModal: function() {
    AppDispatcher.handleAction({
      actionType: modalConstants.OPEN_DATE_MODAL
    });
  },
  closeDateModal: function() {
    AppDispatcher.handleAction({
      actionType: modalConstants.CLOSE_DATE_MODAL
    });
  },
  openLogModal: function() {
    AppDispatcher.handleAction({
      actionType: modalConstants.OPEN_LOG_MODAL
    });
  },
  closeLogModal: function() {
    AppDispatcher.handleAction({
      actionType: modalConstants.CLOSE_LOG_MODAL
    });
  },
};

module.exports = modalActions;
