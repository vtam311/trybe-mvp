/*
* @Author: vincetam
* @Date:   2015-12-29 14:32:54
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-29 15:01:23
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
  getInitialState: function() {
    return {
      instructions: this.props.instructions,
    };
  },
  setInstructions: function(instructions) {
    editWorkoutActions.setInstructions(instructions, this.props.partIdx);

    this.setState({
      instructions: instructions
    });
  },


  render: function(){
    return (
      /* jshint ignore:start */
      <TextInput
        value={this.state.instructions}
        onChangeText={(text) => this.setInstructions(text)}
        autoCapitalize='words'
        style={styles.instructionsTextInput} />
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  instructionsTextInput: {
    height: 40,
    fontFamily: 'Avenir Next',
    fontSize: 18
  },
});

module.exports = ViewInstructions;