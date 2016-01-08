'use strict';

var React = require('react-native');
var Subscribable = require('Subscribable'); //used for addListenerOn
var editWorkoutActions = require('../../actions/editWorkoutActions');
var viewWorkoutActions = require('../../actions/viewWorkoutActions');

//Load components
var ViewWorkout = require('../viewWorkout/viewWorkout');
var EditWorkout = require('../editWorkout/editWorkout');

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
    name: 'Today',
    component: ViewWorkout,
  }
};


var WorkoutTab = React.createClass({
  mixins: [Subscribable.Mixin],

  componentDidMount: function(){
    this.addListenerOn(this.props.events, 'doWorkout', this.resetRoute);
  },
  goToScene: function(component, name){
    this.refs.workoutNav.push({
      component: component,
      name: name
    });
  },
  resetRoute: function(route){
    this.refs.workoutNav.popToTop();
  },
  renderScene: function(route, navigator){
    var Component = route.component;

    return (
      <Component
        goToScene={this.goToScene}
        openExerciseModal={this.props.openExerciseModal}
        openPartModal={this.props.openPartModal}
        openDateModal={this.props.openDateModal}
        openLogModal={this.props.openLogModal}
        events={this.props.events} />
    );
  },
  render: function() {
    return (
      /* jshint ignore:start */
      <Navigator
        ref="workoutNav"
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
    //Show left button based on user's view
    switch (route.name) {
      //If viewing today's workout, render create workout button
      case 'New Workout':
        var handleLeftPress = function(){
          viewWorkoutActions.initPartsAreLogged();
          if(index > 0) {
            navigator.pop();
          }
        };
        return (
          /* jshint ignore:start */
          <TouchableOpacity
            style={styles.navBarComponentContainer}
            onPress={ () => handleLeftPress()}>
            { index > 0 ?
              <Image
                style={{height: 22, width: 12}}
                source={ require('image!backArrow') } /> : null }
          </TouchableOpacity>
          /* jshint ignore:end */
        );
        break;
      default:
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
    }
  },

  RightButton: function(route, navigator, index, navState) {
    //Show right button based on user's view
    switch (route.name) {
      //If viewing today's workout, render create workout button
      case 'Today':
        var handleRightPress = function(){
          editWorkoutActions.resetWorkout();
          navigator.push({
            component: EditWorkout,
            name: 'New Workout'
          });
        };
        return (
          <TouchableOpacity
            onPress={() => handleRightPress()}
            style={styles.navBarComponentContainer} >
            <Image source={require('image!createIcon')} />
          </TouchableOpacity>
        );
        break;
      //If in New Workout scene, render 'Add Part' button
      case 'New Workout':
        return (
          <TouchableOpacity
            onPress={() => editWorkoutActions.addPart()}
            style={styles.navBarComponentContainer} >
            <Text style={styles.navBarSideText}>Add Part</Text>
          </TouchableOpacity>
        );
        break;
      default:
        return null;
    }
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

module.exports = WorkoutTab;
