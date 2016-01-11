/*
* @Author: vincetam
* @Date:   2015-07-30 13:09:28
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-10 16:44:06
*/

'use strict';

var React = require('react-native');

//Load components
var ViewExercise = require('./viewExercise');
var ViewResults = require('./viewResults');

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
    var partsView = [];

    //Traverse parts
    workout.parts.forEach( (part, i) => {
      var partView = partsView[i] = [];
      var instructions = part.instructions;

      //Add instructions to partView
      partView.push(
        /* jshint ignore:start */
        <View style={styles.instructions}>
          <Text style={styles.instructionText}>{instructions}</Text>
        </View>
        /* jshint ignore:end */
      );

      //Add exercises to partView
      part.exercises.forEach( (exercise, n) => {
        partView.push(
          /* jshint ignore:start */
          <View style={styles.exercises}>
            <ViewExercise exercise={exercise}/>
          </View>
          /* jshint ignore:end */
        );
      });

    //Add results to partView
      partView.push(
        /* jshint ignore:start */
        <View style={styles.results}>
          <ViewResults part={part}/>
        </View>
        /* jshint ignore:end */
      );
    });

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
  instructions: {
    paddingTop: 10,
  },
  instructionText: {
    marginBottom: 10,
    fontFamily: 'Avenir Next',
    fontSize: 15,
    color: '#000000'
  },
  results: {
    borderBottomWidth: .5,
    borderColor: '#c8c7cc',
  }
});

module.exports = ViewWorkoutBody;
