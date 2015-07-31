'use strict';

var React = require('react-native');

//Load components
var Feed = require('./client/scripts/components/feed/feed');
var feedActions = require('./client/scripts/actions/feedActions');
var feedStore = require('./client/scripts/stores/feedStore');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

var Trybe = React.createClass({
  componentWillMount: function(){
    feedStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    feedStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      cards: feedStore.getCards()
    });
  },
  getInitialState: function(){
    var feedView = 1; //temporary placeholder

    return {
      cards: feedActions.getCards(feedView)
      // cards: feedStore.getCards()
    };
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text>trybe</Text>
        <Feed cards={this.state.cards}/>
      </View>
    );
  }
});

AppRegistry.registerComponent('Trybe', function() {return Trybe});
