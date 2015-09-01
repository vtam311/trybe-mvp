'use strict';

var React = require('react-native');
var createWorkoutStore = require('../../stores/createWorkoutStore');
var createWorkoutActions = require('../../actions/createWorkoutActions');



//Load components
var EditReps = require('./editReps');

var {
  StyleSheet,
  Text,
  View
} = React;


var EditExercise = React.createClass({

  render: function(){
    //Load props
    var exercise = this.props.exercise;
    var exerciseNum = this.props.exerciseNum;
    var roundNum = this.props.roundNum;

    //Declare variables for exercise
    var repsOrHold;
    var movement;
    var load;

    var renderRepsOrHold = function(exercise) {
      /* jshint ignore:start*/
      if(exercise.reps) {
        repsOrHold = <EditReps exercise={exercise} exerciseNum={exerciseNum} roundNum={roundNum}/>;
      }else if(exercise.hold) {
        //TO DO: enable user to edit hold and name on click
        repsOrHold = exercise.hold;
      }
      /* jshint ignore:end*/
    };

    var renderMovement = function(exercise) {
      /* jshint ignore:start*/
      if(exercise.reps){
        movement = <Text>{ exercise.name}</Text>
      }else if(exercise.hold){
        movement = <Text>{ ' Sec ' + exercise.name}</Text>
      }
      /* jshint ignore:end*/
    };

    var renderLoad = function(exercise) {
      //TO DO: enable user to edit load on click
      /* jshint ignore:start*/
      if(exercise.load.val) {
        load = <Text>{'at ' + exercise.load.val + exercise.load.units}</Text>;
      }else{
        load = null;
      }
      /* jshint ignore:end*/
    };

    renderRepsOrHold(exercise);
    renderMovement(exercise);
    renderLoad(exercise);

    return (
      /* jshint ignore:start */
      <View>
        {repsOrHold}
        {movement}
        {load}
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = EditExercise;