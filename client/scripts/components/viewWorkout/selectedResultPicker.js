/*
* @Author: vincetam
* @Date:   2016-01-02 16:17:42
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-06 15:05:55
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
    var time, rounds, load, loadUnit;

    console.log('SelectedResultPicker result', result);

    //Feed relevant result vals to pickers based on result types
    var setPickerProps = function(){
      switch(result.type) {
        case 'Time':
          time = result.val;
          break;
        case 'Rounds':
          rounds = result.val;
          break;
        case 'Max Load':
          //If the value has already been set, pre-set load vals
          if(result.val) {
            load = result.val.val;
            loadUnit = result.val.unit;
          }
          break;
        default:
          return;
      }
    };

    setPickerProps();

    switch (this.props.resultPickerIdx) {
      case 0:
        picker =
          <LogTimePicker time={time} />
        break;
      case 1:
        picker =
          <LogRoundPicker rounds={rounds} />
        break;
      case 2:
        picker =
          <LogLoadPicker load={load} loadUnit={loadUnit}/>
        break;
      default:
        picker = null;
    }

    return picker;
  }
});

module.exports = SelectedResultPicker;
