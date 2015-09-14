'use strict';

var React = require('react-native');
var modifyWorkoutActions = require('../../actions/modifyWorkoutActions');
var modifyWorkoutStore = require('../../stores/modifyWorkoutStore');

//Load components
var ExerciseEdit = require('../../common/editWorkoutComponents/exerciseEdit');
var TimeEdit = require('../../common/editWorkoutComponents/timeEdit');
var CustomEdit = require('./workoutTypes/customEdit');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} = React;

var ModifyWorkout = React.createClass({
  getInitialState: function() {
    return {
      workout: modifyWorkoutStore.getWorkout(),
    };
  },
  componentDidMount: function() {
    modifyWorkoutStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    modifyWorkoutStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      workout: modifyWorkoutStore.getWorkout(),
    });
  },
  render: function(){
    var workout = this.state.workout;
    var rounds = workout.rounds;
    var roundElements = [];

    var renderRound = function(rounds) {
      var currRound;
      //If workout type is Custom, simply render instructions
      if(workout.type === 'Custom') {
        /* jshint ignore:start */
        roundElements.push(<CustomEdit workout={workout}/>);
        /* jshint ignore:end */
      //Otherwise render each round's heading and exercises
      } else if(rounds.repeat) {
        //workouts with repeating rounds only use 1 round prop
        //so we set currRound to that one
        currRound = rounds.round1;
        titleRepeatRound(currRound);
        renderRepeatExercisesOfRound(currRound, 1);
      } else {
        //workouts with unique rounds have separate round objs
        for(let i = 1; i <= rounds.numRounds; i++) {
          //We push the round's title and exercises into
          //an element in roundElements
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
            var setHeader = <Text>{rounds.numRounds} sets of</Text>;
            roundElements.push(roundHeader);
          break;
        case 'Progressions':
        case 'Timed Circuit':
        case 'AMRAP':
          var roundHeader = <Text>Each Round</Text>;
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
        var exerciseElement = <ExerciseEdit exercise={currExercise} exerciseNum={ex} roundNum={roundNum}/>;
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
        var exerciseElement = <ExerciseEdit exercise={currExercise} exerciseNum={ex} roundNum={roundNum}/>;
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

    renderRound(rounds);

    return (
      /* jshint ignore:start */
      <View>
        <Text>Filler</Text>
        <Text>Filler</Text>
        <Text>Filler</Text>
        <Text>Filler</Text>
        <TimeEdit workout={workout}/>
        {roundElements}
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = ModifyWorkout;