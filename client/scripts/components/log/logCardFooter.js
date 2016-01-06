/*
* @Author: VINCE
* @Date:   2015-09-25 11:53:20
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-06 15:50:46
*/

'use strict';

var React = require('react-native');
var indexActions = require('../../actions/indexActions');
var editWorkoutActions = require('../../actions/editWorkoutActions');
var newWorkout = require('../../common/newWorkout');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var FeedCardFooter = React.createClass({
  editWorkout: function(workout) {
    //change viewWorkoutBody to editWorkout in logCard?
  },
  doWorkout: function(workout) {
    //copies a separate workout object to send to viewWorkout
    var separateWorkout = newWorkout(workout);
    editWorkoutActions.setWorkout(separateWorkout);

    //notify editWorkoutStore to show custom workout
    editWorkoutActions.setDefaultOrCustom('custom');

    //reset stack in workout tab to viewWorkout scene
    this.props.onDoWorkout();
    //set tab to workout tab
    indexActions.setTab('workout');
  },
  render: function(){
    var workout = this.props.workout;
    var likes = this.props.likes;
    var comments = this.props.comments;

    return (
      /* jshint ignore:start */
      <View>
        <TouchableHighlight
          onPress={ () => this.editWorkout(workout) }>
          <Text>Edit</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={ () => this.doWorkout(workout) }>
          <Text>Do Again</Text>
        </TouchableHighlight>
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = FeedCardFooter;
