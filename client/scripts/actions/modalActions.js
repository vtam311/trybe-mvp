/*
* @Author: vincetam
* @Date:   2016-01-12 12:10:22
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-17 14:27:34
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
  openViewWorkoutModal: function() {
    AppDispatcher.handleAction({
      actionType: modalConstants.OPEN_VIEW_WORKOUT_MODAL
    });
  },
  closeViewWorkoutModal: function() {
    AppDispatcher.handleAction({
      actionType: modalConstants.CLOSE_VIEW_WORKOUT_MODAL
    });
  },
  openInstructionsModal: function() {
    AppDispatcher.handleAction({
      actionType: modalConstants.OPEN_INSTRUCTIONS_MODAL
    });
  },
  closeInstructionsModal: function() {
    AppDispatcher.handleAction({
      actionType: modalConstants.CLOSE_INSTRUCTIONS_MODAL
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
  openPostModal: function() {
    AppDispatcher.handleAction({
      actionType: modalConstants.OPEN_POST_MODAL
    });
  },
  closePostModal: function() {
    AppDispatcher.handleAction({
      actionType: modalConstants.CLOSE_POST_MODAL
    });
  },
};

module.exports = modalActions;
