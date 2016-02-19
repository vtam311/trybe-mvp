//DEPR as of 2/8/16

/*
* @Author: VINCE
* @Date:   2015-09-25 11:45:27
* @Last Modified by:   VINCE
* @Last Modified time: 2016-02-19 11:30:27
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
      lastTwelveMonths: logStore.getLastTwelveMonths(),
      currViewingMonth: logStore.getCurrViewingMonth(),
      currMonthWorkouts: logStore.getCurrMonthWorkouts(),
      visibleWidth: Dimensions.get('window').width,
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
      currViewingMonth: logStore.getCurrViewingMonth(),
      currMonthWorkouts: logStore.getCurrMonthWorkouts(),
    });
  },
  handleScroll: function(event: Object) {
    var horizontalOffset = event.nativeEvent.contentOffset.x;
    var currDateIdx = Math.round(horizontalOffset/this.state.visibleWidth);
    logActions.setCurrViewingMonth(currDateIdx);
  },


  render: function(){
    var months = ['January','February','March',
    'April','May','June','July','August',
    'September','October','November','December'];

    var lastTwelveMonthOverviews = this.state.lastTwelveMonths.map((date, index) =>
      <MonthOverview
        date={date}
        monthName={months[date.month]}
        width={this.state.visibleWidth}
        numWorkouts={this.state.currMonthWorkouts.length}
        key={index} />
    );


    return (
      /* jshint ignore:start */
      <View style={[styles.container]}>
        <View style={styles.monthScrollContainer}>
          <ScrollView
            ref="monthScroll"
            horizontal={true}
            pagingEnabled={true}
            onScroll={this.handleScroll}
            scrollEventThrottle={256}
            showsHorizontalScrollIndicator={false}
            contentOffset={{x: 11 * this.state.visibleWidth}}
            contentContainerStyle={{flex: 1}}
            automaticallyAdjustContentInsets={false} >

            {lastTwelveMonthOverviews}

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
    backgroundColor: 'grey'
  },
  monthlyContentContainer: {
    flex: .8,
  },
});

module.exports = Log;
