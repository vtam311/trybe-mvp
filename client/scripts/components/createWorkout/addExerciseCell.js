/*
* @Author: vincetam
* @Date:   2015-10-28 20:04:58
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-12 15:58:57
*/

'use strict';

var React = require('react-native');
var createWorkoutActions = require('../../actions/createWorkoutActions');

var {
  StyleSheet,
  Text,
  Image
} = React;

import {CustomCell} from 'react-native-tableview-simple';

var AddExerciseCell = React.createClass({
  //Currently:
    //addExercise immediately adds a new ex obj into createWorkoutStore
      //needed since editExerciseModal needs to load an exercise, so gets it from createWorkoutStore
  //Want:
    //addExercise to open up editExerciseModal using an exercise template,
    //BUT only to add an exercise once 'Done' is clicked.
  //Solution:
    //addExercise doesn't need to add an exercise to createWorkoutStore -- it can simply set
    //the partIdx and exIdx, and set the targetExercise to an exercise template
  _handleAddExercisePress: function(){
    //adds exercise object to createWorkoutStore
    createWorkoutActions.addExercise(this.props.partIdx);
    //allows for any adjustments to directly alter that exercise object
    createWorkoutActions.setTargetExerciseIdx(this.props.partIdx);
    //pulls up modal on screen
    this.props.openExerciseModal();
  },

  render: function(){
    return (
      /* jshint ignore:start */
      <CustomCell onPress={this._handleAddExercisePress}>
        <Image
          style={{height: 14, width: 14, marginTop: 0, marginRight: 8}}
          source={require('image!addButton')} />
        <Text style={{flex: 1, fontFamily: 'Avenir Next', fontSize: 16, color: '#9B9B9B'}}>Add Exercise</Text>
      </CustomCell>
      /* jshint ignore:start */
    );
  }
});

module.exports = AddExerciseCell;
