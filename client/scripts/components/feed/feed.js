'use strict';

var React = require('react-native');
var feedStore = require('../../stores/feedStore');
var feedActions = require('../../actions/feedActions');

//Load components
var FeedCard = require('./feedCard');

var {
  StyleSheet,
  Text,
  View,
} = React;

var Feed = React.createClass({
  // getInitialState: function(){
  //   return {
  //     cards: feedActions.getCards()
  //   };
  // },
  // componentDidMount: function(){
  //   feedStore.addChangeListener(this._onChange);
  // },
  // componentWillUnmount: function(){
  //   feedStore.removeChangeListener(this._onChange);
  // },
  // _onChange: function(){
  //   this.setState({
  //     list: feedStore.getCards()
  //   });
  // },
  render: function(){
    if (this.props.cards) {
      var cards = this.props.cards
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
