'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var viewWorkoutConstants = require('../constants/viewWorkoutConstants');

var viewWorkoutActions = {
  initPartsAreLogged: function(numParts) {
    AppDispatcher.handleAction({
      actionType: viewWorkoutConstants.INIT_PARTS_ARE_LOGGED,
      data: {
        numParts: numParts
      }
    });
  },
  setPartIsLoggedTrue: function(partIdx) {
    AppDispatcher.handleAction({
      actionType: viewWorkoutConstants.SET_PART_IS_LOGGED_TRUE,
      data: {
        partIdx: partIdx
      }
    });
  },
};

module.exports = viewWorkoutActions;
