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
        amount = <Text style={styles.exerciseText}>{exercise.reps}</Text>;
      } else if (exercise.hold){
        amount = <Text style={styles.exerciseText}>{exercise.hold}</Text>;
      } else if (exercise.distance.val){
        amount = <Text style={styles.exerciseText}>{exercise.distance.val}{exercise.distance.units}</Text>;
      }
      /* jshint ignore:end*/
    };

    var renderLoad = function(exercise) {
      /* jshint ignore:start*/
      if(exercise.load.val) {
        load = <Text style={styles.exerciseText}>{exercise.load.val}{exercise.load.units}</Text>;
      }
      /* jshint ignore:end*/
    };

    var renderMovement = function(exercise) {
      /* jshint ignore:start*/
      movement = <Text style={styles.exerciseText}>{exercise.name}</Text>;
      /* jshint ignore:end*/
    };

    //Render exercise description such that order is
    // Amount(Reps/Time/Dist) Weight ExerciseName
    renderAmount(exercise);
    renderLoad(exercise);
    renderMovement(exercise);

    return (
      /* jshint ignore:start */
      <View style={styles.exerciseContainer}>
        {amount}
        {load}
        {movement}
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
    fontFamily: 'Helvetica',
    color: '#434343'
  }
});

module.exports = viewExercise;
