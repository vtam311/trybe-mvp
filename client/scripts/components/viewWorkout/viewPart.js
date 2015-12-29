/*
* @Author: vincetam
* @Date:   2015-12-28 16:01:39
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-29 15:30:03
*/

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
} = React;

import {Section, CustomCell} from 'react-native-tableview-simple';

//Load custom components
var PartHeader = require('./partHeader');
var ViewInstructions = require('./viewInstructions');
var EditExerciseCell = require('../editWorkout/editPart/editExerciseCell');


var DoPart = React.createClass({
  render: function(){
    var part = this.props.part;
    var partIdx = this.props.partIdx;

    /* jshint ignore:start */
    var exercises = part.exercises.map((exercise, index) =>
      <EditExerciseCell
        exercise={exercise}
        partIdx={partIdx}
        exIdx={index}
        openExerciseModal={this.props.openExerciseModal}
        key={index} />
    );
    /* jshint ignore:end */

    return (
      /* jshint ignore:start */
      <View style={styles.container}>
        <View style={styles.header}>
          <PartHeader part={part} partIdx={partIdx} />
        </View>

        <View style={styles.body}>
          <ViewInstructions
            instructions={part.instructions}
            partIdx={partIdx} />
          {exercises}
        </View>

        <View style={styles.footer}>
        </View>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#c8c7cc',
    paddingLeft: 15,
    paddingRight: 15
  },
  header: {
    height: 44,
  },

  body: {
  },
  footer: {

  }
});

module.exports = DoPart;