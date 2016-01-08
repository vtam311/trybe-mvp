/*
* @Author: vincetam
* @Date:   2016-01-06 15:44:01
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-07 21:31:27
*/

'use strict';

var newWorkout = function(orig) {
  var workout = JSON.parse(JSON.stringify(orig));
  //workout's date is saved as string - convert to Date obj
  workout.date = new Date(orig.date);
  return workout;
};

module.exports = newWorkout;
