'use strict';

var React = require('react-native');

//Load components
var ViewWorkout = require('../viewWorkout/viewWorkout');

var {
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} = React;

var Workout = React.createClass({
  render: function() {
    return (
      /* jshint ignore:start */
      <NavigatorIOS
        style={styles.wrapper}
        initialRoute={{
          title: 'Workout',
          component: ViewWorkout
        }}/>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
});

module.exports = Workout;
