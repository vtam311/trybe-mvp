'use strict';

var React = require('react-native');

var {
  StyleSheet,
  NavigatorIOS,
  Text,
  View,
} = React;

var Workout = React.createClass({
  render: function() {
    return (
      <View>
        <Text>Workout Page</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

module.exports = Workout;
