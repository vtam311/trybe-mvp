/*
* @Author: VINCE
* @Date:   2015-09-25 11:10:40
* @Last Modified by:   VINCE
* @Last Modified time: 2015-09-25 11:41:00
*/

'use strict';

var React = require('react-native');
var doWorkoutActions = require('../../actions/doWorkoutActions');
//Create action to send workout to log
var indexActions = require('../../actions/indexActions');


var {
  StyleSheet,
  Text,
  TouchableHighlight
} = React;

var CompleteWorkoutButton = React.createClass({
  sendWorkoutToLog: function(workout){

  },
  sendWorkoutToFeed: function(workout){
    //TO DO: send workout to trybe feed
  },
  sendUserToLog: function(){
    indexActions.setTab('profile');
  },
  _handleCompleteButtonPress: function(workout){
    //send workout to log
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
