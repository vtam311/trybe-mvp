/*
* @Author: vincetam
* @Date:   2016-01-10 21:18:58
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-11 20:13:52
*/

//test

'use strict';

var React = require('react-native');

var ViewExercise = require('./viewExercise');
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
    marginTop: 0,
  },
  partNameText: {
    fontFamily: 'Avenir Next',
    fontSize: 15,
    fontStyle: 'italic',
    color: '#4A4A4A',
    marginBottom: 8,
  },
  instructionText: {
    fontFamily: 'Helvetica',
    fontSize: 15,
    marginBottom: 10,
    color: '#2D2D2D'
  },
  notesText: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 10
  },
});

module.exports = Part;