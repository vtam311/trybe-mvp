/*
* @Author: VINCE
* @Date:   2015-09-25 13:02:51
* @Last Modified by:   VINCE
* @Last Modified time: 2015-09-25 13:19:33
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var workoutTabConstants = require('../constants/workoutTabConstants.js');

var workoutTabActions = {
  setView: function(viewTitle) {
    AppDispatcher.handleAction({
      actionType: workoutTabConstants.SET_WORKOUT_TAB_VIEW,
      data: viewTitle
    });
  }
};

module.exports = workoutTabActions;
