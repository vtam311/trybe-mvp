/*
* @Author: vincetam
* @Date:   2015-10-28 19:52:11
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-12 12:39:56
*/

'use strict';

var React = require('react-native');
var editWorkoutActions = require('../../../actions/editWorkoutActions');
var modalActions = require('../../../actions/modalActions');

//Load components
var ViewExercise = require('../../../common/viewWorkoutComponents/viewExercise');

var {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
} = React;

import {CustomCell} from 'react-native-tableview-simple';

var EditExerciseCell = React.createClass({
  _handlePress: function(){
    //sets the target exercise for user to edit
    editWorkoutActions.setTargetExerciseIdx(this.props.partIdx, this.props.exIdx);
    modalActions.openExerciseModal();
  },

  render: function(){
    return (
      /* jshint ignore:start */
      <CustomCell onPress={this._handlePress}>
        <View style={styles.cellContainer}>
          <View style={styles.exercisePreview}>
            <ViewExercise exercise={this.props.exercise} customFontFamily='Avenir Next' />
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

var styles = StyleSheet.create({
  cellContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  exercisePreview: {
    flexDirection: 'row',
    alignItems: 'center'
  },
});

module.exports = EditExerciseCell;
