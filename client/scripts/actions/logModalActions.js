/*
* @Author: vincetam
* @Date:   2016-01-06 13:16:41
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-07 10:59:44
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var logModalConstants = require('../constants/logModalConstants');

var logModalActions = {
  initializeResult: function(result){
    AppDispatcher.handleAction({
      actionType: logModalConstants.INITIALIZE_RESULT,
      data: {
        result: result
      }
    });
  },
  initializeNotes: function(notes){
    AppDispatcher.handleAction({
      actionType: logModalConstants.INITIALIZE_NOTES,
      data: {
        notes: notes
      }
    });
  },
  setNotes: function(notes){
    AppDispatcher.handleAction({
      actionType: logModalConstants.SET_NOTES,
      data: {
        notes: notes
      }
    });
  },
  setResultTime: function(time){
    AppDispatcher.handleAction({
      actionType: logModalConstants.SET_RESULT_TIME,
      data: {
        time: time
      }
    });
  },
  setResultRounds: function(rounds){
    AppDispatcher.handleAction({
      actionType: logModalConstants.SET_RESULT_ROUNDS,
      data: {
        rounds: rounds
      }
    });
  },
  setResultLoad: function(val, unit){
    AppDispatcher.handleAction({
      actionType: logModalConstants.SET_RESULT_LOAD,
      data: {
        val: val,
        unit: unit
      }
    });
  },
  setResultCustom: function(val){
    AppDispatcher.handleAction({
      actionType: logModalConstants.SET_RESULT_CUSTOM,
      data: {
        val: val
      }
    });
  },
};

module.exports = logModalActions;

