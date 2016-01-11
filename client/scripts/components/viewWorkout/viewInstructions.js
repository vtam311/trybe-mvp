/*
* @Author: vincetam
* @Date:   2015-12-29 14:32:54
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-11 14:09:52
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
          multiline={true}
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
    fontStyle: 'italic',
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
