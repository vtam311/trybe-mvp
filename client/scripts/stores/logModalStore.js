/*
* @Author: vincetam
* @Date:   2016-01-02 17:41:54
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-06 15:07:36
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var logModalConstants = require('../constants/logModalConstants');

var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';
var copyObjHelper = require('../common/copyObjectHelper');

var _store = {
  result: null
};

var initializeResult = function(data) {
  //Initializes result with part user selected
  //Retrieved from editWorkoutStore's targetResult
  //Using copyObjHelper to prevent changes in this store to auto
  //change in editWorkoutStore, as assignment would reference
  //same place in memory
  var result = copyObjHelper(data.result);
  _store.result = result;
  console.log('logModalStore initializeResult to ', _store.result);
};

var setResultTime = function(data){
  var time = data.time;
  var partIdx = _store.targetPartIdx;
  //Ensure if user inputs diff result type, it is reflected
  _store.result.type = 'Time';
  _store.result.val = time;
  console.log('logModalStore setResultTime to', _store.result.val);
};

var setResultRounds = function(data){
  var rounds = data.rounds;
  var partIdx = _store.targetPartIdx;
  //Ensure if user inputs diff result type, it is reflected
  _store.result.type = 'Rounds';
  _store.result.val = rounds;
  console.log('logModalStore setResultRounds to', _store.result.val);
};

var setResultLoad = function(data){
  var val = data.val;
  var unit = data.unit;
  var partIdx = _store.targetPartIdx;
  //Ensure if user inputs diff result type, it is reflected
  _store.result.type = 'Max Load';
  _store.result.val = {val: val, unit: unit};
  console.log('logModalStore setResultLoad to', _store.result.val);
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
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch (action.actionType) {
    case logModalConstants.INITIALIZE_RESULT:
      initializeResult(action.data);
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
    default:
      return true;
  }
});

module.exports = logModalStore;
