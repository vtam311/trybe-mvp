/*
* @Author: vincetam
* @Date:   2016-01-10 21:18:58
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-09 16:03:47
*/

'use strict';

var React = require('react-native');

var ExerciseDescription = require('./exerciseDescrText');
var ViewResults = require('./viewResults');

var {
  StyleSheet,
  Text,
  View,
} = React;

var Part = React.createClass({
  render: function(){
    var part = this.props.part;
    var exercises = part.exercises.map((exercise, index) =>
      /* jshint ignore:start */
       <View style={styles.exerciseContainer} key={index}>
        <ExerciseDescription
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
          <View style={styles.notesContainer}>
            <Text numberOfLines={3} style={styles.notesText}>{part.notes}</Text>
          </View> :
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
    alignItems: 'center',
  },
  partNameText: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    fontWeight: '500',
    color: '#8D867E',
    marginBottom: 6,
    marginTop: -5,
  },
  instructionText: {
    fontFamily: 'Avenir Next',
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'italic',
    color: '#8D867E',
    marginBottom: 6,
  },
  exerciseContainer: {
    width: 280,
    paddingTop: 5,
    paddingBottom: 5
  },
  resultsContainer: {
    width: 280,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // paddingTop: 5,
    // paddingBottom: 2
  },
  notesContainer: {
    width: 315,
    flex: 1,
  },
  notesText: {
    fontFamily: 'Avenir Next',
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'italic',
    color: '#8D867E',
    marginBottom: 10
  },
});

module.exports = Part;