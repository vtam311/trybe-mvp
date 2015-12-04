/*
* @Author: vincetam
* @Date:   2015-11-18 17:19:52
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-03 15:23:35
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
var REP_CHOICES = [
  'No Reps',1,2,3,4,5,6,7,8,9,10,
  11,12,13,14,15,16,17,18,19,20,
  21,22,23,24,25,30,35,40,45,50,
  55,60,65,70,75,80,85,90,95,100
];

var RepPicker = React.createClass({
  getInitialState: function() {
    return {
      reps: this.props.targetExercise.reps
    };
  },
  renderReps: function(reps, partIdx, exIdx){
    this.setState({reps: reps});
  },
  saveReps: function(reps, partIdx, exIdx){
    //Save reps after clicking 'Done' - otherwise
    //leave targetExercise as is.
    if(reps === 'Not Selected') reps = null;
    createWorkoutActions.setReps(reps, partIdx, exIdx);
  },
  showChoiceLabels: function(choice){
    //If the user selected a number from REP_CHOICES, stringify
    //for display
    if(typeof choice === 'number') {
      return choice.toString();
    } else {
      return choice;
    }
  },
  render: function() {
    console.log('repPicker targetExercise', this.props.targetExercise);

    return (
      <PickerIOS
        selectedValue={this.state.reps}
        onValueChange={(val) => this.renderReps(val, this.props.partIdx, this.props.exIdx)}>
        {REP_CHOICES.map((choice) =>
          <PickerItemIOS
            key={choice}
            value={choice}
            label={this.showChoiceLabels(choice)}/>
        )}
      </PickerIOS>
    );
  }
});

module.exports = RepPicker;
