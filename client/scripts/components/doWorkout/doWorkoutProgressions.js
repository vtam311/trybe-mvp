'use strict';

var React = require('react-native');
var doWorkoutActions = require('../../actions/doWorkoutActions');

var {
  StyleSheet,
  Text,
  View,
} = React;

var Progressions = React.createClass({

  render: function(){
    //renderRounds is an array of rounds.
    //Each round is an array of exercises
    var renderRounds = [];

    var workout = this.props.workout;
    var roundsData = this.props.workout.rounds;

    //If rounds repeat, traverse exercises in round1
    //And input each exercise into the <Exercise/> component
    //Then add each ex component to the round array element
    if(roundsData.repeat) {
      //Populate current round
      renderRounds[0] = [];
      var roundNum = 1;

      //Add roundHeader to title round
      /* jshint ignore:start */
      var roundHeader = <Text>Round {roundNum}</Text>
      renderRounds[0].push(roundHeader);

      var currRound = roundsData['round' + roundNum];
      //Traverse exercises of round
      for(var ex in currRound) {
        //for each ex, push <Exercise exercise={ex}/>
        //into the current round's array element
        var currExercise = currRound[ex];
        var exerciseElement = <Text>{currExercise.name}</Text>;
        renderRounds[0].push(exerciseElement);
        /* jshint ignore:end */
      }
      //At end, duplicate rounds by numRounds
      for(let n = 1; n < roundsData.numRounds; n++) {
        renderRounds[n] = renderRounds[0];
      }

    }

    return (
      /* jshint ignore:start */
      <View>
        {renderRounds}
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = Progressions;
