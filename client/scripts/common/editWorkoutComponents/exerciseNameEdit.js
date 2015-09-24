/*
* @Author: VINCE
* @Date:   2015-09-23 16:55:04
* @Last Modified by:   VINCE
* @Last Modified time: 2015-09-23 17:18:44
*/

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TextInput
} = React;

var ExerciseEdit = React.createClass({
  saveName: function(text){
    this.props.exercise.name = text;
  },

  render: function(){
    //Load props
    var exercise = this.props.exercise;
    var partIdx = this.props.partIdx;
    var exIdx = this.props.exIdx;

    return (
      /* jshint ignore:start */
      <TextInput
        style={{height: 20}}
        value={exercise.name}
        onChangeText={(text) => this.saveName(text)}/>
      /* jshint ignore:end */
    );
  }
});

module.exports = ExerciseEdit;