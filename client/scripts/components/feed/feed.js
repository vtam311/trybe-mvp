'use strict';

var React = require('react-native');
var feedActions = require('../../actions/feedActions');

//Load components
var FeedCard = require('./feedCard');

var {
  StyleSheet,
  Text,
  View,
  ListView
} = React;

var Feed = React.createClass({
  getInitialState: function(){
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
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
    var cards = this.props.store.getCards();
    // console.log('in feed _onChange, cards:', cards);
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(cards)
    });
  },

  renderRow: function(card){
    return (
      /* jshint ignore:start */
      <View>
        <FeedCard card={card}/>
      </View>
      /* jshint ignore:end */
    );
  },
  render: function(){
    /* jshint ignore:start */
    return (
      <View style={ styles.container }>
        <View style={ styles.header }>
          <Text>trybe</Text>
        </View>
        <ListView dataSource={ this.state.dataSource } renderRow={ this.renderRow } />
      </View>
      );
    /* jshint ignore:end */
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
