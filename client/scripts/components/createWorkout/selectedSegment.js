/*
* @Author: VINCE
* @Date:   2015-12-04 10:48:24
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-08 08:16:43
*/

'use strict';

var React = require('react-native');

var {
  View,
} = React;

var RepPicker = require('./pickers/repPicker');
var LoadPicker = require('./pickers/loadPicker');

var SelectedSegment = React.createClass({
  //Gist: shows a PickerIOS component to edit
  //either reps, load, time, distance, etc. based on user's selection
  //from SegmentedControlIOS
  render: function() {
    var picker;
    console.log('SelectedSegment segment', this.props.segmCtrlVal);

    switch (this.props.segmCtrlVal) {
      case 0:
        picker = <RepPicker
                    partIdx={this.props.partIdx}
                    exIdx={this.props.exIdx}
                    currentExercise={this.props.currentExercise}/>
        break;
      case 1:
        picker = <LoadPicker
                    partIdx={this.props.partIdx}
                    exIdx={this.props.exIdx}
                    currentExercise={this.props.currentExercise}/>
        break;
      default:
        console.log('Selected Segment Unknown');
    }

    return picker;
  }
});

module.exports = SelectedSegment;
