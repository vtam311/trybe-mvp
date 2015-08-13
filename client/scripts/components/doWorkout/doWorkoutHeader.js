/*
* @Author: vincetam
* @Date:   2015-08-04 16:17:26
* @Last Modified by:   vincetam
* @Last Modified time: 2015-08-11 13:52:45
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
    var workout = this.props.workout;
    var trybe = workout.trybe;
    var day = workout.day;
    var overview;

    var generateOverview = function(workout) {
      if(workout.type === 'AMRAP') {
        var time = generateTime(workout.time);
        var instructions = ' As Many Rounds As Possible';
        overview = time + instructions;
      } else {
        overview = workout.type;
      }
    };

    var generateTime = function(time) {
      var result = '';
      var hour = time.slice(0,2);
      var min = time.slice(3,5);
      var sec = time.slice(6,8);

      //Determine relevant units, delete irrelevant ones
      if(hour === '00') hour = null;
      if(min === '00') min = null;
      if(sec === '00') sec = null;

      //For relevant units, remove zeroes
      if(hour && hour.charAt(0) === '0') hour = hour.charAt(1);
      if(min && min.charAt(0) === '0') min = min.charAt(1);
      if(sec && sec.charAt(0) === '0') sec = sec.charAt(1);

      //Create result text
      if(hour) result += hour + ' hour(s)';
      if(min) result += min + 'min';
      if(sec) result += sec + 'sec';

      return result;
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
