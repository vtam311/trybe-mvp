/*
* @Author: vincetam
* @Date:   2015-07-30 10:33:49
* @Last Modified by:   vincetam
* @Last Modified time: 2015-07-30 10:42:41
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
