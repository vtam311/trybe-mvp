/*
* @Author: VINCE
* @Date:   2015-09-25 11:53:20
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-10 17:13:56
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

var LogCardFooter = React.createClass({
  editWorkout: function(workout) {
    //change viewWorkoutBody to editWorkout in logCard?
  },
  doWorkout: function(workout) {
    //copies a separate workout object to send to viewWorkout
    var separateWorkout = newWorkout(workout);
    editWorkoutActions.setWorkout(separateWorkout);

    //notify editWorkoutStore to show custom workout
    editWorkoutActions.setDefaultOrCustom('custom');

    //ensure all parts of workout in viewWorkout
    //are initialized to false for isLogged, as is new workout
    viewWorkoutActions.initPartsAreLogged();

    //reset stack in workout tab to viewWorkout scene
    this.props.onDoWorkout();
    //set tab to workout tab
    indexActions.setTab('workout');
  },
  render: function(){
    var workout = this.props.workout;

    return (
      /* jshint ignore:start */
      <View style={styles.feedCardFooter}>
        <TouchableHighlight
          onPress={ () => this.doWorkout(workout) }>
          <Text>Redo</Text>
        </TouchableHighlight>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  feedCardFooter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // borderTopWidth: .5,
    borderColor: '#c8c7cc',
    paddingTop: 10
  }
});

module.exports = LogCardFooter;
