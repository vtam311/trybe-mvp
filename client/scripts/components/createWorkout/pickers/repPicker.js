/*
* @Author: vincetam
* @Date:   2015-11-18 17:19:52
* @Last Modified by:   VINCE
* @Last Modified time: 2015-12-11 22:06:09
*/

'use strict';

var React = require('react-native');
var editExerciseActions = require('../../../actions/editExerciseActions');

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
      reps: this.props.reps
    };
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
  _setReps: function(reps){
    if(reps === 'No Reps') reps = null;
    editExerciseActions.setReps(reps);
    this.setState({reps: reps});
  },
  render: function() {
    return (
      <PickerIOS
        selectedValue={this.state.reps}
        onValueChange={(val) => this._setReps(val)}>
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
