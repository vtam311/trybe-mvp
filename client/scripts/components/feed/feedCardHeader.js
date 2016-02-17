/*
* @Author: vincetam
* @Date:   2015-07-30 13:08:17
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-12 10:59:54
*/

'use strict';

var React = require('react-native');
var feedActions = require('../../actions/feedActions');

var {
  Image,
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
        <View style={styles.leftSide}>
          <View style={styles.userPicContainer}>
            <Image
              style={styles.userPic}
              source={{uri: this.props.userPicLink}} />
          </View>
          <View style={styles.usernameActivity}>
            <Text style={styles.userText}>{username}</Text>
            <Text style={styles.activityText}>{activity}</Text>
          </View>
        </View>

        <View style={styles.rightSide}>
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
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingBottom: 10,
    borderBottomWidth: .5,
    borderColor: 'rgba(155,155,155,.7)'
  },
  leftSide: {
    flexDirection: 'row',
  },
  userPic: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  usernameActivity: {
    marginRight: 4,
    flexDirection: 'column',
  },
  userText: {
    fontFamily: 'Avenir Next',
    fontSize: 15,
    color: '#929292',
    fontWeight: '600',
    marginTop: 1,
    marginBottom: 2,
  },
  activityText: {
    fontFamily: 'Avenir Next',
    fontSize: 15,
    color: '#9b9b9b',
    fontWeight: '500',
  },
  timeText: {
    fontFamily: 'Avenir Next',
    fontSize: 15,
    color: '#9b9b9b',
    fontWeight: '500',
  }
});

module.exports = FeedCardHeader;
