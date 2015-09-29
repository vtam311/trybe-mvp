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
    feedStore.addChangeListener(this._onChange);
    feedActions.getCards();
  },
  componentWillUnmount: function(){
    feedStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    var cards = feedStore.getCards();
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(cards)
    });
  },

  renderRow: function(card){
    return (
      /* jshint ignore:start */
      <View style={ styles.feedCard }>
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
          <Text style={ styles.headerText }>trybe</Text>
        </View>
        <View style={ styles.content }>
          <ListView dataSource={ this.state.dataSource } renderRow={ this.renderRow }/>
        </View>
      </View>
      );
    /* jshint ignore:end */
  }
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#f3f3f3'
  },
  header: {
    flex: .1,
    backgroundColor: '#4dba97',
  },
  headerText: {
    marginTop: 20,
    textAlign: 'center',
    color: 'white',
    fontSize: 28,
    fontFamily: 'Avenir Next'
  },
  content: {
    flex: .9
  },
  feedCard: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 10
    //Uncomment if want cards to not span length of pg
    // marginLeft: 10,
    // marginRight: 10

  }
});

module.exports = Feed;
