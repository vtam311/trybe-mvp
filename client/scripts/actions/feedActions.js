/*
* @Author: vincetam
* @Date:   2015-07-29 17:19:35
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-21 10:21:49
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var feedConstants = require('../constants/feedConstants');

var newWorkout = require('../common/newWorkout');
var newObject = require('../common/copyObjectHelper');

//Create dummy workouts
var DUMMY_WORKOUT = require('../../../Documentation/workoutModel');
DUMMY_WORKOUT.id = 10;
var DUMMY_WORKOUT_2 = newWorkout(DUMMY_WORKOUT);
DUMMY_WORKOUT_2.id = 11;
DUMMY_WORKOUT_2.parts.push(newObject(DUMMY_WORKOUT.parts[0]));
var DUMMY_WORKOUT_3 = newWorkout(DUMMY_WORKOUT);
DUMMY_WORKOUT_3.id = 12;
DUMMY_WORKOUT_3.parts.push(newObject(DUMMY_WORKOUT.parts[0]));

var feedActions = {
  getTrybeWorkout: function(){
    //To do: make a get req to server
    //To do: update workout obj to finalized version in createWorkoutStore
    this.setTrybeWorkout(newWorkout(DUMMY_WORKOUT));
  },
  setTrybeWorkout: function(workout){
    AppDispatcher.handleAction({
      actionType: feedConstants.SET_TRYBE_WORKOUT,
      data: workout
    });
  },
  getCards: function(feedView) {
    //To do: make get req to server
    var dummyCards = [
      {
        username: 'Wilbert Tirta',
        userPicLink: 'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xap1/v/t1.0-9/1511172_10205199882816928_383161673633565774_n.jpg?oh=770155973b450ffd6a1f159f70ca4edf&oe=57430096',
        activity: 'completed',
        createdAt: '3hr',
        trybe: 'ICON Athlete',
        day: 17, //for day number in training program
        workout: newWorkout(DUMMY_WORKOUT),
        origin: null, //to track if workout is inspired by another user
        likes: 7,
        comments: 3
      },
      {
        username: 'Zishan Lokhandwala',
        userPicLink: 'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xpt1/t31.0-8/11336892_10206935908345885_6178650775541606682_o.jpg',
        activity: 'completed',
        createdAt: '3hr',
        trybe: 'ICON Athlete',
        day: 17, //for day number in training program
        workout: newWorkout(DUMMY_WORKOUT_2),
        origin: null, //to track if workout is inspired by another user
        likes: 8,
        comments: 6
      },
      {
        username: 'Carolyn Liu',
        userPicLink: 'http://i.imgur.com/SaTRIXe.png',
        activity: 'completed',
        createdAt: '3hr',
        trybe: 'ICON Athlete',
        day: 17, //for day number in training program
        workout: newWorkout(DUMMY_WORKOUT_3),
        origin: null, //to track if workout is inspired by another user
        likes: 14,
        comments: 8
      }
    ];

    this.setCards(dummyCards);
  },
  setCards: function(cards) {
    AppDispatcher.handleAction({
      actionType: feedConstants.SET_CARDS,
      data: cards
    });
  },
  sendMessage: function(text){
    //To do: post to server
    //To do: call getCards

    //Temp solution: create dummy card, dispatch for store
    var DUMMY_COMMENT_CARD = {
      username: 'Jacob Greensbury',
      activity: 'comment',
      createdAt: '3hr',
      trybe: 'ICON Athlete',
      day: 17, //for day number in training program
      comment: text,
      likes: 3,
      comments: 3
    };

    AppDispatcher.handleAction({
      actionType: feedConstants.SEND_MESSAGE,
      data: DUMMY_COMMENT_CARD
    });
  }
};

module.exports = feedActions;
