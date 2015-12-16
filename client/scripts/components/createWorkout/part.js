/*
* @Author: vincetam
* @Date:   2015-12-13 16:46:29
* @Last Modified by:   VINCE
* @Last Modified time: 2015-12-15 15:40:09
*/

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
} = React;

import {Section, CustomCell} from 'react-native-tableview-simple';
var EditInstructionsCell = require('./partCells/editInstructionsCell');
var EditExerciseCell = require('./partCells/editExerciseCell');
var AddExerciseCell = require('./partCells/addExerciseCell');
var ResultsCell = require('./partCells/resultsCell');

var Part = React.createClass({
  renderPartLabel: function(){
    return 'PART ' + (this.props.partIdx + 1);
  },

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
      <View>
        <Section header={this.renderPartLabel()} hideSeparator={true}>
          <EditInstructionsCell
            instructions={this.props.part.instructions}
            partIdx={this.props.partIdx}
            openPartModal={this.props.openPartModal} />
          {partExercises}
          <AddExerciseCell partIdx={this.props.partIdx} openExerciseModal={this.props.openExerciseModal} />
        </Section>

        <Section hideSeparator={true}>
          <ResultsCell
            isRecording={this.props.part.result.isRecording}
            resultType={this.props.part.result.type}
            partIdx={this.props.partIdx} />
        </Section>
      </View>
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
