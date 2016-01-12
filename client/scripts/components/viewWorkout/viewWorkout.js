'use strict';

var React = require('react-native');

var viewWorkoutStore = require('../../stores/viewWorkoutStore');
var viewWorkoutActions = require('../../actions/viewWorkoutActions');
var editWorkoutStore = require('../../stores/editWorkoutStore');
var editWorkoutActions = require('../../actions/editWorkoutActions');

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
  getInitialState: function(){
    return {
      //shows default daily workout unless a custom one is selected
      isDefaultOrCustom: editWorkoutStore.getDefaultOrCustom(),
      //initially get workout template so component can load
      workout: editWorkoutStore.getWorkout(),
      partsAreLogged: [], //will load once workout is retrieved
      visibleHeight: Dimensions.get('window').height
    };
  },
  componentWillMount: function(){
    editWorkoutStore.addChangeListener(this._onChange);
    viewWorkoutStore.addChangeListener(this._onChange);

    //Get daily workout, if user did not manually select one
    //viewWorkout gets workout from editWorkoutStore.
    //Any changes are reflected in both views.
    if(this.state.isDefaultOrCustom === 'default'){
      editWorkoutActions.getDailyWorkout();
    }
  },
  componentDidMount: function(){
    viewWorkoutActions.initPartsAreLogged();
  },
  componentWillUnmount: function(){
    editWorkoutStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      workout: editWorkoutStore.getWorkout(),
      partsAreLogged: viewWorkoutStore.getPartsAreLogged()
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
            openLogModal={this.props.openLogModal}
            partIsLogged={this.state.partsAreLogged[index]} />
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
