'use strict';

var React = require('react-native');
var viewWorkoutActions = require('../../actions/viewWorkoutActions');

//Load components
// var ExerciseExpand = require('./viewExerciseExpand'); //Depr 9/18/15

var {
  StyleSheet,
  Text,
  View,
} = React;

var viewExercise = React.createClass({

  render: function(){
    var exercise = this.props.exercise;
    var renderDescr = '';

    var renderReps = function() {
      if(exercise.reps) {
        renderDescr = exercise.reps + ' ' + exercise.name;
      }
    };

    var renderDistance = function() {
      if(exercise.distance) {
        renderDescr = exercise.distance + ' ' + exercise.name;
      }
    };

    var renderTime = function() {
      if(exercise.time) {
        renderDescr += exercise.time + ' Sec ' + exercise.name;
      }
    };

    var renderLoad = function() {
      if(exercise.load.val) {
        renderDescr += ' at ' + exercise.load.val + exercise.load.units;
      }
    };


    renderReps();
    renderDistance();
    renderTime();
    renderLoad();

    return (
      /* jshint ignore:start */
      <View>
        <Text>{renderDescr}</Text>
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = viewExercise;
