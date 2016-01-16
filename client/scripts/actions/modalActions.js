/*
* @Author: vincetam
* @Date:   2016-01-12 12:10:22
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-16 12:59:51
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var modalConstants = require('../constants/modalConstants');

var modalActions = {
  openEditWorkoutModal: function() {
    AppDispatcher.handleAction({
      actionType: modalConstants.OPEN_EDIT_WORKOUT_MODAL
    });
  },
  closeEditWorkoutModal: function() {
    AppDispatcher.handleAction({
      actionType: modalConstants.CLOSE_EDIT_WORKOUT_MODAL
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
