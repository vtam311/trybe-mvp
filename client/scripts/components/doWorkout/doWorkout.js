'use strict';

var React = require('react-native');
var doWorkoutActions = require('../../actions/doWorkoutActions');

//Load components
var DoWorkoutPreview = require('./doWorkoutPreview.js');
var DoWorkoutDetails = require('./doWorkoutDetails.js');

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
        <DoWorkoutPreview workout={this.state.workout}/>
      </View>
    );
        // <DoWorkoutDetails workout={this.state.workout}/>
  }
});

module.exports = DoWorkout;

