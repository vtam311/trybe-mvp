/*
* @Author: vincetam
* @Date:   2015-10-29 17:05:47
* @Last Modified by:   VINCE
* @Last Modified time: 2015-12-18 15:17:41
*/

'use strict';

var React = require('react-native');
var indexStore = require('../stores/indexStore');
var indexActions = require('../actions/indexActions');

//Load components
var FeedTab = require('../components/feed/feed');
var WorkoutTab = require('../components/workoutTab/workoutTab');
var LogTab = require('../components/log/log');

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
          <WorkoutTab
            openExerciseModal={this.props.openExerciseModal}
            openPartModal={this.props.openPartModal}
            openDateModal={this.props.openDateModal} />
        </TabBarIOS.Item>
      </TabBarIOS>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  tabView: {
    // fontFamily: 'Avenir'
  }
});

module.exports = TabBar;