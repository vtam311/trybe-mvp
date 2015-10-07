'use strict';

var React = require('react-native');
var viewWorkoutActions = require('../../actions/viewWorkoutActions');
var modifyWorkoutActions = require('../../actions/modifyWorkoutActions');

//Load components
var ModifyWorkout = require('../modifyWorkout/modifyWorkout.js');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var ViewWorkoutToolbar = React.createClass({
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
      <View style={styles.toolbarContainer}>
        <TouchableHighlight
          onPress={this._handleModifyWorkoutPress.bind(this, this.props.workout)}>
          <Text>Modify</Text>
        </TouchableHighlight>
        <Text>Save</Text>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  toolbarContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

module.exports = ViewWorkoutToolbar;
