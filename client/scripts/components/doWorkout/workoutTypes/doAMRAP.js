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

    renderRound(rounds);

    return (
      /* jshint ignore:start */
      <View>
        {roundElement}
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = AMRAP;
