'use strict';

var React = require('react-native');
var viewWorkoutStore = require('../../stores/viewWorkoutStore');
var viewWorkoutActions = require('../../actions/viewWorkoutActions');
var editWorkoutActions = require('../../actions/editWorkoutActions');
var editWorkoutStore = require('../../stores/editWorkoutStore');

//Load components
import {TableView} from 'react-native-tableview-simple';
var ViewPart = require('./viewPart');

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

  //On going to editWorkout scene, the workout gets
  //reset to an empty workout template
  getInitialState: function(){
    return {
      //shows daily workout unless a custom one is selected
      //if val is default, we load getDailyWorkout
      //else we don't load it, and set the workout when user selects it
      //from elsewhere.
      showDefaultOrCustom: editWorkoutStore.getDefaultOrCustom(),
      workout: editWorkoutStore.getWorkout(),
      visibleHeight: Dimensions.get('window').height
    };
  },
  componentDidMount: function(){
    editWorkoutStore.addChangeListener(this._onChange);

    if(this.state.showDefaultOrCustom === 'default'){
      editWorkoutActions.getDailyWorkout();
    }
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
    var workout = this.state.workout;
    //Render workout once it's loaded
    if(workout.parts) {
      var parts = this.state.workout.parts.map((part, index) =>
        /* jshint ignore:start */
        <View style={styles.partContainer} key={index}>
          <ViewPart
            part={part}
            partIdx={index}
            openExerciseModal={this.props.openExerciseModal}
            openLogModal={this.props.openLogModal}
            events={this.props.events} />
        </View>
        /* jshint ignore:end */
      );

      return (
        <View style={[styles.container, {height: this.state.visibleHeight}]}>
          <ScrollView
            contentContainerStyle={styles.contentContainerStyle}
            automaticallyAdjustContentInsets={false}
            contentInset={{top: 0, left: 0, bottom: 75, right: 0}} >

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
  partContainer: {
    marginBottom: 30
  },
});

module.exports = ViewWorkout;
