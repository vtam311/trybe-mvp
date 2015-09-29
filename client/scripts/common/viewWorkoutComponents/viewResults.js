/*
* @Author: VINCE
* @Date:   2015-09-26 12:46:46
* @Last Modified by:   VINCE
* @Last Modified time: 2015-09-29 10:43:57
*/

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
} = React;

var viewExercise = React.createClass({

  render: function(){
    var workout = this.props.workout;

    return (
      /* jshint ignore:start */
      <View style={styles.workoutResult}>
        <Text style={styles.resultText}>Completed in 14min</Text>
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
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Helvetica',
    color: 'grey'
  }
});

module.exports = viewExercise;