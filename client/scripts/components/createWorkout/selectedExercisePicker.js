/*
* @Author: VINCE
* @Date:   2015-12-04 10:48:24
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-10 16:03:12
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
  //Gist: shows a PickerIOS component to edit
  //either reps, load, time, distance, etc. based on user's selection
  //from SegmentedControlIOS
  render: function() {
    var picker;
    //TO DO: pass specific parts needed to pickers, not entire exercise?

    switch (this.props.exPickerIdx) {
      case 0:
        picker =
          <RepPicker
            currentExercise={this.props.currentExercise}/>
        break;
      case 1:
        picker =
          <LoadPicker
            currentExercise={this.props.currentExercise}/>
        break;
      case 2:
        picker =
          <DistPicker
            currentExercise={this.props.currentExercise}/>
        break;
      case 3:
        picker =
          <TimePicker
            time={this.props.currentExercise.time}/>
        break;
      default:
        console.log('Selected Segment Unknown');
    }

    return picker;
  }
});

module.exports = SelectedExercisePicker;
