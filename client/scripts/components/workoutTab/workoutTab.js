'use strict';

var React = require('react-native');
var workoutTabActions = require('../../actions/workoutTabActions');
var workoutTabStore = require('../../stores/workoutTabStore');

var {
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} = React;

var WorkoutTab = React.createClass({
  getInitialState: function(){
    return {
      navView: workoutTabStore.getNavView()
    };
  },
  componentDidMount: function(){
    workoutTabStore.addChangeListener(this._onChange);
    // workoutTabStore.getNavView();
  },
  componentWillUnmount: function(){
    workoutTabStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      navView: workoutTabStore.getNavView()
    });
  },
  render: function() {
    return (
      /* jshint ignore:start */
      <NavigatorIOS
        ref="nav"
        style={styles.wrapper}
        initialRoute={this.state.navView}/>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // height: 700
  }
});

module.exports = WorkoutTab;
