/*
* @Author: VINCE
* @Date:   2015-09-26 12:46:46
* @Last Modified by:   VINCE
* @Last Modified time: 2015-10-06 11:34:19
*/

'use strict';

var React = require('react-native');
var renderTimeHelper = require('../renderTimeHelper');

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
    console.log('in viewResults, workout:', workout);

    return (
      /* jshint ignore:start */
      <View style={styles.workoutResult}>
        <Text style={styles.resultText}>{renderTimeHelper(workout.finalResult.value)}</Text>
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