/*
* @Author: vincetam
* @Date:   2016-01-07 21:30:50
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-07 21:41:47
*/

'use strict';

var isCustomMetric = function(metric){
  if(metric &&
    metric !== 'Time' &&
    metric !== 'Rounds' &&
    metric !== 'Max Load'){
    return true;
  } else {
    return false;
  }
};

module.exports = isCustomMetric;
