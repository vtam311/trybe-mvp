/*
* @Author: VINCE
* @Date:   2015-07-30 10:32:00
* @Last Modified by:   vincetam
* @Last Modified time: 2015-07-30 18:20:50
*/

'use strict';

var feedEvents = {
  AddCard: class AddCard {
  	constructor(cards) {
  		this.cards = cards;
  	}
  },
  SetCards: class SetCards {
  	constructor(cards) {
  		this.cards = cards;
  	}
  }
};

module.exports = feedEvents;
