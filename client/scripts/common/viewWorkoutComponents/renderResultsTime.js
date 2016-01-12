/*
* @Author: vincetam
* @Date:   2016-01-11 19:00:49
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-11 19:01:15
*/

'use strict';

var renderResultsTime = function(time) {
  var result;
  if(time){
    result = '';
    var hour = time.slice(0,2);
    var min = time.slice(3,5);
    var sec = time.slice(6,8);

    //Determine relevant units, and delete irrelevant ones
    if(hour === '00') hour = null;
    if(min === '00' && hour === null) min = null;
    // if(sec === '00') sec = null;

    //For relevant units, remove zeroes
    if(hour && hour.charAt(0) === '0') hour = hour.charAt(1);
    //Remove zero if hour is null
    if (hour === null && min && min.charAt(0) === '0') min = min.charAt(1);
    //Remove zero if both hour and min are null, and add 'sec'
    if(hour === null && min === null && sec && sec.charAt(0) === '0')
      sec = sec.charAt(1) + ' sec';

    //Create result text
    if(hour) result += hour + ':';
    if(min) result += min + ':';
    if(sec) result += sec;
  } else {
    result = null;
  }

  return result;
};

module.exports = renderResultsTime;
