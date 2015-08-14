'use strict';

var React = require('react-native');

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
      var time = generateTime(workout.time);
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

    var generateTime = function(time) {
      var result = '';
      var hour = time.slice(0,2);
      var min = time.slice(3,5);
      var sec = time.slice(6,8);

      //Determine relevant units, delete irrelevant ones
      if(hour === '00') hour = null;
      if(min === '00') min = null;
      if(sec === '00') sec = null;

      //For relevant units, remove zeroes
      if(hour && hour.charAt(0) === '0') hour = hour.charAt(1);
      if(min && min.charAt(0) === '0') min = min.charAt(1);
      if(sec && sec.charAt(0) === '0') sec = sec.charAt(1);

      //Create result text
      if(hour) result += hour + ' hour(s)';
      if(min) result += min + 'min';
      if(sec) result += sec + 'sec';

      return result;
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
