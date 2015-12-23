'use strict';

var React = require('react-native');
var modifyWorkoutActions = require('../../actions/modifyWorkoutActions');

//Load components
var CreateWorkout = require('../createWorkout/createWorkout');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var ViewWorkoutToolbar = React.createClass({
  _handleModifyWorkoutPress: function(workout) {
    modifyWorkoutActions.modifyWorkout(workout);
    this.props.goToScene(CreateWorkout, 'New Workout');
  },
  render: function(){
    return (
      /* jshint ignore:start */
      <View style={styles.toolbarContainer}>
        <Text>Save</Text>
        <TouchableHighlight
          onPress={this._handleModifyWorkoutPress.bind(this, this.props.workout)}>
          <Text>Modify</Text>
        </TouchableHighlight>
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
