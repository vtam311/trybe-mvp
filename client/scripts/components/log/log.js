//DEPR as of 2/8/16

/*
* @Author: VINCE
* @Date:   2015-09-25 11:45:27
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-08 21:13:37
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
      showCalendar: true,
      selectedDate: null,
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
      workouts: logStore.getWorkouts()
    });
  },

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
    var cards = this.state.workouts.map((workout, index) =>
      <LogCard workout={workout} />
    );

    return (
      /* jshint ignore:start */
      <View style={styles.container}>
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
              weekendHeading: {fontSize: 11, color: '#A79D93'},
              controlButtonText: {fontSize: 13, color: '#A79D93'}
            }} />
        </View>

        <ScrollView>
          {cards}
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
  }
});

module.exports = Log;
