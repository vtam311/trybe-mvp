/*
* @Author: vincetam
* @Date:   2015-10-28 19:52:11
* @Last Modified by:   vincetam
* @Last Modified time: 2015-10-30 11:32:09
*/

'use strict';

var React = require('react-native');
var ViewExercise = require('../../common/viewWorkoutComponents/viewExercise');

var {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight
} = React;

import {CustomCell} from 'react-native-tableview-simple';

var CreateExerciseCell = React.createClass({
  render: function(){
    var exercise = this.props.exercise;

    return (
      /* jshint ignore:start */
      <CustomCell onPress={this.props.openExerciseModal}>
        <TouchableHighlight onPress={() => console.log('Clear Button Clicked')}>
          <Image
            style={{height: 14, width: 14, marginTop: 5, marginRight: 8}}
            source={require('image!clearButton')} />
        </TouchableHighlight>
        <ViewExercise exercise={this.props.exercise} />
        <Image
          style={{height: 13, width: 8}}
          source={require('image!disclosureIndicator')} />
      </CustomCell>
      /* jshint ignore:start */
    );
        // <Text style={{flex: 1, fontSize: 16, fontFamily: 'Avenir Next'}}>5 Pull Ups</Text>
  }
});

module.exports = CreateExerciseCell;
