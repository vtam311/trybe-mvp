/*
* @Author: vincetam
* @Date:   2015-10-28 19:35:23
* @Last Modified by:   VINCE
* @Last Modified time: 2016-02-08 19:45:44
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var editWorkoutConstants = require('../constants/editWorkoutConstants');

//temp use workout model
var newWorkout = require('../common/newWorkout');
var newObject = require('../common/copyObjectHelper');
var DUMMY_WORKOUT = require('../../../Documentation/workoutModel.js');


var editWorkoutActions = {
  setDefaultOrCustom: function(val){
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SET_DEFAULT_OR_CUSTOM,
      data: {
        val: val
      }
    });
  },
  getDailyWorkout: function() {
    //To do: make get req to server
    //temp use DUMMY_WORKOUT and make its id unique
    var dummyWorkout = newWorkout(DUMMY_WORKOUT);
    dummyWorkout.id = Math.random() * 9999;
    dummyWorkout.parts[0].name = 'Warm up';
    dummyWorkout.parts[0].instructions = '5 rounds of';
    var newPart = newObject(dummyWorkout.parts[0]);
    var newPart2 = newObject(dummyWorkout.parts[0]);
    newPart.name = 'Murph';
    newPart.instructions = '1 mile runs sandwiching 20 rounds of';
    newPart2.name = 'Cool down';
    newPart2.instructions = 'Row 1km';
    newPart2.exercises = [];
    dummyWorkout.parts.push(newPart);
    dummyWorkout.parts.push(newPart2);

    this.setDailyWorkout(dummyWorkout);
  },
  setDailyWorkout: function(workout) {
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SET_DAILY_WORKOUT,
      data: {
        workout: workout
      }
    });
  },
  setWorkout: function(workout) {
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SET_WORKOUT,
      data: {
        workout: workout
      }
    });
  },
  setToDefaultWorkout: function(){
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SET_TO_DEFAULT_WORKOUT,
    });
  },
  resetWorkout: function() {
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.RESET_WORKOUT,
    });
  },
  saveDate: function(date) {
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SAVE_DATE,
      data: {
        date: date
      }
    });
  },
  setInstructions: function(instructions, partIdx) {
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SET_INSTRUCTIONS,
      data: {
        instructions: instructions,
        partIdx: partIdx
      }
    });
  },
  addExercise: function(partIdx) {
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.ADD_EXERCISE,
      data: {
        partIdx: partIdx
      }
    });
  },
  removeExercise: function(partIdx, exIdx) {
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.REMOVE_EXERCISE,
      data: {
        partIdx: partIdx,
        exIdx: exIdx
      }
    });
  },
  //Used by editExerciseModal to save an entire exercise into
  //editWorkoutStore
  saveExercise: function(exercise){
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SAVE_EXERCISE,
      data: {
        exercise: exercise
      }
    });
  },

  //actions used to edit an exercise
  setExerciseName: function(exName){
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SET_EXERCISE_NAME,
      data: {
        exName: exName
      }
    });
  },
  setReps: function(reps) {
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SET_EXERCISE_REPS,
      data: {
        reps: reps
      }
    });
  },
  setLoadVal: function(load) {
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SET_EXERCISE_LOAD_VAL,
      data: {
        load: load
      }
    });
  },
  setLoadUnit: function(units) {
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SET_EXERCISE_LOAD_UNIT,
      data: {
        units: units
      }
    });
  },
  setDistVal: function(dist){
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SET_EXERCISE_DIST_VAL,
      data: {
        dist: dist
      }
    });
  },
  setDistUnit: function(unit){
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SET_EXERCISE_DIST_UNIT,
      data: {
        unit: unit
      }
    });
  },
  setTime: function(time) {
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SET_EXERCISE_TIME,
      data: {
        time: time
      }
    });
  },

  //Actions specify which part/exercise to edit
  setTargetPartIdx: function(partIdx){
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SET_TARGET_PART_IDX,
      data: {
        partIdx: partIdx
      }
    });
  },
  setTargetExerciseIdx: function(partIdx, exIdx){
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SET_TARGET_EXERCISE_IDX,
      data: {
        partIdx: partIdx,
        exIdx: exIdx
      }
    });
  },


  toggleRecording: function(bool, partIdx){
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.TOGGLE_RECORDING,
      data: {
        bool: bool,
        partIdx: partIdx
      }
    });
  },
  setMetric: function(type, partIdx){
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SET_METRIC,
      data: {
        type: type,
        partIdx: partIdx
      }
    });
  },
  addPart: function(){
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.ADD_PART,
    });
  },
  removePart: function(){
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.REMOVE_PART,
    });
  },
  setPartName: function(name){
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SET_PART_NAME,
      data: {
        name: name
      }
    });
  },
  savePartResult: function(result){
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SAVE_PART_RESULT,
      data: {
        result: result
      }
    });
  },
  savePartNotes: function(notes){
    AppDispatcher.handleAction({
      actionType: editWorkoutConstants.SAVE_PART_NOTES,
      data: {
        notes: notes
      }
    });
  },
};

module.exports = editWorkoutActions;
