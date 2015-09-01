'use strict';

var React = require('react-native');
var doWorkoutStore = require('../../stores/doWorkoutStore');
var doWorkoutActions = require('../../actions/doWorkoutActions');
// var createWorkoutActions = require('../../actions/createWorkoutActions');

//Load components
var DoWorkoutHeader = require('./doWorkoutHeader.js');
var DoWorkoutInstructions = require('./doWorkoutInstructions.js');
// var CreateWorkout = require('../createWorkout/createWorkout.js');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
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
      isSelectedWorkout: doWorkoutStore.getIsSelectedWorkout(),
      workout: doWorkoutStore.getWorkout()
    });
  },
  _handleBackButtonPress: function() {
    this.props.navigator.pop();
  },
  _handleModifyWorkoutPress: function(workout) {
    createWorkoutActions.modifyWorkout(workout);

    this.props.navigator.push({
      title: 'Modify Workout',
      component: CreateWorkout
    });
  },
  render: function(){
    var workout = this.state.workout;

    return (
      <View>
        <View>
          <Text>Fill</Text>
          <Text>Fill</Text>
          <Text>Fill</Text>
          <Text>Fill</Text>
        </View>
        <DoWorkoutHeader workout={workout} navigator={this.props.navigator}/>
        <DoWorkoutInstructions workout={workout}/>
        <Text>Start</Text>
      </View>
    );
  }
});

module.exports = DoWorkout;
