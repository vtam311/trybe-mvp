/*
* @Author: VINCE
* @Date:   2015-09-25 11:00:09
* @Last Modified by:   VINCE
* @Last Modified time: 2015-09-25 11:12:26
*/

'use strict';

var React = require('react-native');
var doWorkoutActions = require('../../actions/doWorkoutActions');

//Load components
var DoWorkout = require('../doWorkout/doWorkout');

var {
  StyleSheet,
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
        onPress={this._handleStartButtonPress.bind(this, workout)}>
        <Text>Start</Text>
      </TouchableHighlight>
      /* jshint ignore:end */
    );
  }
});

module.exports = StartWorkoutButton;
