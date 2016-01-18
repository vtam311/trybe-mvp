/*
* @Author: vincetam
* @Date:   2016-01-18 10:54:00
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-18 10:56:21
*/

'use strict';

var React = require('react-native');

var {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} = React;

var InstructionsView = React.createClass({
  render: function(){
    return (
      /* jshint ignore:start */
      <TouchableOpacity onPress={() => console.log('instructions clicked')}>
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructionsText}>{this.props.instructions}</Text>
        </View>
      </TouchableOpacity>
      /* jshint ignore:start */
    );
  }
});

var styles = StyleSheet.create({
  instructionsContainer: {
    width: 300,
    marginTop: 30,
    marginBottom: 30,
  },
  instructionsText: {
    fontFamily: 'Avenir Next',
    fontSize: 25,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
  },
});

module.exports = InstructionsView;
