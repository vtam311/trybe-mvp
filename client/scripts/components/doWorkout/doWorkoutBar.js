/*
* @Author: vincetam
* @Date:   2015-08-04 18:21:31
* @Last Modified by:   vincetam
* @Last Modified time: 2015-08-04 18:25:15
*/

'use strict';

var React = require('react-native');
var doWorkoutActions = require('../../actions/doWorkoutActions');

var {
  StyleSheet,
  Text,
  View,
} = React;

var DoWorkoutBar = React.createClass({

  render: function(){
    return (
      /* jshint ignore:start */
      <View>
        <Text>Modify Workout | Try Later | Custom Workout</Text>
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = DoWorkoutBar;
