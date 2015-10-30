'use strict';

var React = require('react-native');
var workoutTabActions = require('../../actions/workoutTabActions');
// var workoutTabStore = require('../../stores/workoutTabStore'); //not using since 10.29.15

//Load components
var ViewWorkout = require('../viewWorkout/viewWorkout');

var {
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Navigator
} = React;

var RouteStack = {
  app: {
    component: ViewWorkout
  }
};

var WorkoutTab = React.createClass({
  getInitialState: function(){
    return {
    };
  },
  goToScene: function(component){
    this.refs.workoutNav.push({
      component: component
    });
  },
  renderScene: function(route, navigator){
    var Component = route.component;

    return (
      <Component goToScene={this.goToScene} />
    );
  },
  render: function() {
    return (
      /* jshint ignore:start */
      <Navigator
        ref="workoutNav"
        initialRoute={RouteStack.app}
        renderScene={this.renderScene} />
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // height: 700
  }
});

module.exports = WorkoutTab;
