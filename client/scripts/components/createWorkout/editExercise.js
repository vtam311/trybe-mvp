'use strict';

var React = require('react-native');

//Load components

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
  toggleRepEdit: function(){
    //must be passed in the workout, action, and store
    this.props.actions.toggleRepEdit();
  },
  setReps: function(reps, roundNum, exNum){
    this.props.actions.setReps(reps, roundNum, exNum);
  },
  render: function() {
    //Load props
    var exercise = this.props.exercise;
    var exNum = this.props.exNum;
    var roundNum = this.props.roundNum;
    var actions = this.props.actions;
    var store = this.props.store;

    //Declare variables that change
    var repEdit;

    //how to know when to show repEdit?
    // if(this.props.store.getIsEditingReps()){
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
    // }else{
    //   repEdit = null;
    // }

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

var EditExercise = React.createClass({

  render: function(){
    //Load props
    var exercise = this.props.exercise;
    var exNum = this.props.exNum;
    var roundNum = this.props.roundNum;
    var actions = this.props.actions;
    var store = this.props.store;

    //Declare variables for exercise
    var repsOrHold;
    var movement;
    var load;

    var renderRepsOrHold = function(exercise) {
      if(exercise.reps) {
        repsOrHold = <EditReps exercise={exercise} exNum={exNum} roundNum={roundNum} store={store} actions={actions}/>;
      }else if(exercise.hold) {
        //TO DO: enable user to edit hold and name on click
        repsOrHold = exercise.hold;
      }
    };

    var renderMovement = function(exercise) {
      if(exercise.reps){
        movement = <Text>{ exercise.name}</Text>
      }else if(exercise.hold){
        movement = <Text>{ ' Sec ' + exercise.name}</Text>
      }
    };

    var renderLoad = function(exercise) {
      //TO DO: enable user to edit load on click
      if(exercise.load.val) {
        load = <Text>{'at ' + exercise.load.val + exercise.load.units}</Text>;
      } else{
        load = null;
      }
    };

    renderRepsOrHold(exercise);
    renderMovement(exercise);
    renderLoad(exercise);

    return (
      /* jshint ignore:start */
      <View>
        {repsOrHold}
        {movement}
        {load}
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = EditExercise;