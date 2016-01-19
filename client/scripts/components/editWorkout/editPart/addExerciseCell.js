/*
* @Author: vincetam
* @Date:   2015-10-28 20:04:58
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-18 21:14:35
*/

'use strict';

var React = require('react-native');
var editWorkoutActions = require('../../../actions/editWorkoutActions');
var modalActions = require('../../../actions/modalActions');

var {
  Text,
  Image,
  StyleSheet
} = React;

import {CustomCell} from 'react-native-tableview-simple';

var AddExerciseCell = React.createClass({
  _handleAddExercisePress: function(){
    //Sets up editExerciseModal to point to the correct
    //exercise in workout
    editWorkoutActions.addExercise(this.props.partIdx);
    modalActions.openExerciseModal();
  },

  render: function(){
    return (
      /* jshint ignore:start */
      <CustomCell onPress={this._handleAddExercisePress}>
        <Image
          style={{height: 18, width: 18, marginRight: 5}}
          source={require('image!addButton')} />
        <Text style={styles.addExerciseText}>Add Exercise</Text>
      </CustomCell>
      /* jshint ignore:start */
    );
  }
});

var styles = StyleSheet.create({
  addExerciseText: {
    color: 'rgba(0,173,148,.7)',
    fontFamily: 'Avenir Next',
    fontSize: 15,
  },
});

module.exports = AddExerciseCell;
