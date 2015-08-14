/*
* @Author: vincetam
* @Date:   2015-08-13 15:46:19
* @Last Modified by:   vincetam
* @Last Modified time: 2015-08-13 15:47:57
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var indexEvents = require('../events/indexEvents.js');

var indexActions = {
  setTab: function(tab) {
    AppDispatcher.handleAction({
      data: new indexEvents.SetTab(tab)
    });
  }
};

module.exports = indexActions;
