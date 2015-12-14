/*
* @Author: vincetam
* @Date:   2015-12-13 16:46:29
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-13 17:16:27
*/

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  Image
} = React;

import {Section, CustomCell} from 'react-native-tableview-simple';
var EditInstructionsCell = require('./editInstructionsCell');
var EditExerciseCell = require('./editExerciseCell');
var AddExerciseCell = require('./addExerciseCell');

var Part = React.createClass({
  render: function(){

    var partExercises = this.props.part.exercises
    .map((exercise, index) =>
      /* jshint ignore:start */
      <View key={index}>
        <EditExerciseCell
          exercise={exercise}
          partIdx={this.props.partIdx}
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
      <Section header="PART 1" hideSeparator={true}>
        <EditInstructionsCell
          instructions={this.props.part.instructions}
          partIdx={this.props.partIdx} />
        {partExercises}
        <AddExerciseCell partIdx={this.props.partIdx} openExerciseModal={this.props.openExerciseModal} />
      </Section>
      /* jshint ignore:start */
    );
  }
});

var styles = StyleSheet.create({
  cellSeparatorBackground: {
    backgroundColor: '#fff',
  },
  cellSeparatorLine: {
    marginLeft: 15,
    height: 0.5,
    backgroundColor: '#c8c7cc',
  }
});

module.exports = Part;
