/*
* @Author: vincetam
* @Date:   2015-12-29 14:32:54
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-29 17:17:05
*/

'use strict';

var React = require('react-native');
var editWorkoutActions = require('../../actions/editWorkoutActions');

var {
  StyleSheet,
  View,
  TextInput,
} = React;

var ViewInstructions = React.createClass({
  setInstructions: function(instructions) {
    editWorkoutActions.setInstructions(instructions, this.props.partIdx);
  },

  render: function(){
    return (
      /* jshint ignore:start */
      <View style={styles.instructionsContainer}>
        <TextInput
          value={this.props.instructions}
          placeholder='Instructions'
          onChangeText={(text) => this.setInstructions(text)}
          autoCapitalize='words'
          style={styles.instructionsTextInput} />
        <View style={styles.cellSeparatorBackground}>
          <View style={styles.cellSeparatorLine}></View>
        </View>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  instructionsContainer: {
    marginTop: 10,
    marginLeft: 10,
  },
  instructionsTextInput: {
    height: 40,
    fontFamily: 'Avenir Next',
    fontSize: 16
  },
  cellSeparatorBackground: {
    backgroundColor: '#fff',
  },
  cellSeparatorLine: {
    height: 0.5,
    backgroundColor: '#c8c7cc',
  }
});

module.exports = ViewInstructions;
