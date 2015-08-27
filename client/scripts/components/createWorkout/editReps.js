'use strict';

var React = require('react-native');
var createWorkoutStore = require('../../stores/createWorkoutStore');
var createWorkoutActions = require('../../actions/createWorkoutActions');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  PickerIOS
} = React;

var REP_CHOICES = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,30,35,40,45,50,55,60];

var PickerItemIOS = PickerIOS.Item;


var EditReps = React.createClass({
  getInitialState: function() {
    return {
      showRepSelection: false
    };
  },
  toggleRepEdit: function(){
    this.setState({
      showRepSelection: !this.state.showRepSelection
    });
  },
  setReps: function(reps, roundNum, exNum){
    createWorkoutActions.setReps(reps, roundNum, exNum);
  },
  render: function() {
    //Load props
    var exercise = this.props.exercise;
    var exNum = this.props.exNum;
    var roundNum = this.props.roundNum;

    var repEdit;

    //Refactor to use store?
    if(this.state.showRepSelection){
      repEdit = (
        <PickerIOS
          selectedValue={exercise.reps}
          onValueChange={(val) => this.setReps(val, roundNum, exNum)}>
          {REP_CHOICES.map((num) =>
            <PickerItemIOS
              key={num}
              value={num}
              label={num.toString() + ' Reps'}/>
          )}
        </PickerIOS>
      );
    }else{
      repEdit = null;
    }

    return (
      <View>
        <TouchableHighlight
          onPress={ () => this.toggleRepEdit() }>
          <Text>{exercise.reps}</Text>
        </TouchableHighlight>
        {repEdit}
      </View>
    );
  }
});

module.exports = EditReps;
