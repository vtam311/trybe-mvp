/*
* @Author: vincetam
* @Date:   2015-12-13 16:46:29
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-12 12:56:29
*/

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
} = React;

import {Section, CustomCell} from 'react-native-tableview-simple';
var EditInstructionsCell = require('./editInstructionsCell');
var EditExerciseCell = require('./editExerciseCell');
var AddExerciseCell = require('./addExerciseCell');
var ResultsCell = require('./resultsCell');

var Part = React.createClass({
  render: function(){
    var exercises = this.props.part.exercises
    .map((exercise, index) =>
      /* jshint ignore:start */
      <View key={index}>
        <EditExerciseCell
          exercise={exercise}
          partIdx={this.props.partIdx}
          exIdx={index} />
        <View style={styles.cellSeparatorBackground}>
          <View style={styles.cellSeparatorLine}></View>
        </View>
      </View>
      /* jshint ignore:end */
    );

    return (
      /* jshint ignore:start */
      <View>
        <Section hideSeparator={true}>
          <EditInstructionsCell
            instructions={this.props.part.instructions}
            partIdx={this.props.partIdx}
            partName={this.props.part.name}
            scrollToComponent={this.props.scrollToComponent} />
          {exercises}
          <AddExerciseCell partIdx={this.props.partIdx} />
        </Section>

        <Section hideSeparator={true}>
          <ResultsCell
            isRecording={this.props.part.result.isRecording}
            resultType={this.props.part.result.type}
            partIdx={this.props.partIdx}
            scrollToComponent={this.props.scrollToComponent} />
        </Section>
      </View>
      /* jshint ignore:end */
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
