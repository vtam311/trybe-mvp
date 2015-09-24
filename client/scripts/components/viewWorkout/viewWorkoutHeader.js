/*
* @Author: vincetam
* @Date:   2015-08-04 16:17:26
* @Last Modified by:   vincetam
* @Last Modified time: 2015-09-18 12:22:18
*/

'use strict';

var React = require('react-native');
var viewWorkoutActions = require('../../actions/viewWorkoutActions');
var renderTimeHelper = require('../../common/renderTimeHelper');

//Load components
var ViewWorkoutToolbar = require('./viewWorkoutToolbar');

var {
  StyleSheet,
  Text,
  View,
} = React;

var ViewWorkoutHeader = React.createClass({

  render: function(){
    var workout = this.props.workout;
    var trybe = workout.trybe;
    var day = workout.day;

    return (
      /* jshint ignore:start */
      <View>
        <View>
          <Text>{trybe}</Text>
          <Text>Day {day}</Text>
        </View>
        <ViewWorkoutToolbar workout={workout} navigator={this.props.navigator}/>
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = ViewWorkoutHeader;
