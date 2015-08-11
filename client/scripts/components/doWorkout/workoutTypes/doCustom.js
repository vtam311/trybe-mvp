'use strict';

var React = require('react-native');
var doWorkoutActions = require('../../../actions/doWorkoutActions');

var {
  StyleSheet,
  Text,
  View,
} = React;

var CustomWorkout = React.createClass({

  render: function(){
    var instructions = this.props.workout.instructions;

    return (
      /* jshint ignore:start */
      <View>
        <Text>{instructions}</Text>
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = CustomWorkout;
