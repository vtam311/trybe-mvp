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
      isSelectedWorkout: this.props.store.getIsSelectedWorkout(),
      workout: this.props.store.getWorkout()
    };
  },
  componentDidMount: function(){
    this.props.store.addChangeListener(this._onChange);

    //Only load trybe's default workout if user has not selected one already
    if(!this.state.isSelectedWorkout) doWorkoutActions.getWorkout();
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

