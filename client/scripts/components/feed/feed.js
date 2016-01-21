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
    //Load page once the trybeWorkout is loaded
    var trybeWorkout = this.state.trybeWorkout;
    if(trybeWorkout.trybe) {
      return (
        /* jshint ignore:start */
        <View style={ styles.container }>
          <ListView dataSource={ this.state.dataSource } renderRow={ this.renderRow }/>
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
  feedCard: {
    backgroundColor: '#fff',
    marginBottom: 10,
  },
});

module.exports = Feed;
