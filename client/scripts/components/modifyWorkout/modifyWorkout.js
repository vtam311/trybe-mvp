'use strict';

var React = require('react-native');
var modifyWorkoutActions = require('../../actions/modifyWorkoutActions');
var modifyWorkoutStore = require('../../stores/modifyWorkoutStore');

//Load components
var ExerciseEdit = require('../../common/editWorkoutComponents/exerciseEdit');
var TimeEdit = require('../../common/editWorkoutComponents/timeEdit');
var ModifyInstructions = require('./modifyInstructions');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} = React;

var ModifyWorkout = React.createClass({
  getInitialState: function() {
    return {
      workout: modifyWorkoutStore.getWorkout(),
    };
  },
  componentDidMount: function() {
    modifyWorkoutStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    modifyWorkoutStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      workout: modifyWorkoutStore.getWorkout(),
    });
  },
  _handleBackButtonPress: function() {
    console.log('in modifyWorkout, back button pressed');
    this.props.navigator.pop();
  },
  render: function(){
    var workout = this.state.workout;
    var modifyParts = [];
    console.log('in modifyWorkout, workout', workout);

    //Traverse parts of workout
    for(var i = 0; i < workout.parts.length; i++) {
      var modifyPart = [];
      var currPart = workout.parts[i];

      //For each part, add modifyInstructions component
      modifyPart.push(<ModifyInstructions part={currPart} isEditable={true} />);

      //Push each modifyPart into modifyParts
      modifyParts.push(modifyPart);
    }

    return (
      /* jshint ignore:start */
      <View>
        <Text>Filler</Text>
        <Text>Filler</Text>
        <Text>Filler</Text>
        <Text>Filler</Text>
        {modifyParts}
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = ModifyWorkout;