/*
* @Author: vincetam
* @Date:   2015-10-23 15:04:43
* @Last Modified by:   VINCE
* @Last Modified time: 2015-12-11 16:38:28
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
var EditInstructionsCell = require('./editInstructionsCell');
var EditExerciseCell = require('./editExerciseCell');
var AddExerciseCell = require('./addExerciseCell');

var CreateWorkout = React.createClass({
  getInitialState: function() {
    return {
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

    var exercisesOfPart1 = this.state.workout.parts[TEMP_PART_INDEX].exercises
    .map((exercise, index) =>
      /* jshint ignore:start */
      <View style={styles.customCellBackground} key={index}>
        <EditExerciseCell
          exercise={exercise}
          partIdx={TEMP_PART_INDEX}
          exIdx={index}
          openExerciseModal={this.props.openExerciseModal} />
        <View style={styles.cellSeparatorBackground}>
          <View style={styles.cellSeparatorLine}></View>
        </View>
      </View>
      /* jshint ignore:end */
    );

    return (
      /* jshint ignore:start */
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.stage}>
          <TableView>
            <Section>
              <DateCell />
            </Section>
            <Section header="PART 1" hideSeparator={true}>
              <EditInstructionsCell
                instructions={this.state.workout.parts[TEMP_PART_INDEX].instructions}
                partIdx={TEMP_PART_INDEX} />
              {exercisesOfPart1}
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
  cellSeparatorBackground: {
    backgroundColor: '#fff',
  },
  cellSeparatorLine: {
    marginLeft: 15,
    height: 0.5,
    backgroundColor: '#c8c7cc',
  }
});

module.exports = CreateWorkout;
