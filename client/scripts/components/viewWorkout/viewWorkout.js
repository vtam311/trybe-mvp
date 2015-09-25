'use strict';

var React = require('react-native');
var viewWorkoutStore = require('../../stores/viewWorkoutStore');
var viewWorkoutActions = require('../../actions/viewWorkoutActions');

//Load components
var ViewWorkoutHeader = require('./viewWorkoutHeader');
var ViewWorkoutBody = require('../../common/viewWorkoutComponents/viewWorkoutBody');
var StartWorkoutButton = require('./startWorkoutButton');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var ViewWorkout = React.createClass({
  getInitialState: function(){
    return {
      isSelectedWorkout: viewWorkoutStore.getIsSelectedWorkout(),
      workout: viewWorkoutStore.getWorkout()
    };
  },
  componentDidMount: function(){
    viewWorkoutStore.addChangeListener(this._onChange);

    //Load trybe's daily workout if user has not selected one
    if(!this.state.isSelectedWorkout) viewWorkoutActions.getWorkout();
  },
  componentWillUnmount: function(){
    viewWorkoutStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      isSelectedWorkout: viewWorkoutStore.getIsSelectedWorkout(),
      workout: viewWorkoutStore.getWorkout()
    });
  },
  // _handleBackButtonPress: function() {
  //   this.props.navigator.pop();
  // },
  // _handleStartButtonPress: function(workout) {
  //   doWorkoutActions.setWorkout(workout);
  //   this.props.navigator.push({
  //     title: 'Do Workout',
  //     component: DoWorkout
  //   });
  // },
  render: function(){
    var workout = this.state.workout;

    //Load workout once it's loaded
    if(workout.parts) {
      return (
        <View>
          <Text>Fill</Text>
          <Text>Fill</Text>
          <Text>Fill</Text>
          <Text>Fill</Text>
          <ViewWorkoutHeader workout={workout} navigator={this.props.navigator}/>
          <ViewWorkoutBody workout={workout}/>
          <StartWorkoutButton workout={workout} navigator={this.props.navigator}/>
        </View>
      );
    } else {
      return (
        <View>
          <Text>You don't have a workout yet. Join a trybe to get one.</Text>
        </View>
      );
    }
  }
});

module.exports = ViewWorkout;
