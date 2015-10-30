'use strict';

require("babel/register");

var React = require('react-native');

//Load components
var TabBar = require('./client/scripts/components/tabBar');

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
    };
  },
  componentDidMount: function(){
  },
  componentWillUnmount: function(){
  },
  _onChange: function(){
  },

  render: function() {
    return (
      /* jshint ignore:start */
      <TabBar />
      /* jshint ignore:end */
    );
  }
});


var styles = StyleSheet.create({
  tabView: {
    // fontFamily: 'Avenir'
  }
});

AppRegistry.registerComponent('trybe', () => Trybe);
