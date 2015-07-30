/*
* @Author: vincetam
* @Date:   2015-07-30 13:08:17
* @Last Modified by:   VINCE
* @Last Modified time: 2015-07-30 13:47:24
*/

'use strict';

var React = require('react-native');
var feedActions = require('../../actions/feedActions');

var {
  StyleSheet,
  Text,
  View,
} = React;

var FeedCardHeader = React.createClass({

  render: function(){
    var username = this.props.username;
    var activity = this.props.activity;
    var when = this.props.when;

    return (
      /* jshint ignore:start */
      <View>
        <Text>{username}</Text>
        <Text>{activity}</Text>
        <Text>{when}</Text>
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = FeedCardHeader;
