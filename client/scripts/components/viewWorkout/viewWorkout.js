'use strict';

var React = require('react-native');
var viewWorkoutStore = require('../../stores/viewWorkoutStore');
var viewWorkoutActions = require('../../actions/viewWorkoutActions');

//Load components
import {TableView} from 'react-native-tableview-simple';
var DoPart = require('./doPart');
var ViewWorkoutBody = require('../../common/viewWorkoutComponents/viewWorkoutBody');

var {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Dimensions,
} = React;

var ViewWorkout = React.createClass({
  getInitialState: function(){
    return {
      workout: viewWorkoutStore.getWorkout(),
      visibleHeight: Dimensions.get('window').height
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
    var parts = this.state.workout.parts.map((part, index) =>
      <DoPart part={part} partIdx={index} key={index} />
    );

    //Render workout once it's loaded
    if(workout.parts) {
      return (
        <View style={[styles.container, {height: this.state.visibleHeight}]}>
          <ScrollView
            contentContainerStyle={styles.contentContainerStyle}
            automaticallyAdjustContentInsets={false} >

            <TableView>
              {parts}
            </TableView>

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
    backgroundColor: '#EFEFF4',
  },
  contentContainerStyle: {
    paddingTop: 20,
    paddingBottom: 20,
  },
});

module.exports = ViewWorkout;
