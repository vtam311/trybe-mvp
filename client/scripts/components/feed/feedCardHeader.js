/*
* @Author: vincetam
* @Date:   2015-07-30 13:08:17
* @Last Modified by:   vincetam
* @Last Modified time: 2015-10-02 12:24:54
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
    var when = this.props.when; //must convert createdAt to 'x hours ago'

    return (
      /* jshint ignore:start */
      <View style={styles.headerContainer}>
        <View style={styles.usernameActivity}>
          <View style={styles.username}>
            <Text style={styles.userText}>{username}</Text>
          </View>
          <View>
            <Text style={styles.activityText}>{activity}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.timeText}>{when}</Text>
        </View>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10
  },
  usernameActivity: {
    flexDirection: 'row',
  },
  username: {
    marginRight: 4
  },
  userText: {
    fontFamily: 'Helvetica',
    color: '#434343',
    fontWeight: 'bold'
  },
  activityText: {
    fontFamily: 'Helvetica',
    color: 'grey',
    // fontWeight: 'bold'
  },
  timeText: {
    color: 'grey'
  }
});

module.exports = FeedCardHeader;
