/*
* @Author: vincetam
* @Date:   2016-02-10 14:58:52
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-10 15:51:33
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

//Scene for showing a full workout's part, along with ability to retry
var DayScene = React.createClass({
  getInitialState: function(){
    return {
      part: this.props.route.part
    }
  },
  render: function(){
    console.log('this.props.route.name', this.props.route.name);
    var part = this.state.part;
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
      <View style={styles.container}>
        <View style={styles.partContent}>
          <Text style={styles.partNameText}>{part.name}</Text>
          <Text style={styles.instructionText}>{part.instructions}</Text>
          {exercises}
          <View style={styles.resultsContainer}>
            <ViewResults result={part.result} />
          </View>
          {part.notes ?
            <View style={styles.notesContainer}>
              <Text style={styles.notesText}>{part.notes}</Text>
            </View> :
            null
          }
        </View>
        <View style={styles.controlsContent}>
          <Text>Redo</Text>
        </View>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(141, 134, 126, .2)',
    flexDirection: 'column',
  },
  partContent: {
    backgroundColor: '#fff',
    padding: 10
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
  controlsContent: {
    backgroundColor: '#fff'
  }
});

module.exports = DayScene;