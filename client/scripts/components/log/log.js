//DEPR as of 2/8/16

/*
* @Author: VINCE
* @Date:   2015-09-25 11:45:27
* @Last Modified by:   VINCE
* @Last Modified time: 2016-02-19 10:39:48
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
      visibleHeight: Dimensions.get('window').height,
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
      calendarMonthAndYear: logStore.getMonthAndYear(),
      currMonthWorkouts: logStore.getCurrMonthWorkouts(),
    });
  },
  handleScroll: function(event: Object) {
    var horizontalOffset = event.nativeEvent.contentOffset.x;
    console.log('horizontalOffset', horizontalOffset);
    //compare old x offset with new. if increase, use logic from onNext. if decrease, use logic from onPrev
    // var newCurrPartIdx = Math.round(horizontalOffset/this.state.visibleWidth);
    // viewWorkoutActions.setCurrPartIdx(newCurrPartIdx);
  },


  render: function(){
    //Build array of date objects representing last 12 months
    var dates = [];
    var currMonth = this.state.calendarMonthAndYear.month;
    var currYear = this.state.calendarMonthAndYear.year;
    var lastMonthVal = this.state.calendarMonthAndYear.month;

    for(var i = 0; i < 12; i++){
      if(lastMonthVal === 11){
        lastMonthVal = -1;
      }
      var newMonthVal = lastMonthVal + 1;
      var newYearVal;
      if(newMonthVal > currMonth){
        newYearVal = currYear - 1;
      } else {
        newYearVal = currYear;
      }
      dates.push({
        month: newMonthVal,
        year: newYearVal
      });
      lastMonthVal++;
    }

    //for each month/year object, create a monthOverview
    var lastTwelveMonthOverviews = dates.map((date, index) =>
      <MonthOverview date={date} key={index} width={this.state.visibleWidth}/>
    );

    return (
      /* jshint ignore:start */
      <View style={[styles.container, {height: this.state.visibleHeight, width: this.state.visibleWidth}]}>
        <View style={styles.monthScrollContainer}>
          <ScrollView
            ref="monthScroll"
            horizontal={true}
            pagingEnabled={true}
            onScroll={this.handleScroll}
            scrollEventThrottle={256}
            showsHorizontalScrollIndicator={false}
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
