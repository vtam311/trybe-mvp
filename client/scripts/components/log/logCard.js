/*
* @Author: VINCE
* @Date:   2015-09-25 11:51:18
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-24 11:36:40
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
    var card = this.props.card;

    return (
      /* jshint ignore:start */
      <View>
        <LogCardHeader
          createdAt={card.workout.createdAt}/>
        <ViewWorkoutBody
          workout={card.workout}/>
        <LogCardFooter
          workout={card.workout}
          onDoWorkout={this.props.onDoWorkout} />
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = LogCard;
