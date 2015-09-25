/*
* @Author: VINCE
* @Date:   2015-09-25 11:51:18
* @Last Modified by:   VINCE
* @Last Modified time: 2015-09-25 11:56:36
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
          when={ card.createdAt }/>
        <ViewWorkoutBody
          workout={ card.workout }/>
        <LogCardFooter
          workout={ card.workout }/>
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = LogCard;
