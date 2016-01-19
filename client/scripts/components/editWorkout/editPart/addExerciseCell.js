/*
* @Author: vincetam
* @Date:   2015-10-28 20:04:58
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-19 10:42:38
*/

'use strict';

var React = require('react-native');
var editWorkoutActions = require('../../../actions/editWorkoutActions');
var editExerciseActions = require('../../../actions/editExerciseActions');
var modalActions = require('../../../actions/modalActions');

var {
  Text,
  Image,
  StyleSheet
} = React;

import {CustomCell} from 'react-native-tableview-simple';

var AddExerciseCell = React.createClass({
  _handleAddExercisePress: function(){
    //Notify editExerciseModal that user is creating new exercise
    //rather than modifying one
    editExerciseActions.setModifyOrCreate('create');

    //Set up editExerciseModal to point to correct exercise
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
