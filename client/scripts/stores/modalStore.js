/*
* @Author: vincetam
* @Date:   2016-01-12 12:10:43
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-12 13:14:01
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var modalConstants = require('../constants/modalConstants');

var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';

var _store = {
  workoutModalVisible: false,
  exerciseModalVisible: false,
  partModalVisible: false,
  dateModalVisible: false,
  logModalVisible: false,
};

var openWorkoutModal = function() {
  _store.workoutModalVisible = true;
};

var closeWorkoutModal = function() {
  _store.workoutModalVisible = false;
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
  getWorkoutModalVisible: function(){
    return _store.workoutModalVisible;
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
    case modalConstants.OPEN_WORKOUT_MODAL:
      openWorkoutModal();
      modalStore.emit(CHANGE_EVENT);
      break;
    case modalConstants.CLOSE_WORKOUT_MODAL:
      closeWorkoutModal();
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
