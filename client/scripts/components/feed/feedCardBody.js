/*
* @Author: vincetam
* @Date:   2015-07-30 13:09:28
* @Last Modified by:   vincetam
* @Last Modified time: 2015-07-30 14:29:14
*/

'use strict';

var React = require('react-native');
var feedActions = require('../../actions/feedActions');

var {
  StyleSheet,
  Text,
  View,
} = React;

var FeedCardBody = React.createClass({

  render: function(){
    var type = this.props.type;
    var rounds = this.props.rounds;
    var exercises = this.props.exercises;

    return (
      /* jshint ignore:start */
      <View>
        <Text>{type}</Text>
        <Text>Rounds {rounds}</Text>
        <Text>{exercises}</Text>
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = FeedCardBody;
