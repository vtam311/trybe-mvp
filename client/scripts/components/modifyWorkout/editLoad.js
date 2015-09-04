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

var LOAD_CHOICES = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150,155,160,165,170,175,180,185,190,195,200,205,210,215,220,225,230,235,240,245,250,255,260,265,270,275,280,285,290,295,300,305,310,315,320,325,330,335,340,345,350,355,360,365,370,375,380,385,390,395,400,405,410,415,420,425,430,435,440,445,450];

var PickerItemIOS = PickerIOS.Item;

var EditLoad = React.createClass({
  /*EditLoad state does not reflect store's state because each workout has many exercises which can be modified. If it did, the number of listeners would be too high. */
  getInitialState: function() {
    return {
      showLoadSelection: false
    };
  },
  toggleLoadEdit: function(exerciseNum){
    this.setState({
      showLoadSelection: !this.state.showLoadSelection
    });
  },
  setLoad: function(load, roundNum, exerciseNum){
    modifyWorkoutActions.setLoad(load, roundNum, exerciseNum);
  },
  render: function() {
    //Load props
    var exercise = this.props.exercise;
    var exerciseNum = this.props.exerciseNum;
    var roundNum = this.props.roundNum;

    var loadEdit;

    //Show loadEdit options if the exercise's load are being edited
    if(this.state.showLoadSelection){
      loadEdit = (
        <PickerIOS
          selectedValue={exercise.load.val}
          onValueChange={(weight) => this.setLoad(weight, roundNum, exerciseNum)}>
          {LOAD_CHOICES.map((num) =>
            <PickerItemIOS
              key={num}
              value={num}
              label={num.toString() + ' ' + exercise.load.units}/>
          )}
        </PickerIOS>
      );
    } else {
      loadEdit = null;
    }

    return (
      <View>
        <TouchableHighlight
          onPress={ () => this.toggleLoadEdit(exerciseNum) }>
          <Text>at {exercise.load.val} {exercise.load.units}</Text>
        </TouchableHighlight>
        {loadEdit}
      </View>
    );
  }
});

module.exports = EditLoad;
