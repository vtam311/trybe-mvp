/*
* @Author: vincetam
* @Date:   2015-08-13 15:46:19
* @Last Modified by:   vincetam
* @Last Modified time: 2015-08-16 10:59:19
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var indexConstants = require('../constants/indexConstants.js');

var indexActions = {
  setTab: function(tab) {
    AppDispatcher.handleAction({
      actionType: indexConstants.SET_TAB,
      data: tab
    });
  }
};

module.exports = indexActions;
