'use strict';

require("babel/register");

var React = require('react-native');
var EventEmitter = require('EventEmitter');

//Load components
var TabBar = require('./client/scripts/components/tabBar');
var EditExerciseModal = require('./client/scripts/components/editWorkout/editExercise/editExerciseModal');
var EditPartModal = require('./client/scripts/components/editWorkout/editPart/editPartModal');
var EditDateModal = require('./client/scripts/components/editWorkout/editPart/editDateModal');
var LogModal = require('./client/scripts/components/viewWorkout/logModal');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} = React;

var RouteStack = {
  app: {
    component: TabBar
  }
};

var Trybe = React.createClass({
  getInitialState: function(){
    return {
      exerciseModalVisible: false,
      partModalVisible: false,
      dateModalVisible: false,
      logModalVisible: false,
    };
  },
  componentWillMount: function() {
    this.rootNavListener = new EventEmitter();
  },
  onDoWorkout: function() {
    //emits event to notify workout navigator to reset stack
    this.rootNavListener.emit('doWorkout');
  },
  openExerciseModal: function(){
    this.setState({exerciseModalVisible: true});
  },
  closeExerciseModal: function(){
    this.setState({exerciseModalVisible: false});
  },
  openPartModal: function(){
    this.setState({partModalVisible: true});
  },
  closePartModal: function(){
    this.setState({partModalVisible: false});
  },
  openDateModal: function(){
    this.setState({dateModalVisible: true});
  },
  closeDateModal: function(){
    this.setState({dateModalVisible: false});
  },
  openLogModal: function(){
    this.setState({logModalVisible: true});
  },
  closeLogModal: function(){
    this.setState({logModalVisible: false});
  },
  renderScene: function(route, navigator){
    var Component = route.component;

    return (
      <Component
        rootNav={this.refs.rootNav}
        openExerciseModal={this.openExerciseModal}
        openPartModal={this.openPartModal}
        openDateModal={this.openDateModal}
        openLogModal={this.openLogModal}
        onDoWorkout={this.onDoWorkout}
        events={this.rootNavListener} />
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
        {this.state.exerciseModalVisible ? <EditExerciseModal closeModal={this.closeExerciseModal}/> : null }
        {this.state.partModalVisible ? <EditPartModal closeModal={this.closePartModal}/> : null }
        {this.state.dateModalVisible ? <EditDateModal closeModal={this.closeDateModal}/> : null }
        {this.state.logModalVisible ? <LogModal closeModal={this.closeLogModal}/> : null }
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
