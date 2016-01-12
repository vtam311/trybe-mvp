/*
* @Author: vincetam
* @Date:   2016-01-02 16:17:42
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-12 11:34:56
*/

'use strict';

var React = require('react-native');

var {
  View,
} = React;

var LogTimePicker = require('./logTimePicker');
var LogRoundPicker = require('./logRoundPicker');
var LogLoadPicker = require('./logLoadPicker');
var CustomInput = require('./customInput');

//Gist: shows a PickerIOS or other input component to edit
//time, rounds, load, etc. from user selection of SegmentedControlIOS
var SelectedResultInput = React.createClass({

  render: function() {
    var input;
    var result = this.props.result;
    var time, rounds, load, loadUnit, metric, customVal;

    //Only feed relevant result vals to inputs based on result types.
    var setInputProps = function(){
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
            loadUnit = result.val.units;
          }
          break;
        default:
          metric = result.type;
          customVal = result.val;
      }
    };

    setInputProps();

    switch (this.props.segmCtrlIdx) {
      case 0:
        input =
          <LogTimePicker time={time} />
        break;
      case 1:
        input =
          <LogRoundPicker rounds={rounds} />
        break;
      case 2:
        input =
          <LogLoadPicker load={load} loadUnit={loadUnit}/>
        break;
      case 3:
        input = <CustomInput metric={metric} customVal={customVal}/>
        break;
      default:
        input = null;
    }

    return input;
  }
});

module.exports = SelectedResultInput;
