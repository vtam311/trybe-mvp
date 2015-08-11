'use strict';

var React = require('react-native');
var doWorkoutActions = require('../../../actions/doWorkoutActions');

//Load components
var Exercise = require('../doExercise');

var {
  StyleSheet,
  Text,
  View,
} = React;

var AMRAP = React.createClass({

  render: function(){
    //The round is an array of exercises
    var roundElement = [];
    var workout = this.props.workout;
    var rounds = this.props.workout.rounds;

    var generateHelpText = function(workout) {
      var instructions = 'Complete As Many Rounds As Possible in ';
      var time = generateHelpTextTime(workout.time);

      return instructions + time;
    };

    var generateHelpTextTime = function(time) {
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
      if(hour) result += hour + ' Hour(s)';
      if(min) result += min + ' Min(s)';
      if(sec) result += sec + ' Sec(s)';

      return result;
    };

    var titleRound = function(round){
      /* jshint ignore:start */
      var roundHeader = <Text>Each Round</Text>;
      roundElement.push(roundHeader);
      /* jshint ignore:end */
    };

    var addExercisesToRound = function(round) {
      for(var ex in round) {
        var currExercise = round[ex];
        /* jshint ignore:start */
        var exerciseElement = <Exercise exercise={currExercise}/>;
        roundElement.push(exerciseElement);
        /* jshint ignore:end */
      }
    };

    var renderRound = function(rounds) {
      var currRound = rounds.round1;

      titleRound(currRound);
      addExercisesToRound(currRound);
    };

    var helpText = generateHelpText(workout);
    renderRound(rounds);

    return (
      /* jshint ignore:start */
      <View>
        <Text>{helpText}</Text>
        {roundElement}
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = AMRAP;
