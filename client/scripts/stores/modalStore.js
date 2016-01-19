/*
* @Author: vincetam
* @Date:   2016-01-12 12:10:43
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-18 11:19:19
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var modalConstants = require('../constants/modalConstants');

var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';

var _store = {
  editWorkoutModalVisible: false,
  viewWorkoutModalVisible: false,
  instructionsModalVisible: false,
  exerciseModalVisible: false,
  partModalVisible: false,
  dateModalVisible: false,
  logModalVisible: false,
};

var openEditWorkoutModal = function() {
  _store.editWorkoutModalVisible = true;
};

var closeEditWorkoutModal = function() {
  _store.editWorkoutModalVisible = false;
};

var openViewWorkoutModal = function() {
  _store.viewWorkoutModalVisible = true;
  console.log('modalStore openViewWorkoutModal called');
};

var closeViewWorkoutModal = function() {
  _store.viewWorkoutModalVisible = false;
};

var openInstructionsModal = function() {
  _store.instructionsModalVisible = true;
};

var closeInstructionsModal = function() {
  _store.instructionsModalVisible = false;
};

var openExerciseModal = function() {
  _store.exerciseModalVisible = true;
};

var closeExerciseModal = function() {
  _store.exerciseModalVisible = false;
};

var openPartModal = function() {
  _store.partModalVisible = true;
};

var closePartModal = function() {
  _store.partModalVisible = false;
};

var openDateModal = function() {
  _store.dateModalVisible = true;
};

var closeDateModal = function() {
  _store.dateModalVisible = false;
};

var openLogModal = function() {
  _store.logModalVisible = true;
};

var closeLogModal = function() {
  _store.logModalVisible = false;
};

var modalStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getEditWorkoutModalVisible: function(){
    return _store.editWorkoutModalVisible;
  },
  getViewWorkoutModalVisible: function(){
    return _store.viewWorkoutModalVisible;
  },
  getInstructionsModalVisible: function(){
    return _store.instructionsModalVisible;
  },
  getExerciseModalVisible: function(){
    return _store.exerciseModalVisible;
  },
  getPartModalVisible: function(){
    return _store.partModalVisible;
  },
  getDateModalVisible: function(){
    return _store.dateModalVisible;
  },
  getLogModalVisible: function(){
    return _store.logModalVisible;
  },
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch (action.actionType) {
    case modalConstants.OPEN_EDIT_WORKOUT_MODAL:
      openEditWorkoutModal();
      modalStore.emit(CHANGE_EVENT);
      break;
    case modalConstants.CLOSE_EDIT_WORKOUT_MODAL:
      closeEditWorkoutModal();
      modalStore.emit(CHANGE_EVENT);
      break;
    case modalConstants.OPEN_VIEW_WORKOUT_MODAL:
      openViewWorkoutModal();
      modalStore.emit(CHANGE_EVENT);
      break;
    case modalConstants.CLOSE_VIEW_WORKOUT_MODAL:
      closeViewWorkoutModal();
      modalStore.emit(CHANGE_EVENT);
      break;
    case modalConstants.OPEN_EXERCISE_MODAL:
      openExerciseModal();
      modalStore.emit(CHANGE_EVENT);
      break;
    case modalConstants.CLOSE_EXERCISE_MODAL:
      closeExerciseModal();
      modalStore.emit(CHANGE_EVENT);
      break;
    case modalConstants.OPEN_INSTRUCTIONS_MODAL:
      openInstructionsModal();
      modalStore.emit(CHANGE_EVENT);
      break;
    case modalConstants.CLOSE_INSTRUCTIONS_MODAL:
      closeInstructionsModal();
      modalStore.emit(CHANGE_EVENT);
      break;
    case modalConstants.OPEN_PART_MODAL:
      openPartModal();
      modalStore.emit(CHANGE_EVENT);
      break;
    case modalConstants.CLOSE_PART_MODAL:
      closePartModal();
      modalStore.emit(CHANGE_EVENT);
      break;
    case modalConstants.OPEN_DATE_MODAL:
      openDateModal();
      modalStore.emit(CHANGE_EVENT);
      break;
    case modalConstants.CLOSE_DATE_MODAL:
      closeDateModal();
      modalStore.emit(CHANGE_EVENT);
      break;
    case modalConstants.OPEN_LOG_MODAL:
      openLogModal();
      modalStore.emit(CHANGE_EVENT);
      break;
    case modalConstants.CLOSE_LOG_MODAL:
      closeLogModal();
      modalStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = modalStore;
