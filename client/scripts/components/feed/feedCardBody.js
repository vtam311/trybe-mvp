/*
* @Author: vincetam
* @Date:   2015-07-30 13:09:28
* @Last Modified by:   vincetam
* @Last Modified time: 2015-09-18 12:13:20
*/

'use strict';

var React = require('react-native');
var feedActions = require('../../actions/feedActions');

//Load components
var ViewExercise = require('../../common/viewWorkoutComponents/viewExercise');

var {
  StyleSheet,
  Text,
  View,
} = React;

var FeedCardBody = React.createClass({

  render: function(){
    var workout = this.props.workout;
    //partsView is an array of partViews, which renders
    //a workout part's instructions and exercises
    var partsView = [];

    //Traverse parts
    for(var i = 0; i < workout.parts.length; i++){
      var partView = partsView[i] = [];
      var currPart = workout.parts[i];
      var instructions = currPart.instructions;

      //Add instructions to partView
      /* jshint ignore:start */
      partView.push(<Text>{instructions}</Text>);
      /* jshint ignore:end */

      //Add exercises to partView
      for(var n = 0; n < currPart.exercises.length; n++){
        var currExercise = currPart.exercises[n];
        /* jshint ignore:start */
        partView.push(<ViewExercise exercise={currExercise}/>);
        /* jshint ignore:end */

      }
    }

    return (
      /* jshint ignore:start */
      <View>
        { partsView }
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = FeedCardBody;
