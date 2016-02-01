/*
* @Author: vincetam
* @Date:   2015-07-30 10:33:49
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-29 18:05:26
*/

'use strict';

var Dispatcher = require('flux').Dispatcher;
var assign = require('react/lib/Object.assign');

var AppDispatcher = assign(new Dispatcher(), {
  handleAction: function(action){
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
});

module.exports = AppDispatcher;





// var AppDispatcher = new Dispatcher();

// AppDispatcher.handleAction = function(action){
//   this.dispatch({
//     source: 'VIEW_ACTION',
//     action: action
//   });
// };

// module.exports = AppDispatcher;
