/*
* @Author: VINCE
* @Date:   2015-09-26 12:46:46
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-10 17:43:55
*/

'use strict';

var React = require('react-native');
var renderResultsTime = require('../renderResultsTime');

var {
  StyleSheet,
  Text,
  View,
} = React;

var viewExercise = React.createClass({
  createResultText: function(){
    var result;

    return result;
  },
  render: function(){
    var workout = this.props.workout;

    return (
      /* jshint ignore:start */
      <View style={styles.workoutResult}>
        <Text style={styles.resultText}>{renderResultsTime(workout.finalResult.value)}</Text>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  workoutResult: {
    marginTop: 20,
    marginBottom: 10
  },
  resultText: {
    fontFamily: 'Helvetica',
    color: 'grey',
    fontSize: 14,
    fontWeight: '600'
  }
});

module.exports = viewExercise;