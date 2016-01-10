/*
* @Author: VINCE
* @Date:   2015-09-26 12:46:46
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-29 14:23:45
*/

//Still useful, but currently not in use

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
} = React;

var viewExercise = React.createClass({
  createResultText: function(){
    var result;

    return result;
  },
  render: function(){
    var workout = this.props.workout;

    var renderResultsTime = function(time) {
      var result;
      if(time){
        result = '';
        var hour = time.slice(0,2);
        var min = time.slice(3,5);
        var sec = time.slice(6,8);

        //Determine relevant units, and delete irrelevant ones
        if(hour === '00') hour = null;
        if(min === '00' && hour === null) min = null;
        // if(sec === '00') sec = null;

        //For relevant units, remove zeroes
        if(hour && hour.charAt(0) === '0') hour = hour.charAt(1);
        //Remove zero if hour is null
        if (hour === null && min && min.charAt(0) === '0') min = min.charAt(1);
        //Remove zero if both hour and min are null, and add 'sec'
        if(hour === null && min === null && sec && sec.charAt(0) === '0')
          sec = sec.charAt(1) + ' sec';

        //Create result text
        if(hour) result += hour + ':';
        if(min) result += min + ':';
        if(sec) result += sec;
      } else {
        result = null;
      }

      return result;
    };

    return (
      /* jshint ignore:start */
      <View style={styles.workoutResult}>
        <Text style={styles.resultText}>{renderResultsTime(workout.finalResult.value)}</Text>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  workoutResult: {
    marginTop: 20,
    marginBottom: 10
  },
  resultText: {
    fontFamily: 'Helvetica',
    color: 'grey',
    fontSize: 14,
    fontWeight: '600'
  }
});

module.exports = viewExercise;