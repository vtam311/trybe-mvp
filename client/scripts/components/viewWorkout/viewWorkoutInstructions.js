'use strict';

var React = require('react-native');
var viewWorkoutActions = require('../../actions/viewWorkoutActions');

//Load components
var ViewExercise = require('./viewExercise');

var {
  StyleSheet,
  Text,
  View,
} = React;

var ViewWorkoutInstructions = React.createClass({

  render: function(){
    var workout = this.props.workout;
    var rounds = workout.rounds;
    var roundElements = [];

    var renderRound = function(rounds) {
      var currRound;
      //If workout type is Custom, simply render instructions
      if(workout.type === 'Custom') {
        /* jshint ignore:start */
        roundElements.push(<Text>{workout.instructions}</Text>);
        /* jshint ignore:end */
      //Otherwise render each round's heading and exercises
      } else if(rounds.repeat) {
        //workouts with repeating rounds only use 1 round obj
        //so we set currRound to that one
        currRound = rounds.round1;
        titleRepeatRound(currRound);
        renderRepeatExercisesOfRound(currRound, 1);
      } else {
        //workouts with unique rounds have separate round objs
        for(let i = 1; i <= rounds.numRounds; i++) {
          roundElements[i] = [];
          currRound = rounds['round' + i];
          titleUniqueRound(currRound, i);
          renderUniqueExercisesOfRound(currRound, i);
        }
      }
    };

    var titleRepeatRound = function(round) {
      /* jshint ignore:start */
      switch(workout.type) {
        case 'Lift':
            var setHeader = <Text>{rounds.numRounds} Sets of</Text>;
            roundElements.push(roundHeader);
          break;
        case 'Progressions':
        case 'Timed Circuit':
          var roundHeader = <Text>{rounds.numRounds} Rounds of</Text>;
          roundElements.push(roundHeader);
          break;
        case 'AMRAP':
          var roundHeader = <Text>Each Round</Text>
          roundElements.push(roundHeader);
          break;
        default:
          console.log('workout type unknown');
      }
      /* jshint ignore:end */
    };

    var titleUniqueRound = function(round, roundNum) {
      /* jshint ignore:start */
      switch(workout.type) {
        case 'Lift':
          var setHeader = <Text>Set {roundNum}</Text>;
          roundElements[roundNum].push(setHeader);
          break;
        case 'Progressions':
        case 'Timed Circuit':
          var roundHeader = <Text>Round {roundNum}</Text>;
          roundElements[roundNum].push(roundHeader);
          break;
        default:
          console.log('workout type unknown');
      }
      /* jshint ignore:end */
    };

    var renderRepeatExercisesOfRound = function(round, roundNum) {
      for(var ex in round) {
        /* jshint ignore:start */
        var currExercise = round[ex];
        var exerciseElement = <ViewExercise exercise={currExercise}/>;
        switch(workout.type) {
          case 'AMRAP':
          case 'Lift':
          case 'Progressions':
          case 'Timed Circuit':
            roundElements.push(exerciseElement);
            break;
          default:
            console.log('workout type unknown');
        }
        /* jshint ignore:end */
      }
    };

    var renderUniqueExercisesOfRound = function(round, roundNum) {
      for(var ex in round) {
        var currExercise = round[ex];
        /* jshint ignore:start */
        var exerciseElement = <ViewExercise exercise={currExercise}/>;
        switch(workout.type) {
          case 'Lift':
          case 'Progressions':
          case 'Timed Circuit':
            roundElements[roundNum].push(exerciseElement);
            break;
          default:
            console.log('workout type unknown');
        }
        /* jshint ignore:end */
      }
    };

    //Render workout once viewWorkoutStore has loaded it
    if(workout.rounds) {
      renderRound(workout.rounds);
    }

    return (
      /* jshint ignore:start */
      <View>
        {roundElements}
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = ViewWorkoutInstructions;
