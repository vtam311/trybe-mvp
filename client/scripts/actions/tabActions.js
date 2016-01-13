/*
* @Author: vincetam
* @Date:   2015-08-13 15:46:19
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-12 18:22:53
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var tabConstants = require('../constants/tabConstants.js');

var tabActions = {
  setTab: function(tab) {
    AppDispatcher.handleAction({
      actionType: tabConstants.SET_TAB,
      data: tab
    });
  }
};

module.exports = tabActions;
