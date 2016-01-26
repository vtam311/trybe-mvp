/*
* @Author: vincetam
* @Date:   2016-01-10 21:18:58
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-26 13:58:38
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
    console.log('workoutView part part.exercises', part.exercises);

    var exercises = part.exercises.map((exercise, index) =>
      /* jshint ignore:start */
       <View style={styles.exerciseContainer} key={index}>
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
    fontStyle: 'italic',
    color: '#8D867E',
    marginBottom: 8,
  },
  instructionText: {
    fontFamily: 'Avenir Next',
    fontSize: 15,
    fontWeight: '500',
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