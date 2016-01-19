/*
* @Author: VINCE
* @Date:   2015-09-23 16:55:04
* @Last Modified by:   vincetam
* @Last Modified time: 2015-10-08 19:36:40
*/

'use strict';

var React = require('react-native');
var modifyWorkoutActions = require('../../actions/modifyWorkoutActions');

var {
  StyleSheet,
  Text,
  View,
  TextInput
} = React;

var ExerciseEdit = React.createClass({
  getInitialState: function(){
    return {
      exerciseName: this.props.exercise.name,
    };
  },
  saveName: function(){
    modifyWorkoutActions.setExerciseName(this.state.exerciseName, this.props.partIdx, this.props.exIdx);
  },
  render: function(){
    //Load props
    var exercise = this.props.exercise;

    return (
      /* jshint ignore:start */
      <TextInput
        style={{height: 20}}
        value={this.state.exerciseName}
        onChangeText={ (text) => this.setState({exerciseName: text}) }
        onEndEditing={ () => this.saveName() }/>
      /* jshint ignore:end */
    );
  }
});

module.exports = ExerciseEdit;