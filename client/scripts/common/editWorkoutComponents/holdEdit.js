'use strict';

var React = require('react-native');
var modifyWorkoutStore = require('../../stores/modifyWorkoutStore');
var modifyWorkoutActions = require('../../actions/modifyWorkoutActions');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  PickerIOS
} = React;

var HOLD_CHOICES = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150,155,160,165,170,175,180];

var PickerItemIOS = PickerIOS.Item;

var HoldEdit = React.createClass({
  /*HoldEdit state does not reflect store's state because each workout has many exercises which can be modified. If it did, the number of listeners would be too high. */
  getInitialState: function() {
    return {
      showHoldSelection: false
    };
  },
  toggleHoldEdit: function(){
    this.setState({
      showHoldSelection: !this.state.showHoldSelection
    });
  },
  setHold: function(hold, partIdx, exIdx){
    modifyWorkoutActions.setHold(hold, partIdx, exIdx);
  },
  render: function() {
    //Load props
    var exercise = this.props.exercise;
    var partIdx = this.props.partIdx;
    var exIdx = this.props.exIdx;

    var holdEdit;

    //Show holdEdit options if the exercise's load are being edited
    if(this.state.showHoldSelection){
      holdEdit = (
        <PickerIOS
          selectedValue={exercise.hold}
          onValueChange={(seconds) => this.setHold(seconds, partIdx, exIdx)}>
          {HOLD_CHOICES.map((num) =>
            <PickerItemIOS
              key={num}
              value={num}
              label={num.toString() + ' sec'}/>
          )}
        </PickerIOS>
      );
    } else {
      holdEdit = null;
    }

    return (
      <View>
        <TouchableHighlight
          onPress={ () => this.toggleHoldEdit() }>
          <Text>{exercise.hold} Seconds</Text>
        </TouchableHighlight>
        {holdEdit}
      </View>
    );
  }
});

module.exports = HoldEdit;
