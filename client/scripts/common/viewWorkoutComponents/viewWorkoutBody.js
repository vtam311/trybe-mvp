/*
* @Author: vincetam
* @Date:   2015-07-30 13:09:28
* @Last Modified by:   VINCE
* @Last Modified time: 2015-09-26 12:05:36
*/

'use strict';

var React = require('react-native');

//Load components
var ViewExercise = require('../../common/viewWorkoutComponents/viewExercise');

var {
  StyleSheet,
  Text,
  View,
} = React;

var ViewWorkoutBody = React.createClass({

  render: function(){
    var workout = this.props.workout;
    //partsView is an array of partViews, which renders
    //a workout part's instructions and exercises
    var partsView = [];

    //Traverse parts
    for(var i = 0; i < workout.parts.length; i++){
      var partView = partsView[i] = [];
      var currPart = workout.parts[i];
      var instructions = currPart.instructions;

      //Add instructions to partView
      /* jshint ignore:start */
      partView.push(<Text style={styles.instructionText}>{instructions}</Text>);
      /* jshint ignore:end */

      //Add exercises to partView
      for(var n = 0; n < currPart.exercises.length; n++){
        var currExercise = currPart.exercises[n];
        /* jshint ignore:start */
        partView.push(<ViewExercise exercise={currExercise}/>);
        /* jshint ignore:end */
      }
    }

    return (
      /* jshint ignore:start */
      <View style={styles.workoutBody}>
        { partsView }
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  workoutBody: {
  },
  instructionText: {
    fontFamily: 'Helvetica',
    marginBottom: 10
  }
});

module.exports = ViewWorkoutBody;
