/*
* @Author: vincetam
* @Date:   2015-10-28 19:52:11
* @Last Modified by:   VINCE
* @Last Modified time: 2015-12-15 15:13:00
*/

'use strict';

var React = require('react-native');
var createWorkoutActions = require('../../../actions/createWorkoutActions');

//Load components
var ViewExercise = require('../../../common/viewWorkoutComponents/viewExercise');

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

  render: function(){
    return (
      /* jshint ignore:start */
      <CustomCell onPress={this._handlePress}>
        <View style={styles.cellContainer}>
          <View style={styles.exercisePreview}>
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
