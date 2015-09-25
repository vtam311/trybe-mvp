/*
* @Author: VINCE
* @Date:   2015-09-25 11:53:20
* @Last Modified by:   VINCE
* @Last Modified time: 2015-09-25 12:28:56
*/

'use strict';

var React = require('react-native');
var feedActions = require('../../actions/feedActions');
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
    //send user to modifyWorkout view
    indexActions.setTab('workout');
  },
  doWorkout: function(workout) {
    var separateWorkout = copyObjectHelper(workout);
    viewWorkoutActions.setSelectedWorkout(separateWorkout);
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
          onPress={ () => this.editWorkout.bind(this, workout) }>
          <Text>Edit</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={ () => this.doWorkout.bind(this, workout) }>
          <Text>Do Again</Text>
        </TouchableHighlight>
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = FeedCardFooter;
