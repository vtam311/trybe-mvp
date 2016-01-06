/*
* @Author: vincetam
* @Date:   2016-01-02 16:52:37
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-06 14:01:55
*/

'use strict';

var React = require('react-native');
var logModalActions = require('../../../actions/logModalActions');

var {
  PickerIOS
} = React;

var PickerItemIOS = PickerIOS.Item;
var ROUND_CHOICES = [
  'No Rounds',1,2,3,4,5,6,7,8,9,10,
  11,12,13,14,15,16,17,18,19,20,
  21,22,23,24,25,26,27,28,29,30,
  31,32,33,34,35,36,37,38,39,40,
  41,42,43,44,45,46,47,48,49,50,
  51,52,53,54,55,56,57,58,59,60,
  61,62,63,64,65,66,67,68,69,70,
  71,72,73,74,75,76,77,78,79,80,
  81,82,83,84,85,86,87,88,89,90,
  91,92,93,94,95,96,97,98,99,100
];

var LogRoundPicker = React.createClass({
  getInitialState: function() {
    return {
      rounds: this.props.rounds
    };
  },
  showChoiceLabels: function(choice){
    //If the user selected a number from ROUND_CHOICES, stringify
    //for display
    if(typeof choice === 'number') {
      return choice.toString();
    } else {
      return choice;
    }
  },
  _setRounds: function(val){
    if(val === 'No Rounds') val = null;
    logModalActions.setResultRounds(val);
    this.setState({rounds: val});
  },
  render: function() {
    return (
      <PickerIOS
        selectedValue={this.state.rounds}
        onValueChange={(val) => this._setRounds(val)}>
        {ROUND_CHOICES.map((choice) =>
          <PickerItemIOS
            key={choice}
            value={choice}
            label={this.showChoiceLabels(choice)}/>
        )}
      </PickerIOS>
    );
  }
});

module.exports = LogRoundPicker;
