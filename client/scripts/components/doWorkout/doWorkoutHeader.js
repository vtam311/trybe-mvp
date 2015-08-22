/*
* @Author: vincetam
* @Date:   2015-08-04 16:17:26
* @Last Modified by:   vincetam
* @Last Modified time: 2015-08-11 13:52:45
*/

'use strict';

var React = require('react-native');
var doWorkoutActions = require('../../actions/doWorkoutActions');
var renderTimeHelper = require('../../helpers/renderTime');

//Load components
var DoWorkoutBar = require('./doWorkoutBar');

var {
  StyleSheet,
  Text,
  View,
} = React;

var DoWorkoutHeader = React.createClass({

  render: function(){
    var workout = this.props.workout;
    var trybe = workout.trybe;
    var day = workout.day;
    var overview;

    var generateOverview = function(workout) {
      if(workout.type === 'AMRAP') {
        var time = renderTimeHelper(workout.time);
        var instructions = ' As Many Rounds As Possible';
        overview = time + instructions;
      } else {
        overview = workout.type;
      }
    };

    generateOverview(workout);

    return (
      /* jshint ignore:start */
      <View>
        <View>
          <Text>{trybe}</Text>
          <Text>Day {day}</Text>
          <Text>{overview}</Text>
        </View>
        <DoWorkoutBar />
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = DoWorkoutHeader;
