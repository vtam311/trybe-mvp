/*
* @Author: vincetam
* @Date:   2015-10-29 17:05:47
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-14 14:16:18
*/

'use strict';

var React = require('react-native');
var tabStore = require('../stores/tabStore');
var tabActions = require('../actions/tabActions');

//Load components
var FeedTab = require('../components/feed/feed');
var WorkoutTab = require('../components/viewWorkout/workoutTab');
var LogTab = require('../components/log/logTab');

var {
  AppRegistry,
  StyleSheet,
  Text,
  TabBarIOS,
  StatusBarIOS,
  View,
} = React;


var TabBar = React.createClass({
  getInitialState: function(){
    return {
      selectedTab: tabStore.getTab()
    };
  },
  componentDidMount: function(){
    tabStore.addChangeListener(this._onChange);
    StatusBarIOS.setStyle(1);
  },
  componentWillUnmount: function(){
    tabStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      selectedTab: tabStore.getTab()
    });
  },
  changeTab: function(tabName) {
    tabActions.setTab(tabName);
  },

  render: function() {
    return (
      /* jshint ignore:start */
      <TabBarIOS
        tintColor='#4DBA97' >
        <TabBarIOS.Item
          title='Log'
          icon={ require('image!log') }
          onPress={ () => this.changeTab('profile') }
          selected={ this.state.selectedTab === 'profile'} >
          <LogTab
            onDoWorkout={this.props.onDoWorkout} />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title='Home'
          icon={ require('image!feed') }
          onPress={ () => this.changeTab('feed') }
          selected={ this.state.selectedTab === 'feed' }>
          <FeedTab
            onDoWorkout={this.props.onDoWorkout} />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title='Workout'
          icon={ require('image!workout') }
          onPress={ () => this.changeTab('workout') }
          selected={ this.state.selectedTab === 'workout' }>
          <WorkoutTab
            style={styles.tabContent}
            events={this.props.events} />
        </TabBarIOS.Item>
      </TabBarIOS>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  tabContent: {
    paddingBottom: 50
  }
});

module.exports = TabBar;