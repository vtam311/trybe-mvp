/*
* @Author: VINCE
* @Date:   2015-09-25 11:53:20
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-16 10:11:02
*/

'use strict';

var React = require('react-native');
var tabActions = require('../../actions/tabActions');
var editWorkoutActions = require('../../actions/editWorkoutActions');
var viewWorkoutActions = require('../../actions/viewWorkoutActions');
var newWorkout = require('../../common/newWorkout');

var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
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
    tabActions.setTab('workout');
  },
  render: function(){
    var workout = this.props.workout;

    return (
      /* jshint ignore:start */
      <View style={styles.feedCardFooter}>
        <TouchableOpacity
          onPress={ () => this.doWorkout(workout) }>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.buttonText}>Retry</Text>
            <Image
              source={require('image!tryIcon')}
              style={styles.tryIcon} />
          </View>
        </TouchableOpacity>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  feedCardFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderTopWidth: .5,
    borderColor: 'rgba(155,155,155,.7)',
    paddingTop: 10,
  },
  tryIcon: {
    height: 14,
    width: 12,
    marginLeft: 6,
    marginTop: 2,
    marginRight: 3
  },
  buttonText: {
    color: '#8D867E',
    fontSize: 15,
    fontWeight: '600'
  }
});

module.exports = LogCardFooter;
