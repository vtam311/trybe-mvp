'use strict';

require("babel/register");

var React = require('react-native');

//Load components
var TabBar = require('./client/scripts/components/tabBar');
var CreateExerciseModal = require('./client/scripts/components/createWorkout/createExerciseModal');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} = React;

var RouteStack = {
  app: {
    component: TabBar
  }
};

var Trybe = React.createClass({
  getInitialState: function(){
    return {
      exerciseModalVisible: false
    };
  },
  openExerciseModal: function(){
    this.setState({exerciseModalVisible: true});
  },
  closeExerciseModal: function(){
    this.setState({exerciseModalVisible: false});
  },
  renderScene: function(route, navigator){
    var Component = route.component;

    return (
      <Component rootNav={this.refs.rootNav} openExerciseModal={this.openExerciseModal} />
    );
  },

  render: function() {
    return (
      /* jshint ignore:start */
      <View style={styles.container}>
        <Navigator
          ref="rootNav"
          initialRoute={RouteStack.app}
          renderScene={this.renderScene} />
        {this.state.exerciseModalVisible ? <CreateExerciseModal closeModal={this.closeExerciseModal}/> : null }
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('trybe', () => Trybe);
