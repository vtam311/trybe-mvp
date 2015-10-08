'use strict';

var React = require('react-native');
var viewWorkoutStore = require('../../stores/viewWorkoutStore');
var viewWorkoutActions = require('../../actions/viewWorkoutActions');

//Load components
var ViewWorkoutToolbar = require('./viewWorkoutToolbar');
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
  render: function(){
    var workout = this.state.workout;

    //Render workout once it's loaded
    if(workout.parts) {
      return (
        <View style={styles.container}>
          <View style={styles.navBarFill}></View>
          <View style={styles.trybeDay}>
            <Text>{workout.trybe}</Text>
            <Text>Day {workout.day}</Text>
          </View>
          <View style={styles.workoutAndToolbar}>
            <View style={styles.workout}>
              <ViewWorkoutBody workout={workout}/>
            </View>
            <View style={styles.toolbar}>
              <ViewWorkoutToolbar workout={workout} navigator={this.props.navigator}/>
            </View>
          </View>
          <View style={styles.startButton}>
            <StartWorkoutButton workout={workout} navigator={this.props.navigator}/>
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <Text>You do not have a workout yet. Join a trybe to get one.</Text>
        </View>
      );
    }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 100,
    flexDirection: 'column',
  },
  navBarFill: {
    flex: 10
  },
  trybeDay: {
    alignItems: 'center',
    marginTop: 5,
  },
  workoutAndToolbar: {
    flex: 80,
    marginLeft: 10,
    marginRight: 10
  },
  workout: {
    marginTop: 20
  },
  toolbar: {
    marginTop: 20
  },
  startButton: {
    flex: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  }
});

module.exports = ViewWorkout;
