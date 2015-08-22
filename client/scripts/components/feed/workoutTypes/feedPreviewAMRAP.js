'use strict';

var React = require('react-native');
var renderTimeHelper = require('../../../helpers/renderTime');

var {
  StyleSheet,
  Text,
  View,
} = React;

var FeedPreviewAMRAP = React.createClass({

  render: function(){
    var workout = this.props.workout;
    var instructions;
    var exercises = [];

    var generateInstructions = function(workout) {
      var time = renderTimeHelper(workout.time);
      var type = ' As Many Rounds As Possible';
      var overviewText = time + type;

       /* jshint ignore:start */
      instructions = <Text>{ overviewText }</Text>;
       /* jshint ignore:end */

      var round = workout.rounds.round1;
      for(var key in round) {
        var exercise = '';
        var exerciseName = round[key].name;
        var reps = round[key].reps;
        var load = round[key].load.val;
        var loadUnits = round[key].load.units;

        if(round[key].load.val) {
          exercise += reps + ' ' + exerciseName + ' at ' +
            load + loadUnits;
        } else {
          exercise += reps + ' ' + exerciseName;
        }

       /* jshint ignore:start */
        var exerciseElement = <Text>{ exercise }</Text>;
        exercises.push(exerciseElement);
       /* jshint ignore:end */
      }
    };

    generateInstructions(workout);

    return (
      /* jshint ignore:start */
      <View>
        { instructions }
        { exercises }
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = FeedPreviewAMRAP;
