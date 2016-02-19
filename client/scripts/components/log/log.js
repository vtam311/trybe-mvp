//DEPR as of 2/8/16

/*
* @Author: VINCE
* @Date:   2015-09-25 11:45:27
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-18 18:47:15
*/

'use strict';

var React = require('react-native');
var logStore = require('../../stores/logStore');
var logActions = require('../../actions/logActions');

//Load components
var MonthOverview = require('./monthOverview');
var LogWorkouts = require('./logWorkouts');

var {
  ScrollView,
  Dimensions,
  StyleSheet,
  Text,
  View,
} = React;

var Log = React.createClass({
  getInitialState: function(){
    return {
      workouts: logStore.getWorkouts(),
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
      calendarMonthAndYear: logStore.getMonthAndYear(),
      currMonthWorkouts: logStore.getCurrMonthWorkouts(),
    });
  },
  handleScroll: function(event: Object) {
    var horizontalOffset = event.nativeEvent.contentOffset.x;
    var newCurrPartIdx = Math.round(horizontalOffset/this.state.visibleWidth);
    viewWorkoutActions.setCurrPartIdx(newCurrPartIdx);
  },


  render: function(){
    return (
      /* jshint ignore:start */
      <View style={styles.container}>
        <View style={styles.monthScrollContainer}>
          <ScrollView
            ref="monthScroll"
            horizontal={true}
            pagingEnabled={true}
            onScroll={this.handleScroll}
            scrollEventThrottle={256}
            showsHorizontalScrollIndicator={false}
            contentOffset={{x: this.state.currPartIdx * this.state.visibleWidth}} >

            <MonthOverview />

          </ScrollView>
        </View>

        <View style={styles.monthlyContentContainer}>
          <ScrollView>
            <LogWorkouts
              workouts={this.state.workouts}

              currMonthWorkouts={this.state.currMonthWorkouts}
              goToScene={this.props.goToScene} />
          </ScrollView>
        </View>
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
  monthScrollContainer: {
    flex: .2,
  },
  monthlyContentContainer: {
    flex: .8,
  },
});

module.exports = Log;
