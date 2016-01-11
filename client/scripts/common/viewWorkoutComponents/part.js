/*
* @Author: vincetam
* @Date:   2016-01-10 21:18:58
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-10 22:41:13
*/

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
        <Text style={styles.partNameText}>{part.name.toUpperCase()}</Text>
        <Text style={styles.instructionText}>{part.instructions}</Text>
        {exercises}
        <ViewResults part={part}/>
        <Text style={styles.notesText}>Notes Test</Text>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  partContainer: {
    marginTop: 5,
  },
  partNameText: {
    fontFamily: 'Avenir Next',
    fontSize: 15,
    fontStyle: 'italic',
    color: '#4A4A4A',
    marginBottom: 8,
  },
  instructionText: {
    fontFamily: 'Avenir Next',
    fontSize: 15,
    marginBottom: 15,
    color: '#000000'
  },
});

module.exports = Part;