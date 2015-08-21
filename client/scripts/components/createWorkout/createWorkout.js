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
    //If user is modifying workout, load that workout
    if(this.props.workout) {
      return {
        isModifyingWorkout: true,
        workout: this.props.workout
      };
    } else {
    //Else load a blank workout
      return {
        isModifyingWorkout: false,
        workout: createWorkoutStore.getWorkout()
      };
    }
  },
  componentDidMount: function() {
    createWorkoutStore.addChangeListener(this._onChange);

    //Load default blank workout if user is not modifying
    if(!this.state.isModifyingWorkout) createWorkoutActions.getWorkout();
  },
  componentWillUnmount: function() {
    createWorkoutStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      workout: createWorkoutStore.getWorkout()
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
        <Text>Type: {this.state.workout.type}</Text>
        <Text>Type: {this.state.workout.type}</Text>
        <Text>Type: {this.state.workout.type}</Text>
        <Text>Type: {this.state.workout.type}</Text>
        {instructions}
      </View>
    );
  }
});

module.exports = CreateWorkout;
