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
          <FeedCard index={idx} card={card}/>,
          /* jshint ignore:end */
        ]);
      });
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>trybe</Text>
        </View>
        <View style={styles.content}>
          {cards}
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 40,
    backgroundColor: '#4dba97'
  }
});

module.exports = Feed;
