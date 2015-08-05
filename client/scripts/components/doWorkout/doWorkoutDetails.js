/*
* @Author: vincetam
* @Date:   2015-08-04 16:17:37
* @Last Modified by:   vincetam
* @Last Modified time: 2015-08-04 19:23:19
*/

'use strict';

var React = require('react-native');
var doWorkoutActions = require('../../actions/doWorkoutActions');

//Load components
var Exercise = require('./doWorkoutExercise.js');

var {
  StyleSheet,
  Text,
  View,
} = React;

var DoWorkoutDetails = React.createClass({

  render: function(){
    if(this.props.workout.exercises) {
      var exercises = this.props.workout.exercises.map(function(exercise){
        /* jshint ignore:start */
        return <Exercise exercise={exercise}/>;
        /* jshint ignore:end */
      });
    }


    return (
      /* jshint ignore:start */
      <View>
        {exercises}
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = DoWorkoutDetails;
