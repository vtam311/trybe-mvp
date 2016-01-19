//DEPR 1/19/16
// /*
// * @Author: vincetam
// * @Date:   2015-09-14 11:42:21
// * @Last Modified by:   VINCE
// * @Last Modified time: 2016-01-19 09:40:24
// */

// 'use strict';

// var AppDispatcher = require('../dispatchers/AppDispatcher');
// var doWorkoutConstants = require('../constants/doWorkoutConstants');
// var EventEmitter = require('events').EventEmitter;
// var CHANGE_EVENT = 'change';

// var _store = {
//   workout: {},
// };

// var setWorkout = function(workout){
//   _store.workout = workout;
// };

// var prepRoundEdit = function(targetRound, roundNum){
//   //If workout obj has repeating rounds and so only one round property,
//   //duplicate the round1 object to enable saving workout results
//   if(!targetRound){
//     targetRound = _store.workout.rounds.round1;
//   }
// };

// // var setInstructions = function(data){
// //   _store.workout.instructions = data;
// // };

// // var setNotes = function(data){
// //   _store.workout.notes = data;
// // };

// var setReps = function(data){
//   //To do: correct the exercise name
//   var reps = data.reps;
//   var roundNum = data.roundNum;
//   var exerciseKey = data.exerciseKey;
//   var targetRound = _store.workout.rounds['round' + roundNum];

//   prepRoundEdit(targetRound, roundNum);
//   targetRound[exerciseKey].reps = reps;
// };

// var setLoad = function(data){
//   var load = data.load;
//   var roundNum = data.roundNum;
//   var exerciseKey = data.exerciseKey;
//   var targetRound = _store.workout.rounds['round' + roundNum];

//   prepRoundEdit(targetRound, roundNum);
//   targetRound[exerciseKey].load.val = load;
// };

// var setHold = function(data){
//   var hold = data.hold;
//   var roundNum = data.roundNum;
//   var exerciseKey = data.exerciseKey;
//   var targetRound = _store.workout.rounds['round' + roundNum];

//   prepRoundEdit(targetRound, roundNum);
//   targetRound[exerciseKey].hold = hold;
// };

// var DoWorkoutStore = Object.assign({}, EventEmitter.prototype, {
//   addChangeListener: function(cb){
//     this.on(CHANGE_EVENT, cb);
//   },
//   removeChangeListener: function(cb){
//     this.removeListener(CHANGE_EVENT, cb);
//   },
//   getWorkout: function(){
//     return _store.workout;
//   },
//   // getInstructions: function(){
//   //   return _store.workout.instructions;
//   // },
//   // getNotes: function(){
//   //   return _store.workout.notes || '';
//   // }
// });

// AppDispatcher.register(function(payload){
//   var action = payload.action;
//   switch (action.actionType){
//     case doWorkoutConstants.SET_WORKOUT:
//       setWorkout(action.data);
//       DoWorkoutStore.emit(CHANGE_EVENT);
//       break;
//     // case doWorkoutConstants.SET_INSTRUCTIONS:
//     //   setInstructions(action.data);
//     //   DoWorkoutStore.emit(CHANGE_EVENT);
//     //   break;
//     // case doWorkoutConstants.SET_NOTES:
//     //   setNotes(action.data);
//     //   DoWorkoutStore.emit(CHANGE_EVENT);
//     //   break;
//     //Commented set reps, load, and hold since catching payloads
//     //from modifyWorkoutConstants and workout obj not updated here yet
//     // case doWorkoutConstants.SET_REPS:
//     //   setReps(action.data);
//     //   DoWorkoutStore.emit(CHANGE_EVENT);
//     //   break;
//     // case doWorkoutConstants.SET_LOAD:
//     //   setLoad(action.data);
//     //   DoWorkoutStore.emit(CHANGE_EVENT);
//     //   break;
//     // case doWorkoutConstants.SET_HOLD:
//     //   setHold(action.data);
//     //   DoWorkoutStore.emit(CHANGE_EVENT);
//     //   break;
//     default:
//       return true;
//   }
// });

// module.exports = DoWorkoutStore;
