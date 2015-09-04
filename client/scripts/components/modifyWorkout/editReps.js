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

var REP_CHOICES = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,30,35,40,45,50,55,60];

var PickerItemIOS = PickerIOS.Item;


var EditReps = React.createClass({
  /*EditReps state does not reflect store's state because each workout has many exercises which can be modified. If it did, the number of listeners would be too high. */
  getInitialState: function() {
    return {
      // showRepSelection: modifyWorkoutStore.getIsEditingReps(this.props.exerciseNum)
      showRepSelection: false
    };
  },
  // componentDidMount: function() {
  //   modifyWorkoutStore.addChangeListener(this._onChange);
  // },
  // componentWillUnmount: function() {
  //   modifyWorkoutStore.removeChangeListener(this._onChange);
  // },
  // _onChange: function(){
  //   this.setState({
  //     showRepSelection: modifyWorkoutStore.getIsEditingReps(this.props.exerciseNum)
  //   });
  // },
  toggleRepEdit: function(exerciseNum){
    // modifyWorkoutActions.toggleRepEdit(exerciseNum);
    this.setState({
      showRepSelection: !this.state.showRepSelection
    });
  },
  setReps: function(reps, roundNum, exerciseNum){
    modifyWorkoutActions.setReps(reps, roundNum, exerciseNum);
  },
  render: function() {
    //Load props
    var exercise = this.props.exercise;
    var exerciseNum = this.props.exerciseNum;
    var roundNum = this.props.roundNum;

    var repEdit;

    //Show repEdit options if the exercise's reps are being edited
    if(this.state.showRepSelection){
      repEdit = (
        <PickerIOS
          selectedValue={exercise.reps}
          onValueChange={(val) => this.setReps(val, roundNum, exerciseNum)}>
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
          onPress={ () => this.toggleRepEdit(exerciseNum) }>
          <Text>{exercise.reps}</Text>
        </TouchableHighlight>
        {repEdit}
      </View>
    );
  }
});

module.exports = EditReps;
