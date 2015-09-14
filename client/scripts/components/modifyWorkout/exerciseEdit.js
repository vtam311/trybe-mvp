'use strict';

var React = require('react-native');
var modifyWorkoutStore = require('../../stores/modifyWorkoutStore');
var modifyWorkoutActions = require('../../actions/modifyWorkoutActions');

//Load components
var RepEdit = require('../../common/editWorkoutComponents/repEdit');
var LoadEdit = require('../../common/editWorkoutComponents/loadEdit');
var HoldEdit = require('../../common/editWorkoutComponents/holdEdit');

var {
  StyleSheet,
  Text,
  View
} = React;


var ExerciseEdit = React.createClass({

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
      if(exercise.reps){
        repsOrHold = <RepEdit exercise={exercise} exerciseNum={exerciseNum} roundNum={roundNum}/>;
      }else if(exercise.hold){
        //TO DO: enable user to edit hold and name on click
        repsOrHold = <HoldEdit exercise={exercise} exerciseNum={exerciseNum} roundNum={roundNum}/>;
      }
      /* jshint ignore:end*/
    };

    var renderMovement = function(exercise) {
      /* jshint ignore:start*/
      if(exercise.reps){
        movement = <Text>{exercise.name}</Text>
      } else if (exercise.hold){
        movement = <Text>{'Second ' + exercise.name}</Text>
      }
      /* jshint ignore:end*/
    };

    var renderLoad = function(exercise) {
      //TO DO: enable user to edit load on click
      /* jshint ignore:start*/
      if(exercise.load.val) {
        load = <LoadEdit exercise={exercise} exerciseNum={exerciseNum} roundNum={roundNum}/>;
      } else {
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

module.exports = ExerciseEdit;