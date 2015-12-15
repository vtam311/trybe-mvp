/*
* @Author: vincetam
* @Date:   2015-10-28 19:52:11
* @Last Modified by:   VINCE
* @Last Modified time: 2015-12-14 18:03:21
*/

'use strict';

var React = require('react-native');
var createWorkoutActions = require('../../actions/createWorkoutActions');

//Load components
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

var EditExerciseCell = React.createClass({
  _handlePress: function(){
    //sets the target exercise for user to edit
    createWorkoutActions.setTargetExerciseIdx(this.props.partIdx, this.props.exIdx);
    this.props.openExerciseModal();
  },
  removeExercise: function(){
    createWorkoutActions.removeExercise(this.props.partIdx, this.props.exIdx);
  },
  render: function(){
    return (
      /* jshint ignore:start */
      <CustomCell onPress={this._handlePress}>
        <TouchableHighlight onPress={this.removeExercise} activeOpacity={.8} underlayColor={'#BFBFBF'}>
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
  }
});

module.exports = EditExerciseCell;
