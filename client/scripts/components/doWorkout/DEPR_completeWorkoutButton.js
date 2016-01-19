/*
* @Author: VINCE
* @Date:   2015-09-25 11:10:40
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-12 18:24:21
*/

'use strict';

var React = require('react-native');
var doWorkoutActions = require('../../actions/doWorkoutActions');
var tabActions = require('../../actions/tabActions');
var logActions = require('../../actions/logActions');


var {
  StyleSheet,
  Text,
  TouchableHighlight
} = React;

var CompleteWorkoutButton = React.createClass({
  sendWorkoutToLog: function(workout){
    //Should send to db. This is temp solution for prototype
    var card = {
      workout: workout
    }
    logActions.tempAddCard(card);
  },
  sendWorkoutToFeed: function(workout){
    //TO DO: send workout to trybe feed
  },
  sendUserToLog: function(){
    tabActions.setTab('profile');
  },
  _handleCompleteButtonPress: function(workout){
    this.sendWorkoutToLog(workout);
    this.sendUserToLog();
  },
  render: function(){
    var workout = this.props.workout;

    return (
      /* jshint ignore:start */
      <TouchableHighlight
        onPress={this._handleCompleteButtonPress.bind(this, workout)}>
        <Text>Complete</Text>
      </TouchableHighlight>
      /* jshint ignore:end */
    );
  }
});

module.exports = CompleteWorkoutButton;
