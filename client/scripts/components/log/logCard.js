/*
* @Author: VINCE
* @Date:   2015-09-25 11:51:18
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-10 12:43:48
*/

'use strict';

var React = require('react-native');
var logActions = require('../../actions/logActions');

//Load components
var PartsView = require('./partsView');

var {
  StyleSheet,
  Text,
  View,
} = React;

var LogCard = React.createClass({

  render: function(){
    var workout = this.props.workout;
    var dateString = workout.date.toString();
    var day = dateString.slice(0,3);
    var month = dateString.slice(4,7);
    var dateNum = dateString.slice(8,10);

    return (
      /* jshint ignore:start */
      <View style={styles.container}>
        <View style={styles.dateContainer}>
          <Text style={[styles.dateText, {fontSize: 14, marginBottom: 6}]}>{day}</Text>
          <Text style={[styles.dateText, {fontSize: 12}]}>{month}</Text>
          <Text style={[styles.dateText, {fontSize: 15}]}>{dateNum}</Text>
        </View>
        <View style={styles.workoutContent}>
          <PartsView
            workout={workout}
            showNotes={true} />
        </View>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: .5,
    borderBottomWidth: .5,
    borderColor: '#979797',
    marginBottom: 10,
  },
  dateContainer: {
    flex: .2,
    flexDirection: 'column',
    justifyContent: 'center', //not working, RN bug
    alignItems: 'center',
    marginTop: 20 //until justifyContent works, use this
  },
  dateText: {
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    color: '#8D867E',
  },
  workoutContent: {
    flex: .8,
    flexDirection: 'column'
  },
});

module.exports = LogCard;
