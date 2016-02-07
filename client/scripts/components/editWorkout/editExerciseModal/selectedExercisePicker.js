/*
* @Author: VINCE
* @Date:   2015-12-04 10:48:24
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-02 16:23:40
*/

'use strict';

var React = require('react-native');

var {
  View,
} = React;

var RepPicker = require('./pickers/repPicker');
var LoadPicker = require('./pickers/loadPicker');
var DistPicker = require('./pickers/distancePicker');
var TimePicker = require('./pickers/timePicker');

var SelectedExercisePicker = React.createClass({
  //Gist: shows a PickerIOS component to edit reps, load,
  //time, distance, etc. from user selection on SegmentedControlIOS
  render: function() {
    var picker;
    var currentExercise = this.props.currentExercise;
    switch (this.props.exPickerIdx) {
      case 0:
        picker =
          <RepPicker
            reps={currentExercise.reps}/>
        break;
      case 1:
        picker =
          <LoadPicker
            loadVal={currentExercise.load.val}
            units={currentExercise.load.units}/>
        break;
      case 2:
        picker =
          <DistPicker
            distVal={currentExercise.distance.val}
            units={currentExercise.distance.units}/>
        break;
      case 3:
        picker =
          <TimePicker
            time={currentExercise.time}/>
        break;
      default:
        console.log('Selected Segment Unknown');
    }

    return picker;
  }
});

module.exports = SelectedExercisePicker;
