'use strict';

var React = require('react-native');
var doWorkoutActions = require('../../actions/doWorkoutActions');

//Load components
var ExerciseExpand = require('./doExerciseExpand');

var {
  StyleSheet,
  Text,
  View,
} = React;

var Exercise = React.createClass({

  render: function(){
    var exercise = this.props.exercise;
    var renderDescr;

    var renderRepsOrHold = function(exercise) {
      if(exercise.hold) {
        renderDescr = exercise.hold + ' Sec ' + exercise.name;
      } else if(exercise.reps) {
        renderDescr = exercise.reps + ' ' + exercise.name;
      }
    };

    var renderLoad = function(exercise) {
      if(exercise.load.val) {
        renderDescr += ' at ' + exercise.load.val + exercise.load.units;
      }
    };

    renderRepsOrHold(exercise);
    renderLoad(exercise);

    return (
      /* jshint ignore:start */
      <View>
        <Text>{renderDescr}</Text>
        <ExerciseExpand exercise={exercise}/>
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = Exercise;
