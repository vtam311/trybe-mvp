'use strict';

var React = require('react-native');
var doWorkoutActions = require('../../actions/doWorkoutActions');

var {
  StyleSheet,
  Text,
  View,
} = React;

var ExerciseExpand = React.createClass({

  render: function(){
    var exercise = this.props.exercise;
    var renderDetails = [];

    //Show focus area if exercise is part of progression plan
    var renderForProgressions = function(exercise) {
      if(exercise.focusArea.name) {
        /* jshint ignore:start */
        renderDetails.push(<Text>Focus: {exercise.focusArea.name}</Text>);
        renderDetails.push(<Text>Standard: {exercise.standard.value} {exercise.standard.type}</Text>);
        renderDetails.push(<Text>Progress</Text>);
        /* jshint ignore:end */
      }
    };

    var renderVideo= function(exercise) {
      if(exercise.video) {
        /* jshint ignore:start */
        renderDetails.push(<Text>Video Preview</Text>);
        /* jshint ignore:end */
      }
    };

    renderForProgressions(exercise);
    renderVideo(exercise);

    return (
      /* jshint ignore:start */
      <View>
        {renderDetails}
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = ExerciseExpand;
