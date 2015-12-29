/*
* @Author: vincetam
* @Date:   2015-07-29 17:19:35
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-29 14:25:04
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var feedConstants = require('../constants/feedConstants');

var DUMMY_WORKOUT = require('../../../Documentation/workoutModel');
var newObject = require('../common/copyObjectHelper');

var feedActions = {
  getTrybeWorkout: function(){
    //To do: make a get req to server
    //To do: update workout obj to finalized version in createWorkoutStore
    this.setTrybeWorkout(newObject(DUMMY_WORKOUT));
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
        username: 'John Snow',
        activity: 'completed',
        createdAt: '3hr',
        trybe: 'APEX Ninja Warriors',
        day: 17, //for day number in training program
        workout: newObject(DUMMY_WORKOUT),
        origin: null, //to track if workout is inspired by another user
        likes: 17,
        comments: 3
      },
      {
        username: 'Arnold Stan',
        activity: 'modified',
        createdAt: '3hr',
        trybe: 'APEX Ninja Warriors',
        day: 17, //for day number in training program
        workout: newObject(DUMMY_WORKOUT),
        origin: null, //to track if workout is inspired by another user
        likes: 24,
        comments: 6
      },
      {
        username: 'Jacob Greensbury',
        activity: 'modified',
        createdAt: '3hr',
        trybe: 'APEX Ninja Warriors',
        day: 17, //for day number in training program
        workout: newObject(DUMMY_WORKOUT),
        origin: null, //to track if workout is inspired by another user
        likes: 19,
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
      trybe: 'APEX Ninja Warriors',
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
