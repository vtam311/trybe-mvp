/*
* @Author: vincetam
* @Date:   2015-10-29 15:00:08
* @Last Modified by:   VINCE
* @Last Modified time: 2015-12-13 18:15:07
*/

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  Text,
  Image
} = React;

import {CustomCell} from 'react-native-tableview-simple';

var DateCell = React.createClass({
  render: function(){
    return (
      /* jshint ignore:start */
      <CustomCell onPress={() => {console.log('Date')}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.cellPrompt}>Date</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.cellStatus}>Today</Text>
            <Image
              style={{height: 13, width: 8, marginTop: 4, marginLeft: 15}}
              source={require('image!disclosureIndicator')} />
          </View>
        </View>
      </CustomCell>
      /* jshint ignore:start */
    );
  }
});

var styles = StyleSheet.create({
  cellPrompt: {
    fontSize: 16,
    color: '#4A4A4A',
    fontFamily: 'Avenir Next'
  },
  cellStatus: {
    fontSize: 16,
    color: '#9B9B9B',
    fontFamily: 'Avenir Next'
  }
});

module.exports = DateCell;
