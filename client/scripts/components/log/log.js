//DEPR as of 2/8/16

/*
* @Author: VINCE
* @Date:   2015-09-25 11:45:27
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-08 19:23:29
*/

'use strict';

var React = require('react-native');
var logStore = require('../../stores/logStore');
var logActions = require('../../actions/logActions');

//Load components
var Calendar = require('react-native-calendar');
// var LogCalendar = require('./logCalendar');
// var ProfileCard = require('./profileCard');
var LogCard = require('./logCard');

var {
  StyleSheet,
  Text,
  View,
  ListView,
  Image
} = React;

var Log = React.createClass({
  getInitialState: function(){
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
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
    var workouts = logStore.getWorkouts();
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(workouts)
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

  // renderHeader: function(){
  //   return (
  //     <ProfileCard />
  //   );
  // },

  renderRow: function(workout){
    return (
      /* jshint ignore:start */
      <View style={styles.logCardContainer}>
        <LogCard
          workout={workout} />
      </View>
      /* jshint ignore:end */
    );
  },
  render: function(){
    var backArrow = <Image source={require('image!backArrowGrey')} />;
    var forwardArrow = <Image source={require('image!forwardArrowGrey')} />;
    return (
      /* jshint ignore:start */
      <View style={styles.container}>
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
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderHeader={this.renderHeader} />
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
  logCardContainer: {
    marginBottom: 10
  }
});

module.exports = Log;
