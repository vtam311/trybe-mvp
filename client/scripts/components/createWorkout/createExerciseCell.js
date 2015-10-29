/*
* @Author: vincetam
* @Date:   2015-10-28 19:52:11
* @Last Modified by:   VINCE
* @Last Modified time: 2015-10-28 20:15:40
*/

'use strict';

var React = require('react-native');
var ViewExercise = require('../../common/viewWorkoutComponents/viewExercise');

var {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image
} = React;

import {CustomCell} from 'react-native-tableview-simple';

var CreateExerciseCell = React.createClass({
  render: function(){
    var exercise = this.props.exercise;
    var exerciseDisplay;

    return (
      /* jshint ignore:start */
      <CustomCell onPress={() => {console.log('Exercise Cell')}}>
        <Image
          style={{height: 14, width: 14, marginTop: 5, marginRight: 8}}
          source={require('image!clearButton')} />
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
