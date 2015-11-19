/*
* @Author: vincetam
* @Date:   2015-10-23 15:04:43
* @Last Modified by:   vincetam
* @Last Modified time: 2015-11-18 20:21:10
*/

'use strict';

var React = require('react-native');
var createWorkoutActions = require('../../actions/createWorkoutActions');
var createWorkoutStore = require('../../stores/createWorkoutStore');

var {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity
} = React;

//Load components
import {TableView, Section, CustomCell} from 'react-native-tableview-simple';
var DateCell = require('./dateCell');
var CreateInstructionsCell = require('./createInstructionsCell');
var CreateExerciseCell = require('./createExerciseCell');
var AddExerciseCell = require('./addExerciseCell');

var CreateWorkout = React.createClass({
  getInitialState: function() {
    return {
      // isCreatingOrModifying: createWorkoutStore.getIsCreatingOrModifying(),
      workout: createWorkoutStore.getWorkout(),
    };
  },
  componentDidMount: function() {
    createWorkoutStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    createWorkoutStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      workout: createWorkoutStore.getWorkout(),
    });
  },

  render: function(){
    var TEMP_PART_INDEX = 0;
    var TEMP_EXERCISE = {
      name: 'Pull Ups',
      reps: 5,
      load: {units: 'lb', val: 45},
      time: null,
      distance: {units: null, val: null},
      url: null
    };

    var createdExercisesOfPart1 = this.state.workout.parts[0].exercises
    .map((exercise, index) =>
        <CreateExerciseCell
          exercise={exercise}
          openExerciseModal={this.props.openExerciseModal}
          key={index} />
    );


    return (
      /* jshint ignore:start */
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.stage}>
          <TableView>
            <Section>
              <DateCell />
            </Section>
            <Section header="PART 1">
              <CreateInstructionsCell/>
              {createdExercisesOfPart1}
              <AddExerciseCell partIdx={TEMP_PART_INDEX} openExerciseModal={this.props.openExerciseModal} />
            </Section>
            <View style={{flex: 1, flexDirection: 'row', marginLeft: 10}}>
              <Image
                style={{height: 14, width: 14, marginTop: 4, marginRight: 8}}
                source={require('image!addButton')} />
              <Text style={{flex: 1, fontSize: 16, color: '#9B9B9B', fontFamily: 'Avenir Next'}}>Add Part</Text>
            </View>
          </TableView>
        </ScrollView>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFF4',
  },
  stage: {
    backgroundColor: '#EFEFF4',
    paddingTop: 20,
    paddingBottom: 20,
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

module.exports = CreateWorkout;
