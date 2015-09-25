/*
* @Author: vincetam
* @Date:   2015-09-14 15:37:12
* @Last Modified by:   VINCE
* @Last Modified time: 2015-09-25 10:57:44
*/

'use strict';

var React = require('react-native');

var {
  View,
  StyleSheet,
  Text,
  TextInput
} = React;


var EditNotes = React.createClass({
  setNotes: function(notes){
    //Same logic as setInstructions
    // doWorkoutActions.setNotes(notes);
    this.props.workout.notes = notes;
  },
  render: function(){
    var workout = this.props.workout;
    var isEditable = this.props.isEditable;

    return (
      /* jshint ignore:start */
      <View>
        <Text>Results & Notes</Text>
        <TextInput
          style={{height: 150}}
          multiline={true}
          editable={isEditable}
          value={workout.notes}
          onChangeText={(text) => this.setNotes(text)}/>
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = EditNotes;
