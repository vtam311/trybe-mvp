/*
* @Author: vincetam
* @Date:   2016-01-10 21:18:58
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-10 21:59:04
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
        exercise={exercise}
        customFontSize={14} />
    );

    return (
      /* jshint ignore:start */
      <View style={styles.partContainer}>
        <Text style={styles.partNameText}>{part.name}</Text>
        <Text style={styles.instructionText}>{part.instructions}</Text>
        {exercises}
        <ViewResults part={part}/>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  partContainer: {

  },
  partNameText: {
    fontFamily: 'Avenir Next',
    fontSize: 15,
    color: '#929292',
  },
  instructionText: {
    fontFamily: 'Avenir Next',
    fontSize: 15,
    marginBottom: 10,
    color: '#000000'
  },
});

module.exports = Part;