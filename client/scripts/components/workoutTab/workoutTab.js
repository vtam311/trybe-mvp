'use strict';

var React = require('react-native');
var workoutTabActions = require('../../actions/workoutTabActions');

//Load components
var ViewWorkout = require('../viewWorkout/viewWorkout');

var {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
} = React;

var RouteStack = {
  app: {
    name: 'Today',
    index: 0,
    component: ViewWorkout,
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
      <Component
        goToScene={this.goToScene}
        openExerciseModal={this.props.openExerciseModal}
        openPartModal={this.props.openPartModal}
        openDateModal={this.props.openDateModal} />
    );
  },
  render: function() {
    return (
      /* jshint ignore:start */
      <Navigator
        ref="workoutNav"
        initialRoute={RouteStack.app}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            style={styles.navBar}
            routeMapper={NavBarRouteMapper} />
        } />
      /* jshint ignore:end */
    );
  }
});

var NavBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    return (
      /* jshint ignore:start */
      <TouchableOpacity
        style={styles.navBarComponentContainer}
        onPress={ () => {
          if(index > 0) {
            navigator.pop();
          }
        }}>
      </TouchableOpacity>
      /* jshint ignore:end */
    );
  },

  RightButton: function(route, navigator, index, navState) {
    return null;
  },

  Title: function(route, navigator, index, navState) {
    return (
      /* jshint ignore:start */
      <View style={styles.navBarComponentContainer}>
        <Text style={styles.navBarTitleText}>{route.name}</Text>
      </View>
      /* jshint ignore:end */
    );
  }
};

var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: '#4DBA97',
    alignItems: 'center'
  },
  navBarComponentContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  navBarTitleText: {
    margin: 10,
    fontFamily: 'Avenir',
    fontSize: 20,
    color: 'white'
  },
});

module.exports = WorkoutTab;
