/*
* @Author: vincetam
* @Date:   2015-12-10 14:31:06
* @Last Modified by:   VINCE
* @Last Modified time: 2015-12-15 15:16:39
*/

'use strict';

var React = require('react-native');
var editExerciseActions = require('../../../actions/editExerciseActions');

var React = require('react-native');

var {
  View,
  StyleSheet,
  TextInput
} = React;

var EditExerciseName = React.createClass({
  getInitialState: function() {
    return {
      exerciseName: this.props.exerciseName
    };
  },

  _setExerciseName: function(text){
    editExerciseActions.setExerciseName(text);

    this.setState({
      exerciseName: text
    });
  },

  render: function() {
    return (
      <TextInput
        value={this.state.exerciseName}
        onChangeText={(text) => this._setExerciseName(text)}
        style={styles.exerciseNameTextInput}
        placeholder={'Exercise Name'}
        placeholderTextColor={'#9B9B9B'}/>
    );
  }
});

var styles = StyleSheet.create({
  exerciseNameTextInput: {
    height: 40,
    marginTop: 15,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: 'black'
  }
});

module.exports = EditExerciseName;
