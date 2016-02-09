/*
* @Author: VINCE
* @Date:   2015-09-25 14:20:07
* @Last Modified by:   VINCE
* @Last Modified time: 2016-02-08 21:15:01
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var logConstants = require('../constants/logConstants');
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';

var separateWorkout = require('../common/newWorkout');
var newObject = require('../common/copyObjectHelper');
var sortByDate = require('../common/sortByDate');

var _store = {
  workouts: []
};

var setWorkouts = function(data){
  //If workouts already exist in store,
  //ensure new array of workouts are sorted properly.
  if(_store.workouts[0]){
    data.workouts.forEach((workout) =>
      _store.workouts.push(workout)
    );

    sortByDate.mergeSort(_store.workouts, 0, _store.workouts.length);
  } else {
  //Otherwise simply assign workouts
  _store.workouts = data.workouts;
  }


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

  //ensure workouts are sorted properly
  //refactor to simply insert in correct spot?
  sortByDate.mergeSort(_store.workouts, 0, _store.workouts.length);
};

var addNewWorkoutWithCompletedPart = function(workout, partIdx){
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
};

var addWorkoutPart = function(data){
  var sepWorkout = separateWorkout(data.workout); //break reference to orig workout
  var partIdx = data.partIdx;
  var workoutIdx = existingWorkoutIdx(sepWorkout);

  //if workout does not exist in logStore, add workout's completed part to logStore
  if(workoutIdx === null) {
    addNewWorkoutWithCompletedPart(sepWorkout, partIdx);
  } else {
    //else add part completed to existing workout
    addPartToExistingWorkout(sepWorkout, workoutIdx, partIdx);
  }
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
