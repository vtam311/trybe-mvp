/*
* @Author: vincetam
* @Date:   2015-08-04 16:17:37
* @Last Modified by:   vincetam
* @Last Modified time: 2015-08-06 17:28:44
*/

'use strict';

var React = require('react-native');
var doWorkoutActions = require('../../actions/doWorkoutActions');

//Load components
var CustomWorkout = require('./doWorkoutCustomWorkout.js');

var {
  StyleSheet,
  Text,
  View,
} = React;

var DoWorkoutInstructions = React.createClass({

  render: function(){
    var exercises;
    if(this.props.workout.exercises) {
      //Load exercise UI based on workout type
      switch (this.props.workout.type) {
        /* jshint ignore:start */
        case 'Progressions':
          exercises = this.props.workout.exercises.map(function(exercise){
           return <Progression exercise={exercise}/>;
          });
          break;
        default:
          exercises = <CustomWorkout workout={this.props.workout}/>;
        /* jshint ignore:end */
      }
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

module.exports = DoWorkoutInstructions;
