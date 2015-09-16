/*
* @Author: vincetam
* @Date:   2015-09-14 15:37:12
* @Last Modified by:   vincetam
* @Last Modified time: 2015-09-15 17:31:50
*/

'use strict';

var React =  require('react-native');
// var doWorkoutStore = require('../../../stores/doWorkoutStore');
// var doWorkoutActions = require('../../../actions/doWorkoutActions');

var {
  View,
  StyleSheet,
  Text,
  TextInput
} = React;


var DoCustom = React.createClass({
  //Disabling due to logic in setInstructions. Deprecated 9/15/15
  // getInitialState: function() {
  //   return {
  //     instructions: doWorkoutStore.getInstructions(),
  //     notes: doWorkoutStore.getNotes()
  //   };
  // },
  // componentDidMount: function() {
  //   doWorkoutStore.addChangeListener(this._onChange);
  // },
  // componentWillUnmount: function() {
  //   doWorkoutStore.removeChangeListener(this._onChange);
  // },
  // _onChange: function(){
  //   this.setState({
  //     notes: doWorkoutStore.getNotes(),
  //   });
  // },
  setInstructions: function(instr){
    //Opting to not use doWorkoutActions, as onChangeText continually
    //updates state of store as user inputs text, which triggers
    //refresh & interrupts user text input if typing quickly
    // doWorkoutActions.setInstructions(instr);
    this.props.workout.instructions = instr;
  },
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
        <TextInput
          style={{height: 100}}
          multiline={true}
          editable={isEditable}
          value={workout.instructions}
          onChangeText={(text) => this.setInstructions(text)}/>
        <Text>Notes</Text>
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

module.exports = DoCustom;
