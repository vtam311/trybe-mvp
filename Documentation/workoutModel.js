/*
* @Author: vincetam
* @Date:   2015-12-27 18:20:38
* @Last Modified by:   VINCE
* @Last Modified time: 2015-12-28 19:13:10
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

var EXERCISE_TEMPLATE_TWO = {
  name: 'Push Ups',
  reps: 10,
  load: {units: 'lb', val: null},
  time: null,
  distance: {units: null, val: null},
  src: null
};

var EXERCISE_TEMPLATE_THREE = {
  name: 'Squats',
  reps: 15,
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
  exercises: [
    copyObjectHelper(EXERCISE_TEMPLATE),
    copyObjectHelper(EXERCISE_TEMPLATE_TWO),
    copyObjectHelper(EXERCISE_TEMPLATE_THREE)
  ],
  result: {isRecording: false, type: null, val: null},
  notes: null
};

var WORKOUT_TEMPLATE = {
  id: 1,
  username: 'vtam',
  trybe: 'ICON Athletes',
  day: null,
  date: new Date(),
  parts: [copyObjectHelper(PART_TEMPLATE)],
  origin: null,
};

module.exports = WORKOUT_TEMPLATE;
