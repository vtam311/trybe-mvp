'use strict';

var React = require('react-native');
var doWorkoutActions = require('../../actions/doWorkoutActions');

var {
  StyleSheet,
  Text,
  View,
} = React;

var ProgressionExercise = React.createClass({

  render: function(){
    var name = this.props.exercise.name;
    var reps = this.props.exercise.reps;

    return (
      /* jshint ignore:start */
      <View>
        <Text>{reps} {name}</Text>
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = ProgressionExercise;
