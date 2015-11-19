/*
* @Author: vincetam
* @Date:   2015-11-18 17:19:52
* @Last Modified by:   vincetam
* @Last Modified time: 2015-11-18 18:24:24
*/

'use strict';

var React = require('react-native');
var createWorkoutStore = require('../../../stores/createWorkoutStore');
var createWorkoutActions = require('../../../actions/createWorkoutActions');

var React = require('react-native');

var {
  PickerIOS
} = React;

var PickerItemIOS = PickerIOS.Item;
var REP_CHOICES = ['Not Selected',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,30,35,40,45,50,55,60];
var TEMP_PART_IDX = 0;
var TEMP_EX_IDX = 0;

var RepPicker = React.createClass({
  getInitialState: function() {
    return {
      isNewOrCreating: 'NEW',
      currVal: this.props.repVal
    };
  },
  setReps: function(reps, partIdx, exIdx){
    if(reps === 'Not Selected') reps = null;
    createWorkoutActions.setReps(reps, partIdx, exIdx);
  },
  setLabels: function(option){
    if(typeof option === 'number') {
      return option.toString() + ' Reps';
    } else {
      return option;
    }
  },
  render: function() {
    //Load props
    // var exercise = this.props.exercise;
    // var partIdx = this.props.partIdx;
    // var exIdx = this.props.exIdx;

    return (
      <PickerIOS
        selectedValue={this.state.currVal}
        onValueChange={(val) => this.setReps(val, TEMP_PART_IDX, TEMP_EX_IDX)}>
        {REP_CHOICES.map((option) =>
          <PickerItemIOS
            key={option}
            value={option}
            label={this.setLabels(option)}/>
        )}
      </PickerIOS>
    );
  }
});

module.exports = RepPicker;
