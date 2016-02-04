/*
* @Author: vincetam
* @Date:   2015-12-08 08:37:20
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-03 23:17:47
*/

'use strict';

var React = require('react-native');
var editWorkoutActions = require('../../../actions/editWorkoutActions');

var {
  PickerIOS,
  StyleSheet,
  View
} = React;

var MultiPickerIOS = require('react-native-multipicker');
var { Group, Item } = MultiPickerIOS;

var PickerItemIOS = PickerIOS.Item;

var DIST_CHOICES = [
  'No Distance',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
  16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
  35,40,45,50,55,60,65,70,75,80,85,90,95,100,
  200,300,400,500,600,700,800,900,1000,
  1200,1400,1600,1800,2000];
var DIST_UNITS = ['ft', 'yd', 'm', 'km', 'mi'];

var DistancePicker = React.createClass({
  getInitialState: function() {
    return {
      distVal: this.props.distVal,
      units: this.props.units
    };
  },
  _setDistVal: function(choiceObj){
    var dist = choiceObj.newValue;
    if(dist === 'No Distance') dist = null;

    //Set dist val in editWorkoutStore
    editWorkoutActions.setDistVal(dist);

    //Update picker's state
    this.setState({distVal: dist});

    //Ensure a default unit is selected
    this.checkUnits();
  },
  _setDistUnits: function(choiceObj){
    var unit = choiceObj.newValue;

    //Set dist units in editWorkoutStore
    editWorkoutActions.setDistUnit(unit);

    //Update picker's state
    this.setState({units: unit});
  },
  checkUnits: function(){
    //If no unit has been selected, pre-set to ft
    if(this.state.units === null) {
      editWorkoutActions.setDistUnit('ft');
    }
  },
  showChoiceLabels: function(choice){
    //If user selects number from DIST_CHOICES, stringify
    if(typeof choice === 'number') {
      return choice.toString();
    } else {
      return choice;
    }
  },
  getDistSelectedIndex: function(){
    //MultiPicker's selectedValue does not work, must use selectedIndex
    //returns the associated index val of DIST_CHOICES
    var lastOnesIdx = 30;
    var lastFivesIdx = 44;
    var lastHundredsIdx = 53;

    if(this.state.distVal === null) {
      return 0;
    } else if (this.state.distVal <= 30) {
      return this.state.distVal;
    } else if (this.state.distVal <= 100) {
      return ((this.state.distVal - 30) / 5) + lastOnesIdx;
    } else if (this.state.distVal <= 1000) {
      return ((this.state.distVal - 100) / 100) + lastFivesIdx;
    } else if (this.state.distVal <= 2000) {
      return ((this.state.distVal - 1000) / 200) + lastHundredsIdx;
    }
  },
  getUnitSelectedIndex: function(){
    //returns the associated index val of units
    if(this.state.units === 'ft') return 0;
    if(this.state.units === 'yd') return 1;
    if(this.state.units === 'm') return 2;
    if(this.state.units === 'km') return 3;
    if(this.state.units === 'mi') return 4;
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
        <Group selectedIndex={this.getDistSelectedIndex()} onChange={this._setDistVal}>
          {distValItems}
        </Group>
        <Group selectedIndex={this.getUnitSelectedIndex()} onChange={this._setDistUnits}>
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
