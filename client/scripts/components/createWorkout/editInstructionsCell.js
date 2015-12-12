/*
* @Author: vincetam
* @Date:   2015-10-28 19:45:13
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-11 16:40:33
*/

'use strict';

var React = require('react-native');
var createWorkoutActions = require('../../actions/createWorkoutActions');

var {
  StyleSheet,
  View,
  Text,
  TextInput,
} = React;

import {CustomCell} from 'react-native-tableview-simple';

var EditInstructionsCell = React.createClass({
  getInitialState: function() {
    return {
      instructions: this.props.instructions,
    };
  },
  setInstructions: function(instructions) {
    createWorkoutActions.setInstructions(instructions, this.props.partIdx);

    this.setState({
      instructions: instructions
    });
  },
  render: function(){
    return (
      /* jshint ignore:start */
      <View>
        <CustomCell customHeight={70}>
          <View style={{flex: 1, flexDirection: 'column', marginTop: 5}}>
            <Text style={{fontSize: 14, color: '#9B9B9B', fontFamily: 'Avenir Next'}}>Instructions</Text>
            <TextInput
              value={this.state.instructions}
              onChangeText={(text) => this.setInstructions(text)}
              style={{height: 40}}/>
          </View>
        </CustomCell>
        <View style={styles.cellSeparatorBackground}>
          <View style={styles.cellSeparatorLine}></View>
        </View>
      </View>
      /* jshint ignore:start */
    );
  }
});

var styles = StyleSheet.create({
  cellSeparatorBackground: {
    backgroundColor: '#fff',
  },
  cellSeparatorLine: {
    marginLeft: 15,
    height: 0.5,
    backgroundColor: '#c8c7cc',
  }
});

module.exports = EditInstructionsCell;
