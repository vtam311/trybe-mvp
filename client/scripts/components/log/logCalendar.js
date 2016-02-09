//Depr as of 2/8/16

/*
* @Author: vincetam
* @Date:   2016-02-08 16:18:46
* @Last Modified by:   VINCE
* @Last Modified time: 2016-02-08 19:22:43
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
    console.log('hi');
  },
  onTouchPrev: function(){
    console.log('hi');
  },
  onTouchNext: function(){
    console.log('hi');
  },
  onSwipePrev: function(){
    console.log('hi');
  },
  onSwipeNext: function(){
    console.log('hi');
  },
  render: function(){
    var backArrow = <Image source={require('image!backArrowGrey')} />;
    var forwardArrow = <Image source={require('image!forwardArrowGrey')} />;

    return (
      /* jshint ignore:start */
      <View>
        <Calendar
          scrollEnabled={false}
          showControls={true}
          titleFormat={'MMMM YYYY'}
          dayHeadings={['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']}
          prevButtonText={backArrow}
          nextButtonText={forwardArrow}
          onDateSelect={(date) => this.onDateSelect(date)}
          onTouchPrev={this.onTouchPrev}
          onTouchNext={this.onTouchNext}
          onSwipePrev={this.onSwipePrev}
          onSwipeNext={this.onSwipeNext}
          eventDates={['2016-02-01']}
          startDate={'2016-02-01'}
          selectedDate={'2016-02-15'}
          customStyle={{
            day: {fontSize: 14, textAlign: 'center'},
            currentDayText: {color: '#4DBA97'},
            selectedDayCircle: {backgroundColor: '#4DBA97'},
            currentDayCircle: {backgroundColor: '#E9DB72'},
            calendarHeading: {borderColor: 'rgba(0,0,0,0)'},
            weekendDayText: {color: 'black'},
            dayHeading: {fontSize: 11, color: '#A79D93'},
            weekendHeading: {fontSize: 11, color: '#A79D93'}
          }} />
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
});

module.exports = LogCalendar;
