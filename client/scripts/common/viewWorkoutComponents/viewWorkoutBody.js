/*
* @Author: vincetam
* @Date:   2016-01-10 21:20:46
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-11 14:40:41
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
    //workouts are made of parts. parts include instructions,
    //exercises, results, and optionally notes
    //If there is another part to render, add a separator line
    var parts = workout.parts.map((part, index) =>
      /* jshint ignore:start */
      <View key={index}>
        <Part part={part} showNotes={this.props.showNotes}/>
        { workout.parts[index + 1] ?
          <View style={styles.separatorLine}></View> :
          null
        }
      </View>
      /* jshint ignore:end */
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
    borderColor: '#9B9B9B',
  },
  separatorLine: {
    height: 0.5,
    backgroundColor: '#c8c7cc',
    marginTop: 10,
    marginBottom: 10,
  }
});

module.exports = ViewWorkoutBody;
