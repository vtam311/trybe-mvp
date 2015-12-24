'use strict';

var React = require('react-native');
var Subscribable = require('Subscribable');
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
    component: ViewWorkout,
  }
};


var WorkoutTab = React.createClass({
  mixins: [Subscribable.Mixin],

  getInitialState: function(){
    return {
      route: RouteStack.app,
    };
  },
  componentDidMount: function(){
    this.addListenerOn(this.props.events, 'doWorkout', this.resetRoute);
  },
  goToScene: function(component, name){
    this.refs.workoutNav.push({
      component: component,
      name: name
    });
  },
  //will be called when event is heard.
    //resets routeStack to first page
      //use flux to do this? https://facebook.github.io/react/tips/communicate-between-components.html
  resetRoute: function(route){
    console.log('workoutTab resetRoute called');
    this.refs.workoutNav.popToTop();
    // this.setState({}); //updates component, needed?
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
        initialRoute={this.state.route}
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
    console.log('NavBarRouteMapper LeftButton route', route);

    return (
      /* jshint ignore:start */
      <TouchableOpacity
        style={styles.navBarComponentContainer}
        onPress={ () => {
          if(index > 0) {
            navigator.pop();
          }
        }}>
        { index > 0 ? <Text>Back</Text> : null }
      </TouchableOpacity>
      /* jshint ignore:end */
    );
  },

  RightButton: function(route, navigator, index, navState) {
    if(route.name === 'New Workout'){
      return (
        <TouchableOpacity style={styles.navBarComponentContainer} >
          <Text>Add Part</Text>
        </TouchableOpacity>
      );
    }
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
