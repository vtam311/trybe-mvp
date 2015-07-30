/*
* @Author: vincetam
* @Date:   2015-07-29 17:19:35
* @Last Modified by:   vincetam
* @Last Modified time: 2015-07-30 11:07:17
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var feedConstants = require('../constants/feedConstants');

//To Do: update action properties
var feedActions = {
  addCard: function(card){
    AppDispatcher.handleAction({
      actionType: feedConstants.ADD_CARD,
      data: card
    });
  }
};

module.exports = feedActions;
