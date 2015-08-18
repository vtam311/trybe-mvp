'use strict';

var React = require('react-native');
var indexStore = require('./client/scripts/stores/indexStore');
var feedStore = require('./client/scripts/stores/feedStore');
var doWorkoutStore = require('./client/scripts/stores/doWorkoutStore');
var indexActions = require('./client/scripts/actions/indexActions');

//Load components
var Feed = require('./client/scripts/components/feed/feed');
var DoWorkout = require('./client/scripts/components/doWorkout/doWorkout');
var Workout = require('./client/scripts/components/workout/workout');

var {
  AppRegistry,
  StyleSheet,
  Text,
  TabBarIOS,
  StatusBarIOS,
  View,
} = React;


var Trybe = React.createClass({
  getInitialState: function(){
    return {
      selectedTab: indexStore.getTab()
    };
  },
  componentDidMount: function(){
    indexStore.addChangeListener(this._onChange);
    StatusBarIOS.setStyle(1);
  },
  componentWillUnmount: function(){
    indexStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      selectedTab: indexStore.getTab()
    });
  },
  changeTab: function(tabName) {
    indexActions.setTab(tabName);
  },

  render: function() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title='Profile'
          icon={ require('image!profile') }
          onPress={ () => this.changeTab('profile') }
          selected={ this.state.selectedTab === 'profile' }>
          <View style={ styles.pageView }>
            <Text>Profile</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='Home'
          icon={ require('image!home') }
          onPress={ () => this.changeTab('feed') }
          selected={ this.state.selectedTab === 'feed' }>
          <View style={ styles.pageView }>
            <Feed store={ feedStore }/>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='Workout'
          icon={ require('image!workout') }
          onPress={ () => this.changeTab('doWorkout') }
          selected={ this.state.selectedTab === 'doWorkout' }>
          <View style={ styles.pageView }>
            <DoWorkout store={ doWorkoutStore } />
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  pageView: {
    backgroundColor: '#fff',
    flex: 1
  }
});

AppRegistry.registerComponent('trybe', () => Trybe);
