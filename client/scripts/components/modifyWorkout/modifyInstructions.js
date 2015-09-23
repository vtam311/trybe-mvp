'use strict';

var React = require('react-native');
var modifyWorkoutStore = require('../../stores/modifyWorkoutStore');
var modifyWorkoutActions = require('../../actions/modifyWorkoutActions');

var {
  View,
  StyleSheet,
  Text,
  TextInput
} = React;


var ModifyInstructions = React.createClass({
  getInitialState: function() {
    return {
      workout: modifyWorkoutStore.getWorkout()
    };
  },
  componentDidMount: function() {
    modifyWorkoutStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    modifyWorkoutStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      workout: modifyWorkoutStore.getWorkout()
    });
  },
  saveInstructions: function(){

  },
  render: function(){
    var part = this.props.part;
    var isEditable = this.props.isEditable;

    return (
      /* jshint ignore:start */
      <TextInput
        ref="instr"
        style={{height: 100}}
        multiline={true}
        editable={isEditable}
        value={part.instructions}
        onSubmitEditing={this.saveInstructions()}/>
      /* jshint ignore:end */
    );
  },
});

module.exports = ModifyInstructions;