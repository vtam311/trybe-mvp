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
  ScrollView,
  TouchableHighlight
} = React;

var ViewWorkout = React.createClass({
  getInitialState: function(){
    return {
      workout: viewWorkoutStore.getWorkout()
    };
  },
  componentDidMount: function(){
    viewWorkoutStore.addChangeListener(this._onChange);
    viewWorkoutActions.getWorkout();
  },
  componentWillUnmount: function(){
    viewWorkoutStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      workout: viewWorkoutStore.getWorkout()
    });
  },
  render: function(){
    var workout = this.state.workout;

    //Render workout once it's loaded
    if(workout.parts) {
      return (
        <View style={styles.container}>
          <ScrollView
            contentContainerStyle={styles.scrollViewContainer}
            automaticallyAdjustContentInsets={false} >

            <Text>{this.state.workout.parts[0].instructions}</Text>

          </ScrollView>
        </View>
      );
    } else {
      return (
        <View>
          <Text>Join a trybe to get workouts.</Text>
        </View>
      );
    }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flex: 1,
  },
});

module.exports = ViewWorkout;
