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

var WorkoutTab = React.createClass({
  getInitialState: function(){
    return {
      // navView: workoutTabStore.getNavView()
    };
  },
  componentDidMount: function(){
    // workoutTabStore.addChangeListener(this._onChange);
    // workoutTabStore.getNavView();
  },
  componentWillUnmount: function(){
    // workoutTabStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      // navView: workoutTabStore.getNavView()
    });
  },
  render: function() {
    return (
      /* jshint ignore:start */
      <Navigator
        initialRoute={{name: 'Today', index: 0}}
        renderScene={(route, navigator) =>
          <ViewWorkout
            name={route.name}
            onForward={() => {
              var nextIndex = route.index + 1;
              navigator.push({
                name: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }/>
      /* jshint ignore:end */
    );
  }
});
      // <NavigatorIOS
      //   ref="nav"
      //   style={styles.wrapper}
      //   initialRoute={{title: 'Today', component: ViewWorkout}}/>

var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // height: 700
  }
});

module.exports = WorkoutTab;
