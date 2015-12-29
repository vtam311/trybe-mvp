'use strict';

var React = require('react-native');
var viewWorkoutStore = require('../../stores/viewWorkoutStore');
var viewWorkoutActions = require('../../actions/viewWorkoutActions');
var editWorkoutActions = require('../../actions/editWorkoutActions');
var editWorkoutStore = require('../../stores/editWorkoutStore');

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
  //viewWorkout initializes workout from editWorkoutStore.
  //Any changes are reflected in both views.

  //On going to editWorkout scene, the workout gets reset to empty template
  getInitialState: function(){
    return {
      workout: editWorkoutStore.getWorkout(),
      visibleHeight: Dimensions.get('window').height
    };
  },
  componentDidMount: function(){
    editWorkoutStore.addChangeListener(this._onChange);
    editWorkoutActions.getDailyWorkout();
  },
  componentWillUnmount: function(){
    editWorkoutStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      workout: editWorkoutStore.getWorkout()
    });
  },
  render: function(){
    //Render workout once it's loaded
    var workout = this.state.workout;
    if(workout.parts) {
      console.log('viewWorkout render workout is', workout);
      var parts = this.state.workout.parts.map((part, index) =>
        /* jshint ignore:start */
        <DoPart
          part={part}
          partIdx={index}
          key={index}
          openExerciseModal={this.props.openExerciseModal} />
        /* jshint ignore:end */
      );

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
