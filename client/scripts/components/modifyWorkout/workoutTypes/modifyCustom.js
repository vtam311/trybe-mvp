'use strict';

var React = require('react-native');
var modifyWorkoutStore = require('../../../stores/modifyWorkoutStore');
var modifyWorkoutActions = require('../../../actions/modifyWorkoutActions');

var {
  View,
  StyleSheet,
  Text,
  TextInput
} = React;


var ModifyCustom = React.createClass({
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
  render: function(){
    var workout = this.state.workout;
    var isEditable = this.props.isEditable;

    return (
      /* jshint ignore:start */
      <TextInput
        style={{height: 100}}
        multiline={true}
        editable={isEditable}
        value={workout.instructions}/>
      /* jshint ignore:end */
    );
  },
});

module.exports = ModifyCustom;
