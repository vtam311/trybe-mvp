/*
* @Author: vincetam
* @Date:   2015-11-18 17:19:52
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-05 21:36:44
*/

'use strict';

var React = require('react-native');
var editWorkoutActions = require('../../../actions/editWorkoutActions');

var {
  PickerIOS,
  StyleSheet
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
      return choice.toString() + ' reps';
    } else {
      return choice;
    }
  },
  _setReps: function(reps){
    editWorkoutActions.setTargetExerciseIdx(this.props.partIdx, this.props.exIdx);

    //If user selects no reps, set to null and close picker
    if(reps === 'No Reps'){
      reps = null;
      this.props.setIsShowingPicker(false);
    }

    editWorkoutActions.setReps(reps);
    this.setState({reps: reps});
  },
  render: function() {
    return (
      <PickerIOS
        itemStyle={{fontSize: 25, color: 'red', textAlign: 'left', fontWeight: 'bold'}}
        selectedValue={this.state.reps}
        onValueChange={(val) => this._setReps(val)} >
        {REP_CHOICES.map((choice) =>
          <PickerItemIOS
            key={choice}
            value={choice}
            label={this.showChoiceLabels(choice)} />
        )}
      </PickerIOS>
    );
  }
});

var styles = StyleSheet.create({
  itemStyle: {
    color: '#fff',
    fontSize: 30,
  }
});

module.exports = RepPicker;
