'use strict';

var React = require('react-native');
var doWorkoutActions = require('../../actions/doWorkoutActions');
var modifyWorkoutActions = require('../../actions/modifyWorkoutActions');

//Load components
var ModifyWorkout = require('../modifyWorkout/modifyWorkout.js');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var DoWorkoutBar = React.createClass({
  _handleModifyWorkoutPress: function(workout) {
    modifyWorkoutActions.modifyWorkout(workout);

    this.props.navigator.push({
      title: 'Modify Workout',
      component: ModifyWorkout
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
