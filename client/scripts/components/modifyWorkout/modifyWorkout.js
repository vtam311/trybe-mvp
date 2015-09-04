'use strict';

var React = require('react-native');
var modifyWorkoutStore = require('../../stores/modifyWorkoutStore');
var modifyWorkoutActions = require('../../actions/modifyWorkoutActions');

//Load components
var EditAMRAP = require('./workoutTypes/editAMRAP');

var {
  StyleSheet,
  Text,
  View
} = React;

var ModifyWorkout = React.createClass({
  getInitialState: function() {
    return {
      isModifyingWorkout: modifyWorkoutStore.getIsModifyingWorkout(),
      workout: modifyWorkoutStore.getWorkout()
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
  render: function(){
    var workout = this.state.workout;
    var instructions;

    switch(workout.type) {
      /* jshint ignore:start */
      case 'AMRAP':
      case 'Custom':
      case 'Lift':
      case 'Progressions':
      case 'Timed Circuit':
        instructions = <EditAMRAP workout={workout}/>;
        break;
      default:
        instructions = <Text>{workout.instructions}</Text>;
        console.log('in modifyWorkout, unknown workout type');
      /* jshint ignore:end */
    }

    return (
      <View>
        <Text>Filler</Text>
        <Text>Filler</Text>
        <Text>Filler</Text>
        <Text>Filler</Text>
        {instructions}
      </View>
    );
  }
});

module.exports = ModifyWorkout;
