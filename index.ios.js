'use strict';

var React = require('react-native');

//Load components
var Feed = require('./client/scripts/components/feed/feed');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

var Trybe = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Feed/>
      </View>
    );
  }
});

AppRegistry.registerComponent('Trybe', function() {return Trybe});
