/*
* @Author: vincetam
* @Date:   2015-10-28 19:52:11
* @Last Modified by:   VINCE
* @Last Modified time: 2015-12-15 12:02:15
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

  //One parent view - sets flexDirection to row, and space-between
  //Two child views
  render: function(){
    return (
      /* jshint ignore:start */
      <CustomCell onPress={this._handlePress}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
            <TouchableHighlight onPress={this.removeExercise} activeOpacity={.8} underlayColor={'#BFBFBF'}>
              <Image
                style={{height: 14, width: 14, marginTop: 5, marginRight: 8}}
                source={require('image!clearButton')} />
            </TouchableHighlight>
            <ViewExercise exercise={this.props.exercise} />
          </View>
          <Image
            style={{height: 13, width: 8}}
            source={require('image!disclosureIndicator')} />
        </View>
      </CustomCell>
      /* jshint ignore:start */
    );
  }
});

module.exports = EditExerciseCell;
