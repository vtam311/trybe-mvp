'use strict';

// import React, { AppRegistry, StyleSheet, Text, TabBarIOS, StatusBarIOS, View } from 'react-native';

var React = require('react-native');
var indexStore = require('./client/scripts/stores/indexStore');
var indexActions = require('./client/scripts/actions/indexActions');

//Load components
var FeedTab = require('./client/scripts/components/feed/feed');
var WorkoutTab = require('./client/scripts/components/workoutTab/workoutTab');
var LogTab = require('./client/scripts/components/log/log');

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
          <LogTab/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title='Home'
          icon={ require('image!home') }
          onPress={ () => this.changeTab('feed') }
          selected={ this.state.selectedTab === 'feed' }>
          <FeedTab/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title='Workout'
          icon={ require('image!workout') }
          onPress={ () => this.changeTab('workout') }
          selected={ this.state.selectedTab === 'workout' }>
          <WorkoutTab/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

var styles = StyleSheet.create({
  tabView: {
    // fontFamily: 'Avenir'
  }
});

AppRegistry.registerComponent('trybe', () => Trybe);
