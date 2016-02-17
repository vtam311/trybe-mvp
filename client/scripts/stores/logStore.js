/*
* @Author: VINCE
* @Date:   2015-09-25 14:20:07
* @Last Modified by:   VINCE
* @Last Modified time: 2016-02-12 11:02:13
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
  workouts: [],
  currMonthWorkouts: [],
  isShowingCalendar: false,
  calendarDate: {
    month: new Date().getMonth(),
    year: new Date().getFullYear()
  }
};

var setWorkouts = function(data){
  //If workouts already exist in store,
  //ensure new array of workouts are sorted properly.
  if(_store.workouts[0]){
    data.workouts.forEach((workout) =>
      _store.workouts.push(workout)
    );

    sortWorkouts(_store.workouts);
  } else {
  //Otherwise simply assign workouts
  _store.workouts = data.workouts;
  }
};

var sortWorkouts = function(workouts){
  sortByDate.mergeSort(workouts, 0, workouts.length);
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
  sortWorkouts(_store.workouts);
  //ensure new workout can enter curr month workouts if month matches
  setCurrMonthWorkouts();
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

var setCalendarMonthAndYear = function(data){
  var month = data.month;
  var year = data.year;
  _store.calendarDate.month = month;
  _store.calendarDate.year = year;
};

var setCurrMonthWorkouts = function(){
  var isSameMonth = function(workout){
    var workoutMonth = workout.date.getMonth();
    if(workoutMonth === _store.calendarDate.month){
      return true;
    } else return false;
  };

  _store.currMonthWorkouts = _store.workouts.filter(isSameMonth);
  sortWorkouts(_store.currMonthWorkouts);
};

var setIsShowingCalendar = function(data){
  var bool = data.bool;
  _store.isShowingCalendar = bool;
  console.log('logStore setIsShowingCalendar set _store.isShowingCalendar to', _store.isShowingCalendar);
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
  getCurrMonthWorkouts: function(){
    return _store.currMonthWorkouts;
  },
  getMonthAndYear: function(){
    return _store.calendarDate;
  },
  getIsShowingCalendar: function(){
    return _store.isShowingCalendar;
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch (action.actionType) {
    case logConstants.SET_LOG_WORKOUTS:
      setWorkouts(action.data);
      //once workouts are retrieved, build store's currMonthWorkouts
      setCurrMonthWorkouts();
      logStore.emit(CHANGE_EVENT);
      break;
    case logConstants.ADD_WORKOUT_PART:
      addWorkoutPart(action.data);
      logStore.emit(CHANGE_EVENT);
      break;
    case logConstants.SET_CALENDAR_MONTH_AND_YEAR:
      setCalendarMonthAndYear(action.data);
      setCurrMonthWorkouts();
      logStore.emit(CHANGE_EVENT);
      break;
    case logConstants.SET_IS_SHOWING_CALENDAR:
      setIsShowingCalendar(action.data);
      logStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = logStore;
