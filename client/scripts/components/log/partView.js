/*
* @Author: vincetam
* @Date:   2016-02-10 11:58:27
* @Last Modified by:   VINCE
* @Last Modified time: 2016-02-10 14:55:31
*/

'use strict';

var React = require('react-native');

var ExerciseDescription = require('../../common/workoutViews/exerciseDescrText');
var ViewResults = require('../../common/workoutViews/viewResults');

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
            <Text numberOfLines={1} style={styles.notesText}>{part.notes}</Text>
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
    paddingRight: 20
  },
  partNameText: {
    fontSize: 15,
    color: '#58504D',
    marginBottom: 8,
  },
  instructionText: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#8D867E',
    marginBottom: 6,
  },
  exerciseContainer: {
    paddingTop: 3,
    paddingBottom: 3
  },
  resultsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  notesContainer: {
    flex: 1,
  },
  notesText: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#8D867E',
    marginBottom: 10
  },
});

module.exports = Part;