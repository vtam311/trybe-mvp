/*
* @Author: vincetam
* @Date:   2015-08-04 16:17:37
* @Last Modified by:   vincetam
* @Last Modified time: 2015-08-10 20:22:17
*/

'use strict';

var React = require('react-native');
var doWorkoutActions = require('../../actions/doWorkoutActions');

//Load components
var Custom = require('./workoutTypes/doCustom');
var Progressions = require('./workoutTypes/doProgressions');
var AMRAP = require('./workoutTypes/doAMRAP');
var Lift = require('./workoutTypes/doLift');

var {
  StyleSheet,
  Text,
  View,
} = React;

var DoWorkoutInstructions = React.createClass({

  render: function(){
    //Load exercise UI based on workout type
    var instructions;
    switch (this.props.workout.type) {
      /* jshint ignore:start */
      case 'Progressions':
        instructions = <Progressions workout={this.props.workout}/>;
        break;
      case 'AMRAP':
        instructions = <AMRAP workout={this.props.workout}/>;
        break;
      case 'Lift':
        instructions = <Lift workout={this.props.workout}/>;
        break;
      default:
        instructions = <Custom workout={this.props.workout}/>;
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
