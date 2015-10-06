'use strict';

var React = require('react-native');
var feedStore = require('../../stores/feedStore');
var feedActions = require('../../actions/feedActions');

//Load components
var FeedCard = require('./feedCard');
var ViewWorkoutBody = require('../../common/viewWorkoutComponents/viewWorkoutBody');
var ProgressBar = require('react-native-progress-bar');

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
      //To do: retrieve from feedStore
      userStatuses: [
        {user: 'Vince', completed: true},
        {user: 'Wilbert', completed: false},
        {user: 'George', completed: true},
        {user: 'Andy', completed: false}
      ],
      progressBar: 0,
      //To do: retrieve from feedStore
      progress: .75,
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
    setTimeout((function() {
      if(this.state.progressBar < this.state.progress){
        this.setState({ progressBar: Math.min(this.state.progressBar + .10, this.state.progress)});
      }
    }).bind(this), 1000);

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
              <View style={styles.trybeProgress}>
                <Text style={styles.trybeName}>{trybeWorkout.trybe}</Text>
                <View style={ styles.progress }>
                  <ProgressBar
                    fillStyle={{backgroundColor: '#4dba97', height: 10}}
                    backgroundStyle={{backgroundColor: '#cccccc', borderRadius: 2}}
                    style={{marginTop: 10, marginBottom: 5, width: 300, height: 10}}
                    easingDuration={3000}
                    progress={this.state.progressBar}/>
                </View>
              </View>

              <View style={ styles.chat }>
                <View style={ styles.chatBarContainer }>
                  <TextInput
                    style={styles.chatBar}
                    placeholder={'How can we support you?'}/>
                </View>
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
    flex: 100,
    flexDirection: 'column',
    backgroundColor: '#f3f3f3',
  },
  header: {
    flex: 10,
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
    flex: 90,
  },
  contentContainer: {
    flex: 100,
    flexDirection: 'column',
  },
  trybeProgress: {
    flex: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: -20,
  },
  trybeName: {
    marginTop: 5
  },
  progress: {
    alignItems: 'center'
  },
  chat: {
    flex: 10,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  chatBar: {
    height: 30,
    width: 300,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  // chatBarContainer: {
  //   flex: .1
  // },
  cards: {
    flex: 80,
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
