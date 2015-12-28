/*
* @Author: vincetam
* @Date:   2015-12-27 18:20:38
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-27 18:28:13
*/

var copyObjectHelper = require('../client/scripts/common/copyObjectHelper');

'use strict';

var EXERCISE_TEMPLATE = {
  name: 'Pull Ups',
  reps: 5,
  load: {units: 'lb', val: null},
  time: null,
  distance: {units: null, val: null},
  src: null
};

var PART_TEMPLATE = {
  name: null,
  instructions: '20min AMRAP Of',
  media: {
    title: null,
    src: null
  },
  exercises: [copyObjectHelper(EXERCISE_TEMPLATE)],
  result: {isRecording: false, type: null, val: null},
  notes: null
};

var WORKOUT_TEMPLATE = {
  id: 1,
  username: 'vtam',
  trybe: 'ICON Athletes',
  day: null,
  date: new Date(),
  //copyObject so parts don't refer to same obj
  parts: [copyObjectHelper(PART_TEMPLATE)],
  origin: null,
};

module.exports = WORKOUT_TEMPLATE;
