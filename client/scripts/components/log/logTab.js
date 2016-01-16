/*
* @Author: vincetam
* @Date:   2016-01-09 17:03:49
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-16 10:37:41
*/

'use strict';

var React = require('react-native');
var Log = require('./log');
var modalActions = require('../../actions/modalActions');
var editWorkoutActions = require('../../actions/editWorkoutActions');

var {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  Image
} = React;

var RouteStack = {
  app: {
    name: 'Log',
    component: Log,
  }
};


var LogTab = React.createClass({
  goToScene: function(component, name){
    this.refs.logNav.push({
      component: component,
      name: name
    });
  },
  resetRoute: function(route){
    this.refs.logNav.popToTop();
  },
  renderScene: function(route, navigator){
    var Component = route.component;

    return (
      <Component
        goToScene={this.goToScene}
        onDoWorkout={this.props.onDoWorkout} />
    );
  },
  render: function() {
    return (
      /* jshint ignore:start */
      <Navigator
        ref="logNav"
        initialRoute={RouteStack.app}
        renderScene={this.renderScene}
        sceneStyle={styles.scene}
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
        { index > 0 ?
          <Image
            style={{height: 22, width: 12}}
            source={ require('image!backArrow') } /> : null }
      </TouchableOpacity>
      /* jshint ignore:end */
        );
  },

  RightButton: function(route, navigator, index, navState) {
    return (
      /* jshint ignore:start */
      <TouchableOpacity
        style={styles.navBarComponentContainer}
        onPress={ () => {
          console.log('search button pressed')
        }}>
        <Image
          source={ require('image!search') } />
      </TouchableOpacity>
      /* jshint ignore:end */
    );
  },

  Title: function(route, navigator, index, navState) {
    return (
      /* jshint ignore:start */
      <View style={styles.navBarComponentContainer}>
        <Text style={styles.navBarTitleText}>{route.name}</Text>
      </View>
      /* jshint ignore:end */
    );
  },
};

var styles = StyleSheet.create({
  scene: {
    flex: 1,
    paddingTop: 64, //offset nav bar from covering scene
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: '#4DBA97',
    alignItems: 'center',
  },
  navBarComponentContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 10
  },
  navBarTitleText: {
    fontFamily: 'Avenir',
    fontSize: 20,
    color: 'white'
  },
  navBarSideText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 17,
    color: 'white'
  }
});

module.exports = LogTab;