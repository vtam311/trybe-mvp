/*
* @Author: vincetam
* @Date:   2016-01-10 21:20:46
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-10 21:37:14
*/

'use strict';

var React = require('react-native');

//Load components
var Part = require('./part');

var {
  StyleSheet,
  Text,
  View,
} = React;

var ViewWorkoutBody = React.createClass({

  render: function(){
    var workout = this.props.workout;
    //workouts are made of parts. partsView will be an array of
    //partViews, which renders a part's instructions, exercises, and results
    var parts = workout.parts.map((part, index) =>
      <Part part={part} key={index} />
    );

    return (
      /* jshint ignore:start */
      <View style={styles.workoutContainer}>
        { parts }
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  results: {
    borderBottomWidth: .5,
    borderColor: '#c8c7cc',
  }
});

module.exports = ViewWorkoutBody;
