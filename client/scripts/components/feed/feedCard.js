/*
* @Author: vincetam
* @Date:   2015-07-30 12:52:52
* @Last Modified by:   vincetam
* @Last Modified time: 2015-07-30 13:01:21
*/

'use strict';

var React = require('react-native');
var feedStore = require('../../stores/feedStore');
var feedActions = require('../../actions/feedActions');

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
        <Text>{card.title}</Text>
        <Text>{card.body}</Text>
        <Text>{card.footer}</Text>
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = FeedCard;