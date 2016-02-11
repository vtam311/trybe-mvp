/*
* @Author: vincetam
* @Date:   2016-02-11 09:38:38
* @Last Modified by:   VINCE
* @Last Modified time: 2016-02-11 10:03:58
*/

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
} = React;

var LogCard = require('./logCard');

//Scene for showing log's workouts based on whether or not calendar is showing
var LogWorkouts = React.createClass({
  getMonthNameAndYear: function(date){
    var month = date.toString().slice(4,7);
    var year = date.toString().slice(11,15);
    return month + ' ' + year;
  },
  render: function(){
    var workouts = this.props.workouts;
    var workoutViews;
    //if showing calendar, show workouts by month
    if(this.props.isShowingCalendar){
      //If there are workouts in the current month, show
      if(this.props.currMonthWorkouts.length > 0){
        workoutViews = this.props.currMonthWorkouts.map((workout, index) =>
          <LogCard
            workout={workout}
            key={index}
            goToScene={this.props.goToScene} />
        );
      } else {
        //other show this message
        workoutViews =
        <View style={styles.noWorkoutsContainer}>
          <Text style={styles.text}>No Workouts This Month</Text>
        </View>
      }
    } else {
      //if calendar is hidden, show all workouts
      workoutViews = workouts.map((workout, index) =>
        <View key={index}>
          {index === 0 || workouts[index - 1].date.getMonth() !== workout.date.getMonth() ?
            <Text style={[styles.text, {marginLeft: 5, marginBottom: 5}]}>{this.getMonthNameAndYear(workout.date)}</Text>
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
        <View>
          { workoutViews }
        </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  logCardContainer: {
    marginBottom: 10
  },
  noWorkoutsContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#58504D'
  }
});

module.exports = LogWorkouts;