/*
* @Author: vincetam
* @Date:   2015-07-30 13:09:33
* @Last Modified by:   VINCE
* @Last Modified time: 2015-09-25 13:27:07
*/

'use strict';

var React = require('react-native');
var indexActions = require('../../actions/indexActions');
var workoutTabActions = require('../../actions/workoutTabActions');
var viewWorkoutActions = require('../../actions/viewWorkoutActions');
var copyObjectHelper = require('../../common/copyObjectHelper');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var FeedCardFooter = React.createClass({
  viewWorkout: function(workout) {
    var separateWorkout = copyObjectHelper(workout);
    viewWorkoutActions.setSelectedWorkout(separateWorkout);

    //To do: clear workout tab's nav stack
    workoutTabActions.setView('Today\'s Workout');
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
          onPress={ () => this.viewWorkout(workout) }>
          <Text>Do Workout</Text>
        </TouchableHighlight>
        <Text>Likes { likes }</Text>
        <Text>Comments { comments }</Text>
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = FeedCardFooter;
