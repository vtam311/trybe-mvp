'use strict';

var React = require('react-native');
var feedStore = require('../../stores/feedStore');
var feedActions = require('../../actions/feedActions');

//Load components
var FeedCard = require('./feedCard');
var ViewWorkoutBody = require('../../common/viewWorkoutComponents/viewWorkoutBody');

var {
  StyleSheet,
  Text,
  View,
  ListView
} = React;

var Feed = React.createClass({
  getInitialState: function(){
    return {
      trybeWorkout: feedStore.getTrybeWorkout(),
      //For rendering a ListView of users' results
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
        <FeedCard card={card}/>
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
              <View style={ styles.trybeWorkout }>
                <Text>{trybeWorkout.trybe}</Text>
                <Text>Day {trybeWorkout.day}</Text>
              </View>

              <View style={ styles.progress }>
                <Text>Progress Bar</Text>
                <Text>Progress Bar</Text>
                <Text>Progress Bar</Text>
                <Text>Progress Bar</Text>
                <Text>Progress Bar</Text>
                <Text>Progress Bar</Text>
                <Text>Progress Bar</Text>
              </View>

              <View style={ styles.results }>
                <ListView dataSource={ this.state.dataSource } renderRow={ this.renderRow }/>
              </View>
            </View>
          </View>
        </View>
        /* jshint ignore:end */
      );
    } else {
      return (
        <View><Text>Loading Workout</Text></View>
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
    flex: .08,
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
    flex: .92,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  trybeWorkout: {
    // flex: .1,
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10
  },
  progress: {
    // flex: .3
  },
  results: {
    flex: 1
  },
  feedCard: {
    backgroundColor: '#fff',
    marginBottom: 10,
    //removes gray space between header and content,
    //but isn't a true fix
    // marginTop: -20
  }
});

module.exports = Feed;
