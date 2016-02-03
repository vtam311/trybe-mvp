/*
* @Author: vincetam
* @Date:   2015-07-30 10:33:49
* @Last Modified by:   VINCE
* @Last Modified time: 2016-02-03 13:09:50
*/

'use strict';

var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

AppDispatcher.handleAction = function(action){
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
};

module.exports = AppDispatcher;
