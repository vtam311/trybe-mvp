/*
* @Author: vincetam
* @Date:   2015-12-10 17:45:46
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-10 18:09:09
*/

'use strict';

//Styling:
//00:00 --> none
//00:01 --> 1 sec
//01:00 --> 1 min
//01:01 --> 1:01 sec
var renderExerciseTime = function(time) {
  var result;

  if(time){
    result = '';
    var min = time.slice(3,5);
    var sec = time.slice(6,8);

    var removeZeroes = function(val){
      //For relevant units, remove zeroes
      if(val.charAt(0) === '0') val = val.slice(1);
      return val;
    };

    //Check if min is empty.
    if(min == '00') {
      //Check if sec is empty. Both empty, show nothing
      if(sec == '00') {
        result = null;
      } else {
        //Only seconds provided - show seconds
        result = removeZeroes(sec) + ' Sec';
      }
    } else {
      //If min isn't empty, check if sec is empty
      if(sec == '00') {
        //If only min are given, show only min
        result = removeZeroes(min) + ' min';
      } else {
        //If both min and sec given
        result = removeZeroes(min) + ':' + sec + ' Sec';
      }
    }

    return result;
  }
};

module.exports = renderExerciseTime;
