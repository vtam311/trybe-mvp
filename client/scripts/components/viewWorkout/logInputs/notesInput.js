/*
* @Author: vincetam
* @Date:   2016-01-06 19:43:49
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-07 11:09:59
*/

'use strict';

var React = require('react-native');
var logModalActions = require('../../../actions/logModalActions');

var {
  View,
  StyleSheet,
  Text,
  TextInput
} = React;

var NotesInput = React.createClass({
  _setNotes: function(text){
    logModalActions.setNotes(text);
  },
  render: function() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.props.notes}
          placeholder='Workout Notes'
          onChangeText={(text) => this._setNotes(text)}
          multiline={true}
          style={styles.instructionsTextInput} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  instructionsTextInput: {
    height: 60,
    fontFamily: 'Avenir Next',
    fontSize: 18,
    fontStyle: 'italic',
    color: '#929292',
  },
});

module.exports = NotesInput;