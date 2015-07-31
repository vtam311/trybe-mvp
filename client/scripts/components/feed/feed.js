'use strict';

var React = require('react-native');
var feedActions = require('../../actions/feedActions');

//Load components
var FeedCard = require('./feedCard');

var {
  StyleSheet,
  Text,
  View,
} = React;

var Feed = React.createClass({
  getInitialState: function(){
    return {
      cards: this.props.store.getCards()
    };
  },
  componentDidMount: function(){
    this.props.store.addChangeListener(this._onChange);
    feedActions.getCards();
  },
  componentWillUnmount: function(){
    this.props.store.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      cards: this.props.store.getCards()
    });
  },
  render: function(){
    if (this.state.cards) {
      var cards = this.state.cards
      .map(function(card, idx) {
        return ([
          /* jshint ignore:start */
          <FeedCard index={idx} card={card} />,
          /* jshint ignore:end */
        ]);
      });
    }

    return (
      <View>
        <Text>Feed</Text>
        <View>
          {cards}
        </View>
      </View>
    );
  }
});

module.exports = Feed;
