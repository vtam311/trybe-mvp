/*
* @Author: vincetam
* @Date:   2015-07-30 13:09:28
* @Last Modified by:   VINCE
* @Last Modified time: 2015-09-18 11:58:15
*/

'use strict';

var React = require('react-native');
var feedActions = require('../../actions/feedActions');

//Load components
var ViewExercise = require('../viewWorkout/viewExercise');

var {
  StyleSheet,
  Text,
  View,
} = React;

var FeedCardBody = React.createClass({

  render: function(){
    var workout = this.props.workout;
    var partsRender = [];

    for(var i = 0; i < workout.parts.length; i++){
      partsRender[i] = [];
      var currPart = workout.parts[i];
      var instructions = currPart.instructions;
      //Add instructions to part
      partsRender[i].push(<Text>{instructions}</Text>);

      for(var n = 0; n < currPart.exercises.length; n++){
        var currExercise = currPart.exercises[n];
        partsRender[i].push(<ViewExercise exercise={currExercise}/>);
      }
    }

    return (
      /* jshint ignore:start */
      <View>
        { partsRender }
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = FeedCardBody;
