/*
* @Author: vincetam
* @Date:   2015-07-30 13:09:33
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-20 21:36:33
*/

'use strict';

var React = require('react-native');
var editWorkoutActions = require('../../actions/editWorkoutActions');
var viewWorkoutActions = require('../../actions/viewWorkoutActions');
var modalActions = require('../../actions/modalActions');
var newWorkout = require('../../common/newWorkout');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var FeedCardFooter = React.createClass({
  doWorkout: function(workout) {
    var separateWorkout = newWorkout(workout);
    //set workout in workout tab
    editWorkoutActions.setWorkout(separateWorkout);

    //update editWorkoutStore's customOrDefault value to custom
    editWorkoutActions.setDefaultOrCustom('custom');

    //ensure all parts of workout in viewWorkout
    //are initialized to false for isLogged, since is new workout
    viewWorkoutActions.initPartsAreLogged();

    modalActions.openViewWorkoutModal();
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
          onPress={ () => this.doWorkout(workout) }>
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
