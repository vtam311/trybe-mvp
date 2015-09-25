/*
* @Author: VINCE
* @Date:   2015-09-25 14:07:47
* @Last Modified by:   VINCE
* @Last Modified time: 2015-09-25 15:02:32
*/

'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var logConstants = require('../constants/logConstants');

var logActions = {
  getCards: function() {
    //To do: make get req to server
    var dummyCards = [
      {
        workout: {
          id: 24,
          username: 'Joe Leopard',
          trybe: 'King Kong with Tempest Freerunning',
          day: 14,
          createdAt: 'Yesterday',
          type: 'Custom',
          parts: [
            {
              instructions:'Flying Kong Drills. Do 5 rounds each of the following exercises, resting 3-5 min between each round.',
              media: {
                title: 'Height with Hips',
                url: 'www.youtube.com'
              },
              exercises: [
                {
                  name: 'Vertical Jumps',
                  reps: 7,
                  load: {units: 'lb', val: null},
                  time: null,
                  distance: {units: null, val: null},
                  url: null
                },
                {
                  name: 'Sprawls',
                  reps: 15,
                  load: {units: 'lb', val: null},
                  time: null,
                  distance: null,
                  url: null
                },
              ],
              notes:
                'Vertical Jumps felt fantastic. Sprawls need more explosiveness.',
            }
          ],
          origin: 23,
          finalResult: {type: null, value: null}
        },
        likes: 12,
        comments: 3
      }
    ];

    this.setCards(dummyCards);
  },
  setCards: function(cards) {
    AppDispatcher.handleAction({
      actionType: logConstants.SET_LOG_CARDS,
      data: cards
    });
  },
  //once cards are added to db, should no longer need this
  tempAddCard: function(card){
    AppDispatcher.handleAction({
      actionType: logConstants.ADD_LOG_CARD,
      data: card
    });
  }
};

module.exports = logActions;
