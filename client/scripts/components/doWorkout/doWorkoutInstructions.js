/*
* @Author: vincetam
* @Date:   2015-08-04 16:17:37
* @Last Modified by:   VINCE
* @Last Modified time: 2015-08-11 10:22:38
*/

'use strict';

var React = require('react-native');
var doWorkoutActions = require('../../actions/doWorkoutActions');

//Load components
var Custom = require('./workoutTypes/doCustom');
var Progressions = require('./workoutTypes/doProgressions');
var AMRAP = require('./workoutTypes/doAMRAP');
var Lift = require('./workoutTypes/doLift');
var TimedCircuit = require('./workoutTypes/doTimedCircuit');

var {
  StyleSheet,
  Text,
  View,
} = React;

var DoWorkoutInstructions = React.createClass({

  render: function(){
    //Load exercise UI based on workout type
    var workout = this.props.workout;
    var instructions;
    switch (this.props.workout.type) {
      /* jshint ignore:start */
      case 'Progressions':
        instructions = <Progressions workout={workout}/>;
        break;
      case 'AMRAP':
        instructions = <AMRAP workout={workout}/>;
        break;
      case 'Lift':
        instructions = <Lift workout={workout}/>;
        break;
      case 'Timed Circuit':
        instructions = <TimedCircuit workout={workout}/>;
        break;
      default:
        instructions = <Custom workout={workout}/>;
      /* jshint ignore:end */
    }

    return (
      /* jshint ignore:start */
      <View>
        {instructions}
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = DoWorkoutInstructions;
