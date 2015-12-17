'use strict';

require("babel/register");

var React = require('react-native');

//Load components
var TabBar = require('./client/scripts/components/tabBar');
var EditExerciseModal = require('./client/scripts/components/createWorkout/editExercise/editExerciseModal');
var EditPartModal = require('./client/scripts/components/createWorkout/editPart/editPartModal');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Dimensions, //
  DeviceEventEmitter, //
} = React;

//To dismiss keyboard
var TouchableWithoutFeedback = require('TouchableWithoutFeedback'); //
var dismissKeyboard = require('dismissKeyboard'); //

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
      visibleHeight: Dimensions.get('window').height
    };
  },
  componentWillMount: function() {
    DeviceEventEmitter.addListener('keyboardWillShow', this.keyboardWillShow);
    DeviceEventEmitter.addListener('keyboardWillHide', this.keyboardWillHide);
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
  keyboardWillShow: function(e) {
    console.log('rootNav keyboardWillShow called');
    var newSize = Dimensions.get('window').height - e.endCoordinates.height;
    this.setState({visibleHeight: newSize});
  },
  keyboardWillHide: function(e) {
    console.log('rootNav keyboardWillHide called');
    this.setState({visibleHeight: Dimensions.get('window').height});
  },
  hideKeyboard: function(){
    console.log('rootNav hideKeyboard called');
    dismissKeyboard();
  },
  renderScene: function(route, navigator){
    var Component = route.component;

    var visibleHeight = this.state.visibleHeight;
    return (
      <View style={{height: visibleHeight}}>
        <Component
          rootNav={this.refs.rootNav}
          openExerciseModal={this.openExerciseModal}
          openPartModal={this.openPartModal} />
      </View>
    );
  },
      // <TouchableWithoutFeedback onPress={this.hideKeyboard}>
      // </TouchableWithoutFeedback>

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
