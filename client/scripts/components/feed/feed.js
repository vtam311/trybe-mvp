'use strict';

var React = require('react-native');
var feedStore = require('../../stores/feedStore');
var feedActions = require('../../actions/feedActions');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Feed = React.createClass({
  getInitialState: function(){
    return {
      cards: feedStore.getCards()
    };
  },
  componentDidMount: function(){
    feedStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    feedStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      list: feedStore.getCards()
    });
  },
  render: function(){
    return (
      <View>
        <Text>
          Feed
        </Text>
      </View>
    );
  }
});

module.exports = Feed;
