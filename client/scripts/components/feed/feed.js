'use strict';

var React = require('react-native');
var feedStore = require('../../stores/feedStore');
var feedActions = require('../../actions/feedActions');

//Load components
var FeedCard = require('./feedCard');
var ViewWorkoutBody = require('../../common/workoutViews/viewWorkoutBody');
var ChatBar = require('./chatBar');

var {
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
  TextInput
} = React;

var Feed = React.createClass({
  getInitialState: function(){
    return {
      trybeWorkout: feedStore.getTrybeWorkout(),
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
    };
  },
  componentDidMount: function(){
    feedStore.addChangeListener(this._onChange);
    feedActions.getTrybeWorkout();
    feedActions.getCards();
  },
  componentWillUnmount: function(){
    feedStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    var cards = feedStore.getCards();
    this.setState({
      trybeWorkout: feedStore.getTrybeWorkout(),
      dataSource: this.state.dataSource.cloneWithRows(cards)
    });
  },
  renderRow: function(card){
    return (
      /* jshint ignore:start */
      <View style={ styles.feedCard }>
        <FeedCard card={card} />
      </View>
      /* jshint ignore:end */
    );
  },
  render: function(){
    var trybeWorkout = this.state.trybeWorkout;

    //Load page once the trybeWorkout is loaded
    if(trybeWorkout.trybe) {
      return (
        /* jshint ignore:start */
        <View style={ styles.container }>
          <View style={ styles.header }>
            <Text style={ styles.headerText }>trybe</Text>
          </View>

          <View style={ styles.content }>
            <View style={styles.contentContainer}>

              <View style={ styles.chat }>
                <ChatBar />
              </View>

              <View style={ styles.cards }>
                <ListView dataSource={ this.state.dataSource } renderRow={ this.renderRow }/>
              </View>
            </View>
          </View>

        </View>
        /* jshint ignore:end */
      );
    } else {
      return (
        /* jshint ignore:start */
        <View><Text>Loading Workout</Text></View>
        /* jshint ignore:end */
      );
    }
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f3f3f3',
  },
  header: {
    flex: .1,
    backgroundColor: '#4dba97',
    justifyContent: 'center'
  },
  headerText: {
    marginTop: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 28,
    fontFamily: 'Avenir Next'
  },
  content: {
    flex: .9,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around' //doesn't do as expected
  },
  trybeName: {
    marginTop: 5
  },
  chat: {
    flex: .1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  cards: {
    flex: .8,
    marginTop: -35,
  },
  feedCard: {
    backgroundColor: '#fff',
    marginBottom: 10,
    //removes gray space between header and content,
    //but it makes cards collide.
    // marginTop: -20
  },
});

module.exports = Feed;
