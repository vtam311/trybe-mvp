/*
* @Author: vincetam
* @Date:   2015-10-28 19:45:13
* @Last Modified by:   vincetam
* @Last Modified time: 2015-10-28 19:51:22
*/

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  Text,
  TextInput,
} = React;

import {CustomCell} from 'react-native-tableview-simple';

var CreateInstructionsCell = React.createClass({
  render: function(){
    return (
      /* jshint ignore:start */
      <CustomCell customHeight={70}>
        <View style={{flex: 1, flexDirection: 'column', marginTop: 5}}>
          <Text style={{fontSize: 14, color: '#9B9B9B', fontFamily: 'Avenir Next'}}>Instructions</Text>
          <TextInput
              style={{height: 40}}/>
        </View>
      </CustomCell>
      /* jshint ignore:start */
    );
  }
});

module.exports = CreateInstructionsCell;
