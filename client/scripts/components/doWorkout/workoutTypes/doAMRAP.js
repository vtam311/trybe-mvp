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
    var roundElements = [];
    var workout = this.props.workout;
    var rounds = this.props.workout.rounds;

    var renderRound = function(rounds) {
      //AMRAP workout obj only has 1 round
      var currRound = rounds.round1;
      titleRound(currRound);
      renderExercisesOfRound(currRound);
    };

    var titleRound = function(round){
      /* jshint ignore:start */
      var roundHeader = <Text>Each Round</Text>;
      roundElements.push(roundHeader);
      /* jshint ignore:end */
    };

    var renderExercisesOfRound = function(round) {
      for(var ex in round) {
        var currExercise = round[ex];
        /* jshint ignore:start */
        var exerciseElement = <Exercise exercise={currExercise}/>;
        roundElements.push(exerciseElement);
        /* jshint ignore:end */
      }
    };

    renderRound(rounds);

    return (
      /* jshint ignore:start */
      <View>
        {roundElements}
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = AMRAP;
