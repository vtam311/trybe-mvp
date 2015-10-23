/*
* @Author: VINCE
* @Date:   2015-09-25 11:00:09
* @Last Modified by:   VINCE
* @Last Modified time: 2015-10-09 14:02:26
*/

'use strict';

var React = require('react-native');
var doWorkoutActions = require('../../actions/doWorkoutActions');

//Load components
var DoWorkout = require('../doWorkout/doWorkout');

var {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} = React;

var StartWorkoutButton = React.createClass({
  _handleStartButtonPress: function(workout) {
    doWorkoutActions.setWorkout(workout);
    this.props.navigator.push({
      title: 'Do Workout',
      component: DoWorkout
    });
  },
  render: function(){
    var workout = this.props.workout;

    return (
      /* jshint ignore:start */
      <TouchableHighlight
        onPress={this._handleStartButtonPress.bind(this, workout)}
        activeOpacity={50}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </View>
      </TouchableHighlight>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // width: 100
  },
  buttonText: {
    fontSize: 16,
    color: 'white'
  }
});

module.exports = StartWorkoutButton;
