/*
* @Author: VINCE
* @Date:   2015-09-25 14:20:07
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-19 15:06:56
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var logConstants = require('../constants/logConstants');
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';

var separateWorkout = require('../common/newWorkout');
var newObject = require('../common/copyObjectHelper');

var _store = {
  workouts: []
};

var setWorkouts = function(data){
  var workouts = data.workouts;
  workouts.forEach( (workout) => _store.workouts.push(workout) );
};

var existingWorkoutIdx = function(workout){
  var targetId = workout.id;
  var result = null;
  _store.workouts.forEach( (workout, idx) => {
    if(targetId === workout.id) result = idx;
  });
  return result;
};

var addWorkout = function(workout){
  _store.workouts.push(workout);
};

var addNewWorkoutAndCompletedPart = function(workout, partIdx){
  //add the workout to logStore, with only the completed part
  var sepWorkout = separateWorkout(workout); //break reference to orig workout
  var completedPart = sepWorkout.parts[partIdx];
  var workoutWithOnlyCompletedPart = sepWorkout.parts = [];
  workoutWithOnlyCompletedPart[partIdx] = completedPart;
  sepWorkout.parts = workoutWithOnlyCompletedPart;

  addWorkout(sepWorkout);
};

var addPartToExistingWorkout = function(workout, workoutIdx, partIdx){
  //copy existing workout
  var currWorkout = separateWorkout(_store.workouts[workoutIdx]);
  //add currPart to existing workout at correct index
  var currPart = workout.parts[partIdx];
  currWorkout.parts[partIdx] = currPart;
  //replace separateWorkout with existing workout
  _store.workouts[workoutIdx] = currWorkout;
  updateForListView(workoutIdx);
};

var addWorkoutPart = function(data){
  var sepWorkout = separateWorkout(data.workout); //break reference to orig workout
  var partIdx = data.partIdx;
  var workoutIdx = existingWorkoutIdx(sepWorkout);
  //if workout does not exist in logStore, add workout's completed part to logStore
  if(workoutIdx === null) {
    addNewWorkoutAndCompletedPart(sepWorkout, partIdx);
  } else {
    //else add part completed to existing workout
    addPartToExistingWorkout(sepWorkout, workoutIdx, partIdx);
  }
};

var updateForListView = function(indexToUpdate){
  //ListView does not re-render a row when the properties
  //of an object are changd. So must create new objs instead of
  //updating properties of existing ones
  let newWorkouts = _store.workouts.slice();
  newWorkouts[indexToUpdate] = {
    ..._store.workouts[indexToUpdate],
  };
  _store.workouts = newWorkouts;
};

var logStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getWorkouts: function(){
    return _store.workouts;
  },
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch (action.actionType) {
    case logConstants.SET_LOG_WORKOUTS:
      setWorkouts(action.data);
      logStore.emit(CHANGE_EVENT);
      break;
    case logConstants.ADD_WORKOUT_PART:
      addWorkoutPart(action.data);
      logStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = logStore;
