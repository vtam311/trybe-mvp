/*
* @Author: vincetam
* @Date:   2016-01-10 21:18:58
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-15 22:25:19
*/

'use strict';

var React = require('react-native');

var ViewExercise = require('./viewExercise_new');
var ViewResults = require('./viewResults');

var {
  StyleSheet,
  Text,
  View,
} = React;

var Part = React.createClass({
  render: function(){
    var part = this.props.part;

    var exercises = part.exercises.map( (exercise) =>
      <ViewExercise
        exercise={exercise} />
    );

    return (
      /* jshint ignore:start */
      <View style={styles.partContainer}>
        <Text style={styles.partNameText}>{part.name}</Text>
        <Text style={styles.instructionText}>{part.instructions}</Text>
        {exercises}
        <ViewResults result={part.result} />
        {this.props.showNotes === true && part.notes ?
          <Text style={styles.notesText}>{part.notes}</Text> :
          null
        }
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  partContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  partNameText: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    fontStyle: 'italic',
    color: '#8D867E',
    marginBottom: 8,
  },
  instructionText: {
    fontFamily: 'Avenir Next',
    fontSize: 15,
    color: '#8D867E',
    marginBottom: 8,
  },
  notesText: {
    fontFamily: 'Avenir Next',
    fontSize: 15,
    fontStyle: 'italic',
    color: '#8D867E',
    marginBottom: 10
  },
});

module.exports = Part;