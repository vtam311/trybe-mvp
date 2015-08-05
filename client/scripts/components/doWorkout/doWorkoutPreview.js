/*
* @Author: vincetam
* @Date:   2015-08-04 16:17:26
* @Last Modified by:   vincetam
* @Last Modified time: 2015-08-04 17:54:11
*/

'use strict';

var React = require('react-native');
var doWorkoutActions = require('../../actions/doWorkoutActions');

var {
  StyleSheet,
  Text,
  View,
} = React;

var DoWorkoutPreview = React.createClass({

  render: function(){
    var trybe = this.props.workout.trybe;
    var day = this.props.workout.day;
    var workoutType = this.props.workout.type;
    var instructions = this.props.workout.exercises;

    return (
      /* jshint ignore:start */
      <View>
        <Text>{trybe}</Text>
        <Text>Day {day}</Text>
        <Text>{workoutType}</Text>
        <Text>{instructions}</Text>
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = DoWorkoutPreview;
