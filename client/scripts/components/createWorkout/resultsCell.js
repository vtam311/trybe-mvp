/*
* @Author: vincetam
* @Date:   2015-12-13 17:20:32
* @Last Modified by:   VINCE
* @Last Modified time: 2015-12-13 17:46:32
*/

'use strict';

var React = require('react-native');

var {
  SwitchIOS,
  View,
  StyleSheet,
  Text,
} = React;

import {CustomCell} from 'react-native-tableview-simple';

var ResultsCell = React.createClass({
  _handlePress: function(){
    console.log('ResultsCell pressed');
  },

  adjustHeight: function() {
    return 44;
  },

  render: function(){

    return (
      /* jshint ignore:start */
      <CustomCell customHeight={this.adjustHeight()}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.cellPrompt}>Record Results</Text>
          <SwitchIOS />
        </View>
      </CustomCell>
      /* jshint ignore:start */
    );
  }
});

var styles = StyleSheet.create({
  cellPrompt: {
    fontSize: 16,
    color: '#9B9B9B',
    fontFamily: 'Avenir Next',
    marginTop: 5
  },
  cellStatus: {
    fontSize: 16,
    fontFamily: 'Avenir Next'
  }
});


module.exports = ResultsCell;