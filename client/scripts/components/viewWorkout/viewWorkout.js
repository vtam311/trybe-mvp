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
    //Why undefined?
    console.log('in viewWorkout, this.props.workoutNav', this.props.workoutNav);

    //Render workout once it's loaded
    if(workout.parts) {
      return (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.trybeDay}>
              <Text style={styles.trybeNameText}>{workout.trybe}</Text>
              <Text>Day {workout.day}</Text>
            </View>
            <View style={styles.workoutAndToolbar}>
              <View style={styles.workoutToolbarContainer}>
                <View style={styles.workout}>
                  <View style={styles.separatorLine}></View>
                  <ViewWorkoutBody workout={workout}/>
                  <View style={styles.separatorLine}></View>
                </View>
                <View style={styles.toolbar}>
                  <ViewWorkoutToolbar workout={workout} handleNavRequest={this.props.handleNavRequest}/>
                </View>
              </View>
            </View>
            <View style={styles.startButton}>
              <StartWorkoutButton workout={workout} navigator={this.props.navigator}/>
            </View>
          </ScrollView>
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
    flex: 1,
    // flexDirection: 'column',
    // marginBottom: 49, //height of tabBar
    backgroundColor: 'red',
  },
  scrollViewContainer: {
    flex: 1,
    backgroundColor: 'orange',
    // flexDirection: 'column',
    // alignItems: 'stretch',
    // justifyContent: 'space-between'
  },
  trybeDay: {
    flex: .1,
    alignItems: 'center',
    // marginTop: 10,
    backgroundColor: 'yellow'
  },
  trybeNameText: {
    marginTop: 10
  },
  workoutAndToolbar: {
    flex: .8,
    backgroundColor: 'green',
  },
  workoutToolbarContainer: {
    marginLeft: 10,
    marginRight: 10,
  },
  workout: {
    // flex: .5,
    marginTop: 15
  },
  separatorLine: {
    marginTop: 10,
    marginBottom: 10,
    height: .5,
    borderBottomWidth: .5,
    borderBottomColor: '#d9d9d9',
  },
  toolbar: {
    // flex: .5
  },
  startButton: {
    flex: .1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'grey',
  }
});

module.exports = ViewWorkout;
