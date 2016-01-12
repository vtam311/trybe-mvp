'use strict';

require("babel/register");

var React = require('react-native');
var EventEmitter = require('EventEmitter');
var modalActions = require('./client/scripts/actions/modalActions');
var modalStore = require('./client/scripts/stores/modalStore');

//Load components
var TabBar = require('./client/scripts/components/tabBar');
// var EditWorkouteModal = require('./client/scripts/components/editWorkout/editWorkoutModal');
var EditExerciseModal = require('./client/scripts/components/editWorkout/editExercise/editExerciseModal');
var EditPartModal = require('./client/scripts/components/editWorkout/editPart/editPartModal');
var EditDateModal = require('./client/scripts/components/editWorkout/editPart/editDateModal');
var LogModal = require('./client/scripts/components/log/logModal');

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
      workoutModalVisible: false,
      exerciseModalVisible: false,
      partModalVisible: false,
      dateModalVisible: false,
      logModalVisible: false,
    };
  },
  componentWillMount: function() {
    this.rootNavListener = new EventEmitter();
  },
  componentDidMount: function() {
    modalStore.addChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      exerciseModalVisible: modalStore.getExerciseModalVisible(),
      partModalVisible: modalStore.getPartModalVisible(),
      dateModalVisible: modalStore.getDateModalVisible(),
    });
  },
  onDoWorkout: function() {
    //emits event to notify workout navigator to reset stack
    this.rootNavListener.emit('doWorkout');
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
        openWorkoutModal={this.openWorkoutModal}
        openLogModal={this.openLogModal}
        onDoWorkout={this.onDoWorkout}
        events={this.rootNavListener} />
    );
  },

        // {this.state.wrkoutModalVisible ? <EditWorkoutModal closeModal={this.closeWorkoutModal}/> : null }
  render: function() {
    return (
      /* jshint ignore:start */
      <View style={styles.container}>
        <Navigator
          ref="rootNav"
          initialRoute={RouteStack.app}
          renderScene={this.renderScene} />
        {this.state.exerciseModalVisible ? <EditExerciseModal /> : null }
        {this.state.partModalVisible ? <EditPartModal /> : null }
        {this.state.dateModalVisible ? <EditDateModal /> : null }
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
