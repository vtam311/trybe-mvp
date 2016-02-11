//DEPR as of 2/8/16

/*
* @Author: VINCE
* @Date:   2015-09-25 11:45:27
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-11 09:37:43
*/

'use strict';

var React = require('react-native');
var logStore = require('../../stores/logStore');
var logActions = require('../../actions/logActions');

//Load components
var Calendar = require('react-native-calendar');
var LogCard = require('./logCard');

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

  onDateSelect: function(){
  },
  onTouchPrev: function(){
    var newMonth, newYear;
    if(this.state.calendarMonthAndYear.month === 0){
      newMonth = 11;
      newYear = this.state.calendarMonthAndYear.year - 1;
    } else {
      newMonth = this.state.calendarMonthAndYear.month - 1;
      newYear = this.state.calendarMonthAndYear.year;
    }

    logActions.setCalendarMonthAndYear(newMonth, newYear);
  },
  onTouchNext: function(){
    var newMonth, newYear;
    if(this.state.calendarMonthAndYear.month === 11){
      newMonth = 0;
      newYear = this.state.calendarMonthAndYear.year + 1;
    } else {
      newMonth = this.state.calendarMonthAndYear.month + 1;
      newYear = this.state.calendarMonthAndYear.year;
    }

    logActions.setCalendarMonthAndYear(newMonth, newYear);
  },

  render: function(){
    var workouts;
    //if showing calendar, show workouts by month
    if(this.state.isShowingCalendar){
      //If there are workouts in the current month, show
      if(this.state.currMonthWorkouts.length > 0){
        workouts = this.state.currMonthWorkouts.map((workout, index) =>
          <LogCard
            workout={workout}
            key={index}
            goToScene={this.props.goToScene} />
        );
      } else {
        workouts =
        <View style={styles.noWorkoutsContainer}>
          <Text>No Workouts This Month</Text>
        </View>
      }
    } else {
      //Otherwise show all workouts
      workouts = this.state.workouts.map((workout, index) =>
        <View key={index}>
          {index === 0 || workout.date.getMonth() !== this.state.workouts[index - 1].date.getMonth() ?
            <Text>New Month</Text>
            : null
          }
          <LogCard
            workout={workout}
            goToScene={this.props.goToScene} />
        </View>
      );
    }

    return (
      /* jshint ignore:start */
      <View style={styles.container}>
        {this.state.isShowingCalendar ?
          <View style={styles.calendarContainer}>
            <Calendar
              scrollEnabled={false}
              showControls={true}
              titleFormat={'MMMM YYYY'}
              dayHeadings={['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']}
              prevButtonText='Prev'
              nextButtonText='Next'
              onDateSelect={(date) => this.onDateSelect(date)}
              onTouchPrev={this.onTouchPrev}
              onTouchNext={this.onTouchNext}
              customStyle={{
                day: {fontSize: 14, textAlign: 'center'},
                currentDayText: {color: '#4DBA97'},
                selectedDayCircle: {backgroundColor: '#4DBA97'},
                currentDayCircle: {backgroundColor: '#E9DB72'},
                calendarHeading: {borderColor: 'rgba(0,0,0,0)'},
                weekendDayText: {color: 'black'},
                dayHeading: {fontSize: 11, color: '#A79D93'},
                weekendHeading: {fontSize: 11, color: '#A79D93'},
                controlButtonText: {fontSize: 13, color: '#A79D93'}
              }} />
          </View>
          : null
        }
        <ScrollView>
          {workouts}
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
  calendarContainer: {
    borderBottomWidth: .5,
    borderColor: '#d9d9d9'
  },
  logCardContainer: {
    marginBottom: 10
  },
  noWorkoutsContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noWorkoutsText: {

  }
});

module.exports = Log;
