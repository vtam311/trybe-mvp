'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View
} = React;

var CreateWorkout = React.createClass({
  render: function(){
    return (
      <View>
        <Text>Type: {this.props.workout.type}</Text>
      </View>
    );
  }
});

module.exports = CreateWorkout;
