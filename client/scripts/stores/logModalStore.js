/*
* @Author: vincetam
* @Date:   2016-01-02 17:41:54
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-02 17:48:09
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
  //Retrieved from editWorkoutStore's targetExercise
  //Using copyObjHelper to prevent changes in this store to auto
  //change in editWorkoutStore, as assignment would reference
  //same place in memory
  var result = copyObjHelper(data.result);
  _store.result = result;
};

var setResultTime = function(data){
  var time = data.time;
  var partIdx = _store.targetPartIdx;
  //Ensure if user inputs diff result type, it is reflected
  _store.workout.parts[partIdx].result.type = 'time';
  _store.workout.parts[partIdx].result.val = time;
  console.log('editWorkoutStore setResultTime to', _store.workout.parts[partIdx].result.val);
};

var setResultRounds = function(data){
  var rounds = data.rounds;
  var partIdx = _store.targetPartIdx;
  //Ensure if user inputs diff result type, it is reflected
  _store.workout.parts[partIdx].result.type = 'rounds';
  _store.workout.parts[partIdx].result.val = rounds;
  console.log('editWorkoutStore setResultRounds to', _store.workout.parts[partIdx].result.val);
};

var setResultLoad = function(data){
  var val = data.val;
  var unit = data.unit;
  var partIdx = _store.targetPartIdx;
  //Ensure if user inputs diff result type, it is reflected
  _store.workout.parts[partIdx].result.type = 'Max Load';
  _store.workout.parts[partIdx].result.val = {val: val, unit: unit};
  console.log('editWorkoutStore setResultRounds to', _store.workout.parts[partIdx].result.val);
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
    case editWorkoutConstants.SET_RESULT_TIME:
      setResultTime(action.data);
      editWorkoutStore.emit(CHANGE_EVENT);
      break;
    case editWorkoutConstants.SET_RESULT_ROUNDS:
      setResultRounds(action.data);
      editWorkoutStore.emit(CHANGE_EVENT);
      break;
    case editWorkoutConstants.SET_RESULT_LOAD:
      setResultLoad(action.data);
      editWorkoutStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = logModalStore;
