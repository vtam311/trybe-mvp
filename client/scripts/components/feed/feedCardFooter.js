/*
* @Author: vincetam
* @Date:   2015-07-30 13:09:33
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-27 18:19:09
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
    viewWorkoutActions.setWorkout(separateWorkout);

    //To do: clear workout tab's nav stack
    workoutTabActions.setView('Today\'s Workout');
    indexActions.setTab('workout');
  },

  render: function(){
    var workout = this.props.workout;
    var likes = this.props.likes;
    //Not adding comments for each card feature, yet
    // var comments = this.props.comments;

    return (
      /* jshint ignore:start */
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>{ likes } Likes</Text>
        <TouchableHighlight
          onPress={ () => this.viewWorkout(workout) }>
          <Text style={styles.footerText}>Do Now</Text>
        </TouchableHighlight>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10
  },
  footerText: {
    fontFamily: 'Helvetica',
    color: '#434343'
  }
});

module.exports = FeedCardFooter;
