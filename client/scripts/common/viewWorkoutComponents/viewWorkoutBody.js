/*
* @Author: vincetam
* @Date:   2015-07-30 13:09:28
* @Last Modified by:   VINCE
* @Last Modified time: 2015-09-29 15:50:52
*/

'use strict';

var React = require('react-native');

//Load components
var ViewExercise = require('./viewExercise');

var {
  StyleSheet,
  Text,
  View,
} = React;

var ViewWorkoutBody = React.createClass({

  render: function(){
    var workout = this.props.workout;
    //workouts are made of parts. partsView is an array of partViews,
    //which renders a part's instructions and exercises
    var partsView = [];

    //Traverse parts
    for(var i = 0; i < workout.parts.length; i++){
      var partView = partsView[i] = [];
      var currPart = workout.parts[i];
      var instructions = currPart.instructions;

      //Add instructions to partView
      partView.push(
        /* jshint ignore:start */
        <View style={styles.instructions}>
          <Text style={styles.instructionText}>{instructions}</Text>
        </View>
        /* jshint ignore:end */
      );

      //Add exercises to partView
      for(var n = 0; n < currPart.exercises.length; n++){
        var currExercise = currPart.exercises[n];
        partView.push(
          /* jshint ignore:start */
          <View style={styles.exercises}>
            <ViewExercise exercise={currExercise}/>
          </View>
          /* jshint ignore:end */
        );
      }
    }

    return (
      /* jshint ignore:start */
      <View style={styles.workoutContainer}>
        { partsView }
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  instructionText: {
    marginBottom: 10,
    color: 'grey',
    fontFamily: 'Helvetica',
    color: '#434343'
  }
});

module.exports = ViewWorkoutBody;
