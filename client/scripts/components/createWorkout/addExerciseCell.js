/*
* @Author: vincetam
* @Date:   2015-10-28 20:04:58
* @Last Modified by:   VINCE
* @Last Modified time: 2015-10-28 20:20:26
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
  render: function(){
    var exercise = this.props.exercise;
    var exerciseDisplay;

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
        // <Text style={{flex: 1, fontSize: 16, fontFamily: 'Avenir Next'}}>5 Pull Ups</Text>
  }
});

module.exports = AddExerciseCell;
