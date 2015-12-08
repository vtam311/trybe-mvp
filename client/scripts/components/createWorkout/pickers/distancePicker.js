/*
* @Author: vincetam
* @Date:   2015-12-08 08:37:20
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-08 09:53:14
*/

'use strict';

var React = require('react-native');
var editExerciseActions = require('../../../actions/editExerciseActions');

var React = require('react-native');

var {
  PickerIOS,
  StyleSheet,
  View
} = React;

var MultiPickerIOS = require('react-native-multipicker');
var { Group, Item } = MultiPickerIOS;

var PickerItemIOS = PickerIOS.Item;
var DIST_CHOICES = ['No Distance',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,25,30,35,40,45,50,100,200,400,600,800,1200,1600];
var DIST_UNITS = ['ft', 'yd', 'm', 'km', 'mi'];

var DistancePicker = React.createClass({
  getInitialState: function() {
    return {
      distVal: this.props.currentExercise.distance.val,
      units: this.props.currentExercise.distance.units
    };
  },
  showChoiceLabels: function(choice){
    //If user selects number from DIST_CHOICES, stringify
    if(typeof choice === 'number') {
      return choice.toString();
    } else {
      return choice;
    }
  },
  _setDistVal: function(choiceObj){
    var dist = choiceObj.newValue;
    if(dist === 'No Distance') dist = null;

    //Set dist val in editExerciseStore
    editExerciseActions.setDistVal(dist);

    //Update picker's state
    this.setState({distVal: dist});
  },
  _setDistUnits: function(choiceObj){
    var unit = choiceObj.newValue;

    //Set dist units in editExerciseStore
    editExerciseActions.setDistUnit(unit);

    //Update picker's state
    this.setState({units: unit});
  },
  render: function() {
    var distValItems = DIST_CHOICES.map((choice, index) =>
      <Item
        value={choice}
        label={this.showChoiceLabels(choice)}
        key={index} />
    );

    return (
      <MultiPickerIOS>
        <Group selectedValue={this.state.distVal} onChange={this._setDistVal}>
          {distValItems}
        </Group>
        <Group selectedValue={this.state.units} onChange={this._setDistUnits}>
          <Item value="ft" label="ft" />
          <Item value="yd" label="yd" />
          <Item value="m" label="m" />
          <Item value="km" label="km" />
          <Item value="mi" label="mi" />
        </Group>
      </MultiPickerIOS>
    );
  }
});

module.exports = DistancePicker;
