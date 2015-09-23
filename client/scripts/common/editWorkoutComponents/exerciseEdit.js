'use strict';

var React = require('react-native');
var modifyWorkoutStore = require('../../stores/modifyWorkoutStore');
var modifyWorkoutActions = require('../../actions/modifyWorkoutActions');

//Load components
var RepEdit = require('../../common/editWorkoutComponents/repEdit');
var LoadEdit = require('../../common/editWorkoutComponents/loadEdit');
var HoldEdit = require('../../common/editWorkoutComponents/holdEdit');
var DistEdit = require('../../common/editWorkoutComponents/distanceEdit');

var {
  StyleSheet,
  Text,
  View
} = React;


var ExerciseEdit = React.createClass({

  render: function(){
    //Load props
    var exercise = this.props.exercise;
    var partIdx = this.props.partIdx;
    var exIdx = this.props.exIdx;

    //Declare variables for exercise
    var amount;
    var movement;
    var load;

    var renderAmount = function(exercise) {
      /* jshint ignore:start*/
      if(exercise.reps){
        amount = <RepEdit exercise={exercise} partIdx={partIdx} exIdx={exIdx}/>;
      } else if (exercise.hold){
        amount = <HoldEdit exercise={exercise} partIdx={partIdx} exIdx={exIdx}/>;
      } else if (exercise.distance.val){
        //ADD EDIT FEATURE
        amount = <DistEdit exercise={exercise} partIdx={partIdx} exIdx={exIdx}/>;
      }
      /* jshint ignore:end*/
    };

    var renderLoad = function(exercise) {
      /* jshint ignore:start*/
      if(exercise.load.val) {
        load = <LoadEdit exercise={exercise} partIdx={partIdx} exIdx={exIdx}/>;
      }
      /* jshint ignore:end*/
    };

    var renderMovement = function(exercise) {
      /* jshint ignore:start*/
      //ADD EDIT FEATURE
      movement = <Text>{exercise.name}</Text>;
      /* jshint ignore:end*/
    };

    //Render exercise description such that order is
    // Amount(Reps/Time/Dist) Weight ExerciseName
    renderAmount(exercise);
    renderLoad(exercise);
    renderMovement(exercise);

    return (
      /* jshint ignore:start */
      <View>
        {amount}
        {load}
        {movement}
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = ExerciseEdit;