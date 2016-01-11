/*
* @Author: VINCE
* @Date:   2015-09-25 11:51:18
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-10 15:59:23
*/

'use strict';

var React = require('react-native');
var logActions = require('../../actions/logActions');

//Load components
var LogCardHeader = require('./logCardHeader');
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

    return (
      /* jshint ignore:start */
      <View style={styles.cardContainer}>
        <LogCardHeader
          date={workout.date}/>
        <ViewWorkoutBody
          workout={workout}/>
        <LogCardFooter
          workout={workout}
          onDoWorkout={this.props.onDoWorkout} />
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
    borderColor: '#d9d9d9',
    padding: 10
  }
});

module.exports = LogCard;
