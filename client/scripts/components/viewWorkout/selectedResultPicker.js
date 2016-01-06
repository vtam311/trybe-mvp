/*
* @Author: vincetam
* @Date:   2016-01-02 16:17:42
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-06 14:01:52
*/

'use strict';

var React = require('react-native');

var {
  View,
} = React;

var LogTimePicker = require('./logPickers/logTimePicker');
var LogRoundPicker = require('./logPickers/logRoundPicker');
var LogLoadPicker = require('./logPickers/logLoadPicker');
//Custom

var SelectedResultPicker = React.createClass({

  //Gist: shows a PickerIOS component to edit reps, load,
  //time, distance, etc. from user selection on SegmentedControlIOS
  render: function() {
    var picker;
    var result = this.props.result;
    console.log('SelectedResultPicker result is', result);
    var time, rounds, maxLoad;

    //Feed relevant result vals to pickers based on result types
    if(result.type === 'rounds') rounds = result.val;
    console.log('SelectedResultPicker round is', rounds);

    switch (this.props.resultPickerIdx) {
      case 0:
        picker =
          <LogTimePicker />
        break;
      case 1:
        picker =
          <LogRoundPicker rounds={rounds} />
        break;
      case 2:
        picker =
          <LogLoadPicker />
        break;
      default:
        console.log('Selected Segment Unknown');
    }

    return picker;
  }
});

module.exports = SelectedResultPicker;
