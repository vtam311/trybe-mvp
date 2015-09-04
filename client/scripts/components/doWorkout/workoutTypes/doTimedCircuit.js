//Not using since 9/4/15

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

var TimedCircuit = React.createClass({

  render: function(){
    //Each round is an array of exercises
    var roundElements = [];
    var workout = this.props.workout;
    var rounds = this.props.workout.rounds;

    var renderRounds = function(rounds) {
      for(let i = 1; i <= rounds.numRounds; i++) {
        roundElements[i] = [];
        var currRound;
        //If workout has repreating rounds, set currRound to round1
        if(rounds.repeat) {
          currRound = rounds['round1'];
        } else {
          currRound = rounds['round' + i];
        }

        titleRound(currRound, i);
        addExercisesToRound(currRound, i);
      }
    };

    var titleRound = function(round, roundNum){
      /* jshint ignore:start */
      var roundHeader = <Text>Round {roundNum}</Text>;
      roundElements[roundNum].push(roundHeader);
      /* jshint ignore:end */
    };

    var addExercisesToRound = function(round, roundNum) {
      for(var ex in round) {
        var currExercise = round[ex];
        /* jshint ignore:start */
        var exerciseElement = <Exercise exercise={currExercise}/>;
        roundElements[roundNum].push(exerciseElement);
        /* jshint ignore:end */
      }
    };

    renderRounds(rounds);

    return (
      /* jshint ignore:start */
      <View>
        {roundElements}
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = TimedCircuit;
