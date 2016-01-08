/*
* @Author: vincetam
* @Date:   2015-07-30 13:09:33
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-07 21:23:59
*/

'use strict';

var React = require('react-native');
var indexActions = require('../../actions/indexActions');
var editWorkoutActions = require('../../actions/editWorkoutActions');
var viewWorkoutActions = require('../../actions/viewWorkoutActions');
var newWorkout = require('../../common/newWorkout');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var FeedCardFooter = React.createClass({
  viewWorkout: function(workout) {
    var separateWorkout = newWorkout(workout);
    //set workout in workout tab
    editWorkoutActions.setWorkout(separateWorkout);

    //update editWorkoutStore's customOrDefault value to custom
    editWorkoutActions.setDefaultOrCustom('custom');

    //ensure all parts of workout in viewWorkout
    //are initialized to false for isLogged, as is new workout
    viewWorkoutActions.initPartsAreLogged();

    //reset workout tab stack to viewWorkout scene
    this.props.onDoWorkout();
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
