/*
* @Author: vincetam
* @Date:   2016-01-10 21:18:58
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-16 09:06:19
*/

'use strict';

var React = require('react-native');

var ExNameAndParams = require('./exNameAndParams');
var ViewResults = require('./viewResults');

var {
  StyleSheet,
  Text,
  View,
} = React;

var Part = React.createClass({
  render: function(){
    var part = this.props.part;

    var exercises = part.exercises.map((exercise) =>
      /* jshint ignore:start */
       <View style={styles.exerciseContainer}>
        <ExNameAndParams
          exercise={exercise} />
       </View>
      /* jshint ignore:end */
    );

    return (
      /* jshint ignore:start */
      <View style={styles.partContainer}>
        <Text style={styles.partNameText}>{part.name}</Text>
        <Text style={styles.instructionText}>{part.instructions}</Text>
        {exercises}
        <View style={styles.resultsContainer}>
          <ViewResults result={part.result} />
        </View>
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
  exerciseContainer: {
    width: 315,
    borderBottomWidth: .5,
    borderColor: 'rgba(88, 80, 77, .5)',
    paddingTop: 7,
    paddingBottom: 7
  },
  resultsContainer: {
    width: 315,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 7,
    paddingBottom: 7
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