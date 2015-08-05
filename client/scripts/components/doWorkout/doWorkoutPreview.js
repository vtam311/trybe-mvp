/*
* @Author: vincetam
* @Date:   2015-08-04 16:17:26
* @Last Modified by:   VINCE
* @Last Modified time: 2015-08-04 19:20:16
*/

'use strict';

var React = require('react-native');
var doWorkoutActions = require('../../actions/doWorkoutActions');

//Load components
var DoWorkoutBar = require('./doWorkoutBar');

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
        <View>
          <Text>{trybe}</Text>
          <Text>Day {day}</Text>
          <Text>{workoutType}</Text>
          <Text>{instructions}</Text>
        </View>
        <DoWorkoutBar />
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = DoWorkoutPreview;
