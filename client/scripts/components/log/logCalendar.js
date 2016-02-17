//Depr as of 2/12/16

/*
* @Author: vincetam
* @Date:   2016-02-08 16:18:46
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-12 11:28:04
*/

'use strict';

var React = require('react-native');

//Load components
var Calendar = require('react-native-calendar');

var {
  StyleSheet,
  Text,
  View,
  Image,
} = React;

var LogCalendar = React.createClass({
  onDateSelect: function(){
  },
  onTouchPrev: function(){
    var newMonth, newYear;
    if(this.props.calendarMonthAndYear.month === 0){
      newMonth = 11;
      newYear = this.props.calendarMonthAndYear.year - 1;
    } else {
      newMonth = this.props.calendarMonthAndYear.month - 1;
      newYear = this.props.calendarMonthAndYear.year;
    }

    logActions.setCalendarMonthAndYear(newMonth, newYear);
  },
  onTouchNext: function(){
    var newMonth, newYear;
    if(this.props.calendarMonthAndYear.month === 11){
      newMonth = 0;
      newYear = this.props.calendarMonthAndYear.year + 1;
    } else {
      newMonth = this.props.calendarMonthAndYear.month + 1;
      newYear = this.props.calendarMonthAndYear.year;
    }

    logActions.setCalendarMonthAndYear(newMonth, newYear);
  },
  render: function(){
    return (
      /* jshint ignore:start */
      <View>
        {this.props.isShowingCalendar ?
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
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  calendarContainer: {
    borderBottomWidth: .5,
    borderColor: '#d9d9d9'
  },
});

module.exports = LogCalendar;
