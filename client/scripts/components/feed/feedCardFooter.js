/*
* @Author: vincetam
* @Date:   2015-07-30 13:09:33
* @Last Modified by:   vincetam
* @Last Modified time: 2015-08-20 12:00:43
*/

'use strict';

var React = require('react-native');
var feedActions = require('../../actions/feedActions');
var indexActions = require('../../actions/indexActions');
var doWorkoutActions = require('../../actions/doWorkoutActions');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var FeedCardFooter = React.createClass({
  doWorkout: function(workout) {
    doWorkoutActions.setSelectedWorkout(workout);
    indexActions.setTab('workout');
  },

  render: function(){
    var workout = this.props.workout;
    var likes = this.props.likes;
    var comments = this.props.comments;

    return (
      /* jshint ignore:start */
      <View>
        <TouchableHighlight onPress={ () => this.doWorkout(workout) }>
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
