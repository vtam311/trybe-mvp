/*
* @Author: VINCE
* @Date:   2015-09-25 13:05:50
* @Last Modified by:   VINCE
* @Last Modified time: 2015-09-25 13:23:07
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var workoutTabConstants = require('../constants/workoutTabConstants');
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';

//Load components
var ViewWorkout = require('../components/viewWorkout/viewWorkout');
var ModifyWorkout = require('../components/modifyWorkout/modifyWorkout');

var _store = {
  navView: {
    title: 'Today\'s Workout',
    component: ViewWorkout
  }
};

var setNavView = function(viewTitle){
  _store.navView.title = viewTitle;
};

var setViewComponent = function(){
  switch(_store.navView.title) {
    case 'Today\'s Workout':
      _store.navView.component = ViewWorkout;
      break;
    case 'Modify Workout':
      _store.navView.component = ModifyWorkout;
      break;
    default:
      console.log('Unknown workoutTab viewTitle');
  }
};

var workoutTabStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getNavView: function(){
    return _store.navView;
  },
});

AppDispatcher.register(function(payload){
  var action = payload.action;

  switch (action.actionType) {
    case workoutTabConstants.SET_WORKOUT_TAB_VIEW:
      setNavView(action.data);
      setViewComponent();
      workoutTabStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = workoutTabStore;
