'use strict';

var React = require('react-native');
var viewWorkoutActions = require('../../actions/viewWorkoutActions');
var renderTimeHelper = require('../renderTimeHelper');

var {
  StyleSheet,
  Text,
  View,
} = React;

var viewExercise = React.createClass({

  render: function(){
    var exercise = this.props.exercise;
    var amount, load, movement;

    var renderAmount = function() {
      //Renders amount for reps, hold, or distance
      //For now, there will only ever one of: reps, hold, or distance.
      /* jshint ignore:start*/
      if(exercise.reps){
        amount = <Text style={styles.exerciseText}>{exercise.reps}</Text>;
      } else if (exercise.time){
        amount = <Text style={styles.exerciseText}>{renderTimeHelper(exercise.time)}</Text>;
      } else if (exercise.distance && exercise.distance.val) {
        amount = <Text style={styles.exerciseText}>{exercise.distance.val}{exercise.distance.units}</Text>;
      }
      /* jshint ignore:end*/
    };

    var renderLoad = function() {
      /* jshint ignore:start*/
      if(exercise.load.val) {
        load = <Text style={styles.exerciseText}>at {exercise.load.val}{exercise.load.units}</Text>;
      }
      /* jshint ignore:end*/
    };

    var renderMovement = function() {
      /* jshint ignore:start*/
      movement = <Text style={styles.exerciseText}>{exercise.name}</Text>;
      /* jshint ignore:end*/
    };

    var renderExercise = function() {
      //Render exercise description such that order is
      //Amount(Reps/Time/Dist), Weight, ExerciseName
      renderAmount();
      renderLoad();
      renderMovement();
    };

    renderExercise();

    return (
      /* jshint ignore:start */
      <View style={styles.exerciseContainer}>
        {amount}
        {movement}
        {load}
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  exerciseContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 5,
    marginLeft: 0
  },
  exerciseText: {
    marginRight: 4,
    fontFamily: 'Avenir Next',
    fontSize: 16,
    color: '#000000'
  }
});

module.exports = viewExercise;
