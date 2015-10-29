/*
* @Author: vincetam
* @Date:   2015-10-23 15:04:43
* @Last Modified by:   VINCE
* @Last Modified time: 2015-10-29 15:41:25
*/

'use strict';

var React = require('react-native');
var createWorkoutStore = require('../../stores/createWorkoutStore');

var {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  Modal
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
    var TEMP_EXERCISE = {
      name: 'Pull Ups',
      reps: 5,
      load: {units: 'lb', val: 45},
      time: null,
      distance: {units: null, val: null},
      url: null
    };

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
              <CreateExerciseCell exercise={TEMP_EXERCISE}/>
              <AddExerciseCell />
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
        // <Modal visible={this.state.modalVisible}>
        //   <Text>Modal</Text>
        // </Modal>
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
  }
});

module.exports = CreateWorkout;
