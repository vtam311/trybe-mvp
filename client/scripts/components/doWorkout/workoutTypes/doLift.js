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

var Lift = React.createClass({

  render: function(){
    //Each round is an array of exercises
    var roundElements = [];
    var workout = this.props.workout;
    var rounds = this.props.workout.rounds;

    var renderSets = function(rounds) {
      //Workout obj uses rounds, but they're synonymous
      //in functionality with sets
      for(let i = 1; i <= rounds.numRounds; i++) {
        roundElements[i] = [];
        var currRound;
        //If workout has repreating rounds, set currRound to round1
        if(rounds.repeat) {
          currRound = rounds['round1'];
        } else {
          currRound = rounds['round' + i];
        }

        titleSet(currRound, i);
        addExercisesToSet(currRound, i);
      }
    };

    var titleSet = function(round, setNum){
      /* jshint ignore:start */
      var setHeader = <Text>Set {setNum}</Text>;
      roundElements[setNum].push(setHeader);
      /* jshint ignore:end */
    };

    var addExercisesToSet = function(round, setNum) {
      for(var ex in round) {
        var currExercise = round[ex];
        /* jshint ignore:start */
        var exerciseElement = <Exercise exercise={currExercise}/>;
        roundElements[setNum].push(exerciseElement);
        /* jshint ignore:end */
      }
    };

    renderSets(rounds);

    return (
      /* jshint ignore:start */
      <View>
        {roundElements}
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = Lift;
