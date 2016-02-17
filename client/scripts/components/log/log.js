//DEPR as of 2/8/16

/*
* @Author: VINCE
* @Date:   2015-09-25 11:45:27
* @Last Modified by:   VINCE
* @Last Modified time: 2016-02-17 13:45:19
*/

'use strict';

var React = require('react-native');
var logStore = require('../../stores/logStore');
var logActions = require('../../actions/logActions');

//Load components
var LogWorkouts = require('./logWorkouts');

var {
  StyleSheet,
  Text,
  View,
  ScrollView,
} = React;

var Log = React.createClass({
  getInitialState: function(){
    return {
      workouts: logStore.getWorkouts(),
      isShowingCalendar: logStore.getIsShowingCalendar(),
      calendarMonthAndYear: logStore.getMonthAndYear(),
      currMonthWorkouts: logStore.getCurrMonthWorkouts(),
    };
  },
  componentDidMount: function(){
    logStore.addChangeListener(this._onChange);
    logActions.getWorkouts();
  },
  componentWillUnmount: function(){
    logStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      workouts: logStore.getWorkouts(),
      isShowingCalendar: logStore.getIsShowingCalendar(),
      calendarMonthAndYear: logStore.getMonthAndYear(),
      currMonthWorkouts: logStore.getCurrMonthWorkouts(),
    });
  },



  render: function(){
    return (
      /* jshint ignore:start */
      <View style={styles.container}>
        <ScrollView>
          <LogWorkouts
            workouts={this.state.workouts}
            isShowingCalendar={this.state.isShowingCalendar}
            currMonthWorkouts={this.state.currMonthWorkouts}
            goToScene={this.props.goToScene} />
        </ScrollView>
      </View>
      /* jshint ignore:end */
      );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(141, 134, 126, .2)',
  },
});

module.exports = Log;
