'use strict';

var React = require('react-native');
var doWorkoutActions = require('../../actions/doWorkoutActions');

//Load components
var Exercise = require('./doExercise');

var Custom = require('./workoutTypes/doCustom'); //not using since 9/4/15
var Progressions = require('./workoutTypes/doProgressions');
var AMRAP = require('./workoutTypes/doAMRAP');
var Lift = require('./workoutTypes/doLift');
var TimedCircuit = require('./workoutTypes/doTimedCircuit');

var {
  StyleSheet,
  Text,
  View,
} = React;

var DoWorkoutInstructions = React.createClass({

  render: function(){
    var workout = this.props.workout;
    var rounds = workout.rounds;
    var roundElements = [];

    // Load exercise UI based on workout type
    var renderRound = function(rounds) {
      switch(workout.type) {
      /* jshint ignore:start */
        case 'Custom':
          var instructions = <Text>{workout.instructions}</Text>;
          roundElements.push(instructions);
          break;
        case 'AMRAP':
          //AMRAP workout obj only has 1 round
          var currRound = rounds.round1;
          titleRound(currRound);
          renderExercisesOfRound(currRound);
          break;
        case 'Lift':
          //Lift workout obj uses rounds as sets
        case 'Progressions':
        case 'Timed Circuit':
          for(let i = 1; i <= rounds.numRounds; i++) {
            roundElements[i] = [];
            var currRound;
            //If workout repeats rounds, set currRound to round1
            if(rounds.repeat) {
              currRound = rounds['round1'];
            } else {
              currRound = rounds['round' + i];
            }
            titleRound(currRound, i);
            renderExercisesOfRound(currRound, i);
          }
          break;
        default:
          console.log('Unrecognized workout type');
      /* jshint ignore:end */
      }
    };

    var titleRound = function(round, roundNum){
      switch(workout.type) {
      /* jshint ignore:start */

        case 'AMRAP':
          var roundHeader = <Text>Each Round</Text>;
          roundElements.push(roundHeader);
          break;
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
          console.log('Unrecognized workout type');
      /* jshint ignore:end */
      }
    };

    var renderExercisesOfRound = function(round, roundNum) {
      /* jshint ignore:start */
      for(var ex in round) {
        var currExercise = round[ex];
        var exerciseElement = <Exercise exercise={currExercise}/>;

        switch(workout.type) {
          case 'AMRAP':
            roundElements.push(exerciseElement);
            break;
          case 'Lift':
          case 'Progressions':
          case 'Timed Circuit':
            roundElements[roundNum].push(exerciseElement);
            break;
          default:
            console.log('Unrecognized workout type');
        }
      }
      /* jshint ignore:end */
    };

    renderRound(rounds);

    return (
      /* jshint ignore:start */
      <View>
        {roundElements}
      </View>
      /* jshint ignore:end */
    );

    // var instructions; //not using since 9/4/15
    // switch (this.props.workout.type) {
    //   /* jshint ignore:start */
    //   case 'Progressions':
    //     instructions = <Progressions workout={workout}/>;
    //     break;
    //   case 'AMRAP':
    //   case 'Custom':
    //   case 'Lift':
    //     instructions = <AMRAP workout={workout}/>;
    //     break;
    //   // case 'Lift':
    //   //   instructions = <Lift workout={workout}/>;
    //   //   break;
    //   case 'Timed Circuit':
    //     instructions = <TimedCircuit workout={workout}/>;
    //     break;
    //   default:
    //     instructions = <Custom workout={workout}/>;
    //   /* jshint ignore:end */
    // }

    // return (
    //   /* jshint ignore:start */
    //   <View>
    //     {instructions}
    //   </View>
    //   /* jshint ignore:end */
    // );
  }
});

module.exports = DoWorkoutInstructions;
