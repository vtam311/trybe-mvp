/*
* @Author: vincetam
* @Date:   2016-01-02 17:41:54
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-07 10:59:25
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var logModalConstants = require('../constants/logModalConstants');

var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';
var copyObjHelper = require('../common/copyObjectHelper');

var _store = {
  result: null,
  notes: null
};

//Initializes result with part user selected
//Retrieved from editWorkoutStore's targetResult
//Using copyObjHelper to prevent changes in this store to auto
//change in editWorkoutStore, as assignment would reference
//same place in memory
var initializeResult = function(data) {
  var result = copyObjHelper(data.result);
  _store.result = result;
};

var setNotes = function(data) {
  var notes = data.notes;
  _store.notes = notes;
};

var setResultTime = function(data){
  var time = data.time;
  //Ensure if user inputs diff result type, it is reflected
  _store.result.type = 'Time';
  _store.result.val = time;
};

var setResultRounds = function(data){
  var rounds = data.rounds;
  //Ensure if user inputs diff result type, it is reflected
  _store.result.type = 'Rounds';
  _store.result.val = rounds;
};

var setResultLoad = function(data){
  var val = data.val;
  var unit = data.unit;
  //Ensure if user inputs diff result type, it is reflected
  _store.result.type = 'Max Load';
  _store.result.val = {val: val, unit: unit};
};

var setResultCustom = function(data){
  var val = data.val;
  //Ensure if user inputs diff result type than default, it is reflected
  setCustomResultType();
  _store.result.val = val;
};

var setCustomResultType = function(){
  //if result type is specific custom metric, leave as is
  if(_store.result.type &&
    _store.result.type !== 'Time' &&
    _store.result.type !== 'Rounds' &&
    _store.result.type !== 'Max Load'){
  } else {
    //else change to 'Custom'
    _store.result.type = 'Custom';
  }
};


var logModalStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getResult: function(){
    //Result being modified or created.
    //Used in logModal
    return _store.result;
  },
  getNotes: function(){
    return _store.notes;
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch (action.actionType) {
    case logModalConstants.INITIALIZE_RESULT:
      initializeResult(action.data);
      logModalStore.emit(CHANGE_EVENT);
      break;
    case logModalConstants.INITIALIZE_NOTES:
      setNotes(action.data);
      logModalStore.emit(CHANGE_EVENT);
      break;
    case logModalConstants.SET_NOTES:
      setNotes(action.data);
      logModalStore.emit(CHANGE_EVENT);
      break;
    case logModalConstants.SET_RESULT_TIME:
      setResultTime(action.data);
      logModalStore.emit(CHANGE_EVENT);
      break;
    case logModalConstants.SET_RESULT_ROUNDS:
      setResultRounds(action.data);
      logModalStore.emit(CHANGE_EVENT);
      break;
    case logModalConstants.SET_RESULT_LOAD:
      setResultLoad(action.data);
      logModalStore.emit(CHANGE_EVENT);
      break;
    case logModalConstants.SET_RESULT_CUSTOM:
      setResultCustom(action.data);
      logModalStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = logModalStore;
