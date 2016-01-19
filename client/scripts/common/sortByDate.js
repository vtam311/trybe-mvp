/*
* @Author: vincetam
* @Date:   2016-01-19 13:41:59
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-19 13:53:40
*/

'use strict';

var sortByDate = {
  insert: function (array, begin, end, v) {
    while(begin + 1 < end && array[begin+1] < v) {
      array.swap(begin, begin+1);
      ++begin;
    }
    array[begin] = v;
  },
  merge: function(array, begin, begin_right, end){
    for(; begin < begin_right; ++begin) {
      if(array[begin].date < array[begin_right].date) {
        var v = array[begin];
        array[begin] = array[begin_right];
        this.insert(array, begin_right, end, v);
      }
    }
  },
  mergeSort: function(array, begin, end){
    var size = end - begin;
    if(size < 2) return;

    var begin_right = begin + Math.floor(size/2);

    this.mergeSort(array, begin, begin_right);
    this.mergeSort(array, begin_right, end);
    this.merge(array, begin, begin_right, end);
  }
};

module.exports = sortByDate;
