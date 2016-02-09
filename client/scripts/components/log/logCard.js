/*
* @Author: VINCE
* @Date:   2015-09-25 11:51:18
* @Last Modified by:   VINCE
* @Last Modified time: 2016-02-09 15:52:50
*/

'use strict';

var React = require('react-native');
var logActions = require('../../actions/logActions');

//Load components
// var LogCardHeader = require('./logCardHeader');
var ViewWorkoutBody = require('../../common/workoutViews/viewWorkoutBody');
var LogCardFooter = require('./logCardFooter');

var {
  StyleSheet,
  Text,
  View,
} = React;

var LogCard = React.createClass({

  render: function(){
    var workout = this.props.workout;
    var dateString = workout.date.toString();
    var dateDescr = dateString.slice(0,10);

    return (
      /* jshint ignore:start */
      <View style={styles.container}>
        <Text style={styles.dateText}>{dateDescr}</Text>
        <View style={styles.cardContent}>
          <ViewWorkoutBody
            workout={workout}
            showNotes={true} />
          <LogCardFooter
            workout={workout} />
        </View>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  cardContent: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopWidth: .5,
    borderBottomWidth: .5,
    borderColor: '#979797',
    shadowColor: '#979797',
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: .5,
    padding: 10,
  },
  dateText: { //
    fontFamily: 'Avenir Next',
    fontSize: 14,
    fontWeight: '500',
    color: '#8D867E',
    marginLeft: 10,
    marginBottom: 5,
  }
});

module.exports = LogCard;
