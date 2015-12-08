/*
* @Author: VINCE
* @Date:   2015-12-04 10:31:30
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-08 08:29:40
*/

'use strict';

var React = require('react-native');
var editExerciseActions = require('../../../actions/editExerciseActions');

var React = require('react-native');

var {
  PickerIOS
} = React;

var PickerItemIOS = PickerIOS.Item;
var WEIGHT_CHOICES = ['No Weight',5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150,155,160,165,170,175,180,185,190,195,200,205,210,215,220,225,230,235,240,245,250,255,260,265,270,275,280,285,290,295,300,305,310,315,320,325,330,335,340,345,350,355,360,365,370,375,380,385,390,395,400,405,410,415,420,425,430,435,440,445,450];

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
