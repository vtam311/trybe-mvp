'use strict';

require("babel/register");

var React = require('react-native');
var EventEmitter = require('EventEmitter');
var modalActions = require('./client/scripts/actions/modalActions');
var modalStore = require('./client/scripts/stores/modalStore');

//Load components
var TabBar = require('./client/scripts/components/tabBar');
var EditWorkoutModal = require('./client/scripts/components/editWorkout/editWorkoutModal');
var ViewWorkoutModal = require('./client/scripts/components/viewWorkout/viewWorkoutModal');
var EditInstructionsModal = require('./client/scripts/components/viewWorkout/editInstructionsModal');
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
      viewWorkoutModalVisible: false,
      editWorkoutModalVisible: false,
      instructionsModalVisible: false,
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
      viewWorkoutModalVisible: modalStore.getViewWorkoutModalVisible(),
      editWorkoutModalVisible: modalStore.getEditWorkoutModalVisible(),
      instructionsModalVisible: modalStore.getInstructionsModalVisible(),
      exerciseModalVisible: modalStore.getExerciseModalVisible(),
      partModalVisible: modalStore.getPartModalVisible(),
      dateModalVisible: modalStore.getDateModalVisible(),
      logModalVisible: modalStore.getLogModalVisible(),
    });
  },
  renderScene: function(route, navigator){
    var Component = route.component;

    return (
      <Component
        rootNav={this.refs.rootNav}
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
        {this.state.viewWorkoutModalVisible ? <ViewWorkoutModal /> : null }
        {this.state.editWorkoutModalVisible ? <EditWorkoutModal /> : null }
        {this.state.instructionsModalVisible ? <EditInstructionsModal /> : null }
        {this.state.exerciseModalVisible ? <EditExerciseModal /> : null }
        {this.state.partModalVisible ? <EditPartModal /> : null }
        {this.state.dateModalVisible ? <EditDateModal /> : null }
        {this.state.logModalVisible ? <LogModal /> : null }
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
