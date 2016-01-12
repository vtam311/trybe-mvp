/*
* @Author: vincetam
* @Date:   2015-10-29 17:05:47
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-12 12:47:56
*/

'use strict';

var React = require('react-native');
var indexStore = require('../stores/indexStore');
var indexActions = require('../actions/indexActions');

//Load components
var FeedTab = require('../components/feed/feed');
var WorkoutTab = require('../components/workoutTab/workoutTab');
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
      /* jshint ignore:start */
      <TabBarIOS
        tintColor='#4DBA97' >
        <TabBarIOS.Item
          title='Profile'
          icon={ require('image!profile') }
          onPress={ () => this.changeTab('profile') }
          selected={ this.state.selectedTab === 'profile'} >
          <LogTab
            onDoWorkout={this.props.onDoWorkout} />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title='Home'
          icon={ require('image!home') }
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