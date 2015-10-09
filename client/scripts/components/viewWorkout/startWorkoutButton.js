/*
* @Author: VINCE
* @Date:   2015-09-25 11:00:09
* @Last Modified by:   vincetam
* @Last Modified time: 2015-10-08 19:55:25
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
        underlayColor={'green'}
        activeOpacity={50}>
        <View style={styles.button}>
          <Text>Start</Text>
        </View>
      </TouchableHighlight>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  button: {
    backgroundColor: 'grey',
    height: 20
  }
});

module.exports = StartWorkoutButton;
