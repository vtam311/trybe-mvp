/*
* @Author: vincetam
* @Date:   2015-07-30 13:09:28
* @Last Modified by:   VINCE
* @Last Modified time: 2015-08-13 16:49:02
*/

'use strict';

var React = require('react-native');
var feedActions = require('../../actions/feedActions');

//Load components
var AMRAP = require('./workoutTypes/feedPreviewAMRAP');

var {
  StyleSheet,
  Text,
  View,
} = React;

var FeedCardBody = React.createClass({

  render: function(){
    var workout = this.props.workout;
    var workoutPreview;

    switch (workout.type) {
      /* jshint ignore:start */
      // case 'Progressions':
      //   workoutPreview = <Progressions workout={workout}/>;
      //   break;
      // case 'AMRAP':
      //   workoutPreview = <AMRAP workout={workout}/>;
      //   break;
      // case 'Lift':
      //   workoutPreview = <Lift workout={workout}/>;
      //   break;
      // case 'Timed Circuit':
      //   workoutPreview = <TimedCircuit workout={workout}/>;
      //   break;
      default:
        workoutPreview = <AMRAP workout={workout}/>;
      /* jshint ignore:end */
    }

    return (
      /* jshint ignore:start */
      <View>
        {{ workoutPreview }}
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = FeedCardBody;
