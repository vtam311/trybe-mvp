'use strict';

var React = require('react-native');
var feedStore = require('../../stores/feedStore');
var feedActions = require('../../actions/feedActions');
var Card = require('./feedCard');

var {
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
    if (this.state.cards) {
      var cards = this.state.cards
      .map(function (card, idx) {
        return ([
          /* jshint ignore:start */
          <Card key={idx} index={idx} card={card} />,
          /* jshint ignore:end */
        ]);
      });
    }

    return (
      <View>
        {cards}
      </View>
    );
  }
});

module.exports = Feed;
