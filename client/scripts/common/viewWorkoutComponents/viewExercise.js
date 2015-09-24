'use strict';

var React = require('react-native');
var viewWorkoutActions = require('../../actions/viewWorkoutActions');

var {
  StyleSheet,
  Text,
  View,
} = React;

var viewExercise = React.createClass({

  render: function(){
    var exercise = this.props.exercise;
    var amount;
    var load;
    var movement;

    var renderAmount = function(exercise) {
      /* jshint ignore:start*/
      if(exercise.reps){
        amount = <Text>{exercise.reps}</Text>;
      } else if (exercise.hold){
        amount = <Text>{exercise.hold}</Text>;
      } else if (exercise.distance.val){
        amount = <Text>{exercise.distance.val}{exercise.distance.units}</Text>;
      }
      /* jshint ignore:end*/
    };

    var renderLoad = function(exercise) {
      /* jshint ignore:start*/
      if(exercise.load.val) {
        load = <Text>{exercise.load.val}{exercise.load.units}</Text>;
      }
      /* jshint ignore:end*/
    };

    var renderMovement = function(exercise) {
      /* jshint ignore:start*/
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

module.exports = viewExercise;
