/*
* @Author: vincetam
* @Date:   2015-08-04 16:17:26
* @Last Modified by:   vincetam
* @Last Modified time: 2015-08-04 19:27:39
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

var DoWorkoutHeader = React.createClass({

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

module.exports = DoWorkoutHeader;
