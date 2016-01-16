/*
* @Author: VINCE
* @Date:   2015-09-25 11:51:18
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-16 10:13:36
*/

'use strict';

var React = require('react-native');
var logActions = require('../../actions/logActions');

//Load components
// var LogCardHeader = require('./logCardHeader');
var ViewWorkoutBody = require('../../common/viewWorkoutComponents/viewWorkoutBody');
var LogCardFooter = require('./logCardFooter');

var {
  StyleSheet,
  Text,
  View,
} = React;

var LogCard = React.createClass({

  render: function(){
    var workout = this.props.workout;
    var dateDescr = Date(workout.date).slice(0,10);

    return (
      /* jshint ignore:start */
      <View>
        <Text style={styles.dateText}>{dateDescr}</Text>
        <View style={styles.cardContainer}>
          <ViewWorkoutBody
            workout={workout}
            showNotes={true} />
          <LogCardFooter
            workout={workout}
            onDoWorkout={this.props.onDoWorkout} />
        </View>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  cardContainer: {
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
    fontFamily: 'Helvetica',
    fontSize: 15,
    color: '#4A4A4A',
    marginLeft: 10,
    marginBottom: 5,
  }
});

module.exports = LogCard;
