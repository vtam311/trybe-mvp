/*
* @Author: vincetam
* @Date:   2015-10-28 19:52:11
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-19 10:43:46
*/

'use strict';

var React = require('react-native');
var editWorkoutActions = require('../../../actions/editWorkoutActions');
var editExerciseActions = require('../../../actions/editExerciseActions');
var modalActions = require('../../../actions/modalActions');

//Load components
var ExerciseDescrText = require('../../../common/workoutViews/exerciseDescrText');

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
    //Notify editExerciseModal that user is modifying exercise
    //rather than creating one
    editExerciseActions.setModifyOrCreate('modify');

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
            <ExerciseDescrText exercise={this.props.exercise} customFontFamily='Avenir Next' />
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
