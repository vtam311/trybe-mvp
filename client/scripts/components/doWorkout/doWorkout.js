'use strict';

var React = require('react-native');
var doWorkoutStore = require('../../stores/doWorkoutStore');
var doWorkoutActions = require('../../actions/doWorkoutActions');

//Load components
var DoWorkoutHeader = require('./doWorkoutHeader.js');
var DoWorkoutInstructions = require('./doWorkoutInstructions.js');

var {
  StyleSheet,
  Text,
  View
} = React;

var DoWorkout = React.createClass({
  getInitialState: function(){
    return {
      isSelectedWorkout: doWorkoutStore.getIsSelectedWorkout(),
      workout: doWorkoutStore.getWorkout()
    };
  },
  componentDidMount: function(){
    doWorkoutStore.addChangeListener(this._onChange);

    //Load trybe's daily workout if user has not selected one
    if(!this.state.isSelectedWorkout) doWorkoutActions.getWorkout();
  },
  componentWillUnmount: function(){
    doWorkoutStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      workout: doWorkoutStore.getWorkout()
    });
  },
  render: function(){
    console.log('doWorkout view triggered!');
    return (
      <View>
        <Text>Workout</Text>
        <DoWorkoutHeader workout={this.state.workout}/>
        <DoWorkoutInstructions workout={this.state.workout}/>
        <Text>Start</Text>
      </View>
    );
  }
});

module.exports = DoWorkout;
