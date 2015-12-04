/*
* @Author: VINCE
* @Date:   2015-12-04 10:48:24
* @Last Modified by:   VINCE
* @Last Modified time: 2015-12-04 11:16:47
*/

'use strict';

var React = require('react-native');

var {
  View,
} = React;

var RepPicker = require('./pickers/repPicker');
var LoadPicker = require('./pickers/loadPicker');

var SelectedSegment = React.createClass({
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
