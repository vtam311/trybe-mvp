'use strict';

var React = require('react-native');
var doWorkoutActions = require('../../actions/doWorkoutActions');

//Load components
var DoWorkoutHeader = require('./doWorkoutHeader.js');
var DoWorkoutInstructions = require('./doWorkoutInstructions.js');

var {
  StyleSheet,
  Text,
  View,
} = React;

var DoWorkout = React.createClass({
  getInitialState: function(){
    return {
      workout: this.props.store.getWorkout()
    };
  },
  componentDidMount: function(){
    this.props.store.addChangeListener(this._onChange);
    doWorkoutActions.getWorkout();
  },
  componentWillUnmount: function(){
    this.props.store.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      workout: this.props.store.getWorkout()
    });
  },
  render: function(){
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

