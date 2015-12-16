/*
* @Author: vincetam
* @Date:   2015-12-10 14:52:32
* @Last Modified by:   VINCE
* @Last Modified time: 2015-12-15 16:08:10
*/

'use strict';

var React = require('react-native');
var editExerciseActions = require('../../../../actions/editExerciseActions');

var React = require('react-native');

var {
  PickerIOS,
  StyleSheet,
  View
} = React;

var MultiPickerIOS = require('react-native-multipicker');
var { Group, Item } = MultiPickerIOS;

var PickerItemIOS = PickerIOS.Item;

var HOUR_CHOICES = [
  0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
  16,17,18,19,20,21,22,23];

var MIN_CHOICES = [
  0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
  16,17,18,19,20,21,22,23,24,25,26,27,28,
  29,30,31,32,33,34,35,36,37,38,39,40,41,
  42,43,44,45,46,47,48,49,50,51,52,53,54,
  55,56,57,58,59];

var SEC_CHOICES = [
  0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
  16,17,18,19,20,21,22,23,24,25,26,27,28,
  29,30,31,32,33,34,35,36,37,38,39,40,41,
  42,43,44,45,46,47,48,49,50,51,52,53,54,
  55,56,57,58,59];

var TimePicker = React.createClass({
  getInitialState: function() {
    return {
      //time is a string in format 00:00:00
      time: this.props.time,
    };
  },
  componentWillMount: function() {
    this.initializePickers();
  },
  initializePickers: function(){
    //if time is null, set hour, min, and sec to 0
    if(this.state.time === null) {
      this.setState({
        hour: 0,
        min: 0,
        sec: 0
      });
    } else {
      this.setState({
        hour: Number(this.props.time.slice(0,2)),
        min: Number(this.props.time.slice(3,5)),
        sec: Number(this.props.time.slice(6,8)),
      });
    }
  },
  setHour: function(choiceObj){
    var newHour = choiceObj.newValue;
    this.setState({hour: newHour});
    this.setTime('hour', newHour);
  },
  setMin: function(choiceObj){
    var newMin = choiceObj.newValue;
    this.setState({min: newMin});
    this.setTime('min', newMin);
  },
  setSec: function(choiceObj){
    var newSec = choiceObj.newValue;
    this.setState({sec: newSec});
    this.setTime('sec', newSec);
  },
  setTime: function(targetSection, val){
    var hour = this.state.hour;
    var min = this.state.min;
    var sec = this.state.sec;

    var prepSectionForTimeString = function(timeSectionVal){
      //Maintain time format by adding zero to front if not 2 chars long
      var timeSection = timeSectionVal.toString();
      if (timeSection.charAt(1) === '') timeSection = '0' + timeSection;
      return timeSection;
    };
    var setTimeValues = function() {
      //Updates hour, min, or sec
      //Since state vals aren't updated immediately,
      //Must update targetSection val without referencing state

      if(targetSection === 'hour') {
        hour = prepSectionForTimeString(val);
      } else {
        hour = prepSectionForTimeString(hour);
      }

      if(targetSection === 'min') {
        min = prepSectionForTimeString(val);
      } else {
        min = prepSectionForTimeString(min);
      }

      if(targetSection === 'sec') {
        sec = prepSectionForTimeString(val);
      } else {
        sec = prepSectionForTimeString(sec);
      }
    };

    setTimeValues();

    var newTime = hour + ':' + min + ':' + sec;
    //If user sets all time values back to zero, set to null
    if(newTime === '00:00:00') newTime = null;

    editExerciseActions.setTime(newTime);
  },

  showChoiceLabels: function(choice){
    //If user selects number from HOUR_CHOICES, stringify
    if(typeof choice === 'number') {
      return choice.toString();
    } else {
      return choice;
    }
  },
  render: function() {
    var hourItems = HOUR_CHOICES.map((choice, index) =>
      <Item
        value={choice}
        label={this.showChoiceLabels(choice) + ' hr'}
        key={index} />
    );

    var minItems = MIN_CHOICES.map((choice, index) =>
      <Item
        value={choice}
        label={this.showChoiceLabels(choice) + ' min'}
        key={index} />
    );

    var secItems = SEC_CHOICES.map((choice, index) =>
      <Item
        value={choice}
        label={this.showChoiceLabels(choice) + ' sec'}
        key={index} />
    );

    //Not rendering choices for hour, since clutters
    //user view. But functionality is ready
    return (
      <MultiPickerIOS>
        <Group selectedIndex={this.state.min} onChange={this.setMin}>
          {minItems}
        </Group>

        <Group selectedIndex={this.state.sec} onChange={this.setSec}>
          {secItems}
        </Group>
      </MultiPickerIOS>
    );
  }
});

module.exports = TimePicker;
