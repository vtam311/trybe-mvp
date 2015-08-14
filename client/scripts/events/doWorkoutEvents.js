/*
* @Author: vincetam
* @Date:   2015-08-04 16:21:25
* @Last Modified by:   vincetam
* @Last Modified time: 2015-08-13 17:47:34
*/

'use strict';

var doWorkoutEvents = {
  SetDefaultWorkout: class SetDefaultWorkout {
    constructor(workout) {
      this.workout = workout;
    }
  },
  SetSelectedWorkout: class SetSelectedWorkout {
    constructor(workout) {
      this.workout = workout;
    }
  }
};

module.exports = doWorkoutEvents;
