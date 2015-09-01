'use strict';

var React = require('react-native');
var renderTimeHelper = require('../../../helpers/renderTimeHelper');
var createWorkoutStore = require('../../../stores/createWorkoutStore');
var createWorkoutActions = require('../../../actions/createWorkoutActions');

//Load components
var EditExercise = require('../editExercise');
var TimeEdit = require('../editTime');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;


var EditAMRAP = React.createClass({
  render: function(){
    var workout = this.props.workout;
    var rounds = workout.rounds;
    var timeEdit;
    var roundElements = []; //Each round is an array of exercise components

    var renderRound = function(rounds) {
      //AMRAP workout obj only has 1 round
      var currRound = rounds.round1;
      titleRound(currRound);
      renderExercisesOfRound(currRound, 1);
    };

    var titleRound = function(round){
      /* jshint ignore:start */
      var roundHeader = <Text>Each Round</Text>;
      roundElements.push(roundHeader);
      /* jshint ignore:end */
    };

    var renderExercisesOfRound = function(round, roundNum) {
      for(var ex in round) {
        var currExercise = round[ex];
        /* jshint ignore:start */
        var exerciseElement = <EditExercise exercise={currExercise} exerciseNum={ex} roundNum={roundNum}/>;
        roundElements.push(exerciseElement);
        /* jshint ignore:end */
      }
    };

    renderRound(rounds);

    return (
      /* jshint ignore:start */
      <View>
        <TimeEdit workout={workout}/>
        {roundElements}
      </View>
      /* jshint ignore:end */
    );
  },
});

module.exports = EditAMRAP;
