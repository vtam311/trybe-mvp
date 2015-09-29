/*
* @Author: vincetam
* @Date:   2015-07-30 13:08:17
* @Last Modified by:   VINCE
* @Last Modified time: 2015-09-29 16:31:43
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
        <View>
          <Text style={styles.headerUserText}>{username}</Text>
        </View>
        <View>
          <Text style={styles.headerTimeText}>{when}</Text>
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
    marginRight: 10
  },
  headerUserText: {
    fontFamily: 'Helvetica',
    color: '#434343'
  },
  headerTimeText: {
    color: 'grey'
  }
});

module.exports = FeedCardHeader;
