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
      showRepSelection: createWorkoutStore.getIsEditingReps(this.props.exerciseNum)
    };
  },
  componentDidMount: function() {
    createWorkoutStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    createWorkoutStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      showRepSelection: createWorkoutStore.getIsEditingReps(this.props.exerciseNum)
    });
  },
  toggleRepEdit: function(exerciseNum){
    createWorkoutActions.toggleRepEdit(exerciseNum);
  },
  setReps: function(reps, roundNum, exerciseNum){
    createWorkoutActions.setReps(reps, roundNum, exerciseNum);
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
