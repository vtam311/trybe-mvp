/*
* @Author: VINCE
* @Date:   2015-09-25 14:20:07
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-11 17:14:21
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

var isExistingWorkout = function(workout){
  var currId = workout.id;
  var result = false;
  _store.workouts.forEach( (workout, idx) => {
    if(currId === workout.id) result = idx;
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

  _store.workouts.push(sepWorkout);
};

var addPartToExistingWorkout = function(workout, workoutIdx, partIdx){
  var currPart = workout.parts[partIdx];
  _store.workouts[workoutIdx].parts[partIdx] = currPart;
  // console.log('addPartToExistingWorkout targetPart is', targetPart);
  console.log('addPartToExistingWorkout currPart is', currPart);
};

var addWorkoutPart = function(data){
  var workout = separateWorkout(data.workout); //break reference to orig workout
  var partIdx = data.partIdx;
  var existingWorkoutIdx = isExistingWorkout(workout);
  //if workout does not exist in logStore, add workout's completed part to logStore
  if(existingWorkoutIdx === false) {
    console.log('new workout found');
    addNewWorkoutAndCompletedPart(workout, partIdx);
  } else {
    //else add part completed to existing workout
    console.log('existing workout found');
    addPartToExistingWorkout(workout, existingWorkoutIdx, partIdx);
  }
  console.log('logStore after addWorkoutPart, workouts are', _store.workouts);
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
