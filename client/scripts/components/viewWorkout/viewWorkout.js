'use strict';

var React = require('react-native');
var Subscribable = require('Subscribable'); //used for addListenerOn

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
  mixins: [Subscribable.Mixin],

  getInitialState: function(){
    return {
      //shows default daily workout unless a custom one is selected
      isDefaultOrCustom: editWorkoutStore.getDefaultOrCustom(),
      //initially get workout template so component can load
      workout: editWorkoutStore.getWorkout(),
      partsAreLogged: null, //will load once workout is retrieved
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
    this.addListenerOn(this.props.events, 'setNewWorkout', this.initPartsAreLogged);
    console.log('componentDidMount calling initPartsAreLogged');
    this.initPartsAreLogged();
  },
  componentWillUnmount: function(){
    editWorkoutStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    //update start's numParts
    //use numParts to set length of partsAreLogged
    this.setState({
      workout: editWorkoutStore.getWorkout(),
      // partsAreLogged: viewWorkoutStore.getPartsAreLogged()
    });
  },
  initPartsAreLogged: function(){
    //Init partsAreLogged to false, to show that no parts
    //of workout have been logged yet. Called when new workout loads
    viewWorkoutActions.initPartsAreLogged();
    console.log('initPartsAreLogged called');
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
            openLogModal={this.props.openLogModal} />
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
