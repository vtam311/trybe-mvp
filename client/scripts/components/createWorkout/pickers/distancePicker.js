/*
* @Author: vincetam
* @Date:   2015-12-08 08:37:20
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-08 08:38:12
*/

'use strict';

var React = require('react-native');
var editExerciseActions = require('../../../actions/editExerciseActions');

var React = require('react-native');

var {
  PickerIOS
} = React;

var PickerItemIOS = PickerIOS.Item;
var DIST_CHOICES = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,25,30,35,40,45,50,100,200,400,600,800,1200,1600];
var DIST_UNITS = ['ft', 'yd', 'm', 'km', 'mi'];

var LoadPicker = React.createClass({
  getInitialState: function() {
    return {
      loadVal: this.props.currentExercise.load.val,
      //change units here too?
      //units: this.props.currentExist.load.units
    };
  },
  setLoadVal: function(val){
    if(val === 'No Weight') val = null;

    //Set load val in editExerciseStore
    editExerciseActions.setLoadVal(val);

    //Update picker's state
    this.setState({loadVal: val});
  },
  showChoiceLabels: function(choice){
    //If user selects number from WEIGHT_CHOICES, stringify
    if(typeof choice === 'number') {
      return choice.toString();
    } else {
      return choice;
    }
  },
  render: function() {
    console.log('LoadPicker currentExercise', this.props.currentExercise);

    return (
      <PickerIOS
        selectedValue={this.state.loadVal}
        onValueChange={(val) => this.setLoadVal(val)}>
        {WEIGHT_CHOICES.map((choice) =>
          <PickerItemIOS
            key={choice}
            value={choice}
            label={this.showChoiceLabels(choice)}/>
        )}
      </PickerIOS>
    );
  }
});

module.exports = LoadPicker;
