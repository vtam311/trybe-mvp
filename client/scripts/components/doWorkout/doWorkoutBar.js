'use strict';

var React = require('react-native');
var doWorkoutActions = require('../../actions/doWorkoutActions');
var createWorkoutActions = require('../../actions/createWorkoutActions');

//Load components
var CreateWorkout = require('../createWorkout/createWorkout.js');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var DoWorkoutBar = React.createClass({
  _handleModifyWorkoutPress: function(workout) {
    createWorkoutActions.modifyWorkout(workout);

    this.props.navigator.push({
      title: 'Modify Workout',
      component: CreateWorkout
    });
  },
  render: function(){
    return (
      /* jshint ignore:start */
      <View>
        <TouchableHighlight
          onPress={this._handleModifyWorkoutPress.bind(this, this.props.workout)}>
          <Text>Modify</Text>
        </TouchableHighlight>
        <Text>Try Later | Custom Workout</Text>
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = DoWorkoutBar;
