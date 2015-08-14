/*
* @Author: vincetam
* @Date:   2015-07-30 12:52:52
* @Last Modified by:   vincetam
* @Last Modified time: 2015-08-13 16:22:55
*/

'use strict';

var React = require('react-native');
var feedActions = require('../../actions/feedActions');

//Load components
var FeedCardHeader = require('./feedCardHeader');
var FeedCardBody = require('./feedCardBody');
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
      <View>
        <FeedCardHeader
          username={ card.username }
          activity={ card.activity }
          when={ card.createdAt }/>
        <FeedCardBody
          workout={ card.workout }/>
        <FeedCardFooter
          workout={ card.workout }
          likes={ card.likes }
          comments={ card.comments }/>
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = FeedCard;
