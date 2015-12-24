/*
* @Author: VINCE
* @Date:   2015-09-25 11:53:20
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-24 11:38:08
*/

'use strict';

var React = require('react-native');
var indexActions = require('../../actions/indexActions');
var viewWorkoutActions = require('../../actions/viewWorkoutActions');
var copyObjectHelper = require('../../common/copyObjectHelper');

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
    var separateWorkout = copyObjectHelper(workout);
    viewWorkoutActions.setSelectedWorkout(separateWorkout);
    //reset stack in workout tab to viewWorkout page
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
