/*
* @Author: vincetam
* @Date:   2015-07-30 13:09:33
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-21 10:16:45
*/

'use strict';

var React = require('react-native');
var editWorkoutActions = require('../../actions/editWorkoutActions');
var viewWorkoutActions = require('../../actions/viewWorkoutActions');
var modalActions = require('../../actions/modalActions');
var newWorkout = require('../../common/newWorkout');

var {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
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
        <View style={styles.leftSide}>
          <TouchableOpacity>
            <Image
              source={require('image!fistBump')}
              style={styles.footerIcon} />
          </TouchableOpacity>
          <Text style={styles.footerText}>{ likes } Props</Text>
        </View>
        <View style={styles.rightSide}>
          <TouchableOpacity
            onPress={ () => this.doWorkout(workout) }
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.footerText}>Try</Text>
            <Image
              source={require('image!tryIcon')}
              style={styles.footerIcon} />
          </TouchableOpacity>
        </View>
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
    paddingTop: 10,
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
    borderTopWidth: .5,
    borderColor: 'rgba(155,155,155,.7)'
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  rightSide: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  footerIcon: {
    marginLeft: 5,
    marginRight: 5,
  },
  footerText: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    fontWeight: '600',
    color: '#8D867E'
  },
});

module.exports = FeedCardFooter;
