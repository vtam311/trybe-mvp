/*
* @Author: vincetam
* @Date:   2015-10-28 20:04:58
* @Last Modified by:   vincetam
* @Last Modified time: 2015-10-29 15:10:07
*/

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  Image
} = React;

import {CustomCell} from 'react-native-tableview-simple';

var AddExerciseCell = React.createClass({
  addExercise: function(){
    //pulls up modal on screen
    //adds exercise object to createWorkoutStore
    //allows for any adjustments to directly alter that exercise object
  },

  render: function(){
    return (
      /* jshint ignore:start */
      <CustomCell onPress={() => {console.log('Add Exercise Button')}}>
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
