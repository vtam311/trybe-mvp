/*
* @Author: vincetam
* @Date:   2015-07-30 12:52:52
* @Last Modified by:   VINCE
* @Last Modified time: 2015-10-02 12:41:23
*/

'use strict';

var React = require('react-native');
var feedActions = require('../../actions/feedActions');

//Load components
var FeedCardHeader = require('./feedCardHeader');
var ViewWorkoutBody = require('../../common/viewWorkoutComponents/viewWorkoutBody');
var ViewResults = require('../../common/viewWorkoutComponents/viewResults');
var FeedCardFooter = require('./feedCardFooter');

var {
  StyleSheet,
  Text,
  View,
} = React;

var FeedCard = React.createClass({

  render: function(){
    var card = this.props.card;

    return (
      /* jshint ignore:start */
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <FeedCardHeader
            username={ card.username }
            activity={ card.activity }
            when={ card.createdAt }/>
        </View>

        <View style={styles.cardWorkout}>
          <ViewWorkoutBody
            workout={ card.workout }/>
        </View>

        <View style={styles.cardWorkoutResults}>
          <ViewResults/>
        </View>

        <View style={styles.separatorLine}></View>

        <View style={styles.cardFooter}>
          <FeedCardFooter
            workout={ card.workout }
            likes={ card.likes }
            comments={ card.comments }/>
        </View>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    borderTopWidth: .5,
    borderBottomWidth: .5,
    borderColor: '#d9d9d9'
  },
  cardHeader: {
    flex: .25,
  },
  cardWorkout: {
    flex: .5,
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10
  },
  cardWorkoutResults: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginLeft: 10,
    marginRight: 10,
  },
  separatorLine: {
    marginLeft: 10,
    marginRight: 10,
    height: .5,
    borderBottomWidth: .5,
    borderBottomColor: '#d9d9d9',
  },
  cardFooter: {
    flex: .25,
  },
});

module.exports = FeedCard;
