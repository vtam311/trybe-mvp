'use strict';

var React = require('react-native');
var createWorkoutStore = require('../../stores/createWorkoutStore');
var createWorkoutActions = require('../../actions/createWorkoutActions');

//Load components
var EditAMRAP = require('./workoutTypes/editAMRAP');

var {
  StyleSheet,
  Text,
  View
} = React;

var CreateWorkout = React.createClass({
  getInitialState: function() {
    return {
      isModifyingWorkout: createWorkoutStore.getIsModifyingWorkout(),
      workout: createWorkoutStore.getWorkout()
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
      workout: createWorkoutStore.getWorkout(),
      //To do: move to separate editTime component
      isEditingTime: createWorkoutStore.getIsEditingTime(),
    });
  },
  render: function(){
    var workout = this.state.workout;
    var instructions;

    switch(workout.type) {
      /* jshint ignore:start */
      case 'AMRAP':
        instructions = <EditAMRAP workout={workout}/>;
        break;
      default:
        instructions = <Text>Add Custom Component</Text>;
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

module.exports = CreateWorkout;
