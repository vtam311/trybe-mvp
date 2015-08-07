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
    //Each roundElement is an array of exercises
    var roundsElements = [];
    var workout = this.props.workout;
    var roundsData = this.props.workout.rounds;

    //Traverse each round
    for(var i = 1; i <= roundsData.numRounds; i++) {
      roundsElements[i] = [];
      var currRound;
      //If repeat is true, set currRound to round1
      if(roundsData.repeat) {
        currRound = roundsData['round1'];
      } else {
        currRound = roundsData['round' + i];
      }

      //Add roundHeader to title round
      /* jshint ignore:start */
      var roundHeader = <Text>Round {i}</Text>
      /* jshint ignore:end */

      roundsElements[i].push(roundHeader);

      //Traverse exercises of round, push exercises
      for(var ex in currRound) {
        var currExercise = currRound[ex];
        /* jshint ignore:start */
        var exerciseElement = <Text>{currExercise.name}</Text>;
        /* jshint ignore:end */

        roundsElements[i].push(exerciseElement);
      }
    }

    return (
      /* jshint ignore:start */
      <View>
        {roundsElements}
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = Progressions;
