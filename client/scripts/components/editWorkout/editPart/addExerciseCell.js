/*
* @Author: vincetam
* @Date:   2015-10-28 20:04:58
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-12 12:56:03
*/

'use strict';

var React = require('react-native');
var editWorkoutActions = require('../../../actions/editWorkoutActions');
var modalActions = require('../../../actions/modalActions');

var {
  Text,
  Image
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
          style={{height: 14, width: 14, marginTop: 0, marginRight: 8}}
          source={require('image!addButton')} />
        <Text style={{flex: 1, fontFamily: 'Avenir Next', fontSize: 16, color: '#9B9B9B'}}>Add Exercise</Text>
      </CustomCell>
      /* jshint ignore:start */
    );
  }
});

module.exports = AddExerciseCell;
