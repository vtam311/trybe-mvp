'use strict';

var React = require('react-native');
var doWorkoutActions = require('../../actions/doWorkoutActions');

var {
  StyleSheet,
  Text,
  View,
} = React;

var Exercise = React.createClass({

  render: function(){
    var exercise = this.props.exercise;
    var renderText;

    var renderRepsOrHold = function(exercise) {
      if(exercise.hold) {
        renderText = exercise.hold + ' Sec ' + exercise.name;
      } else if(exercise.reps) {
        renderText = exercise.reps + ' ' + exercise.name;
      }
    };

    var renderLoad = function(exercise) {
      if(exercise.load.val) {
        renderText += ' at ' + exercise.load.val + exercise.load.units;
      }
    };

    renderRepsOrHold(exercise);
    renderLoad(exercise);

    return (
      /* jshint ignore:start */
      <View>
        <Text>{renderText}</Text>
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = Exercise;
