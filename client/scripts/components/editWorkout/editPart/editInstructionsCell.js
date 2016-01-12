/*
* @Author: vincetam
* @Date:   2015-10-28 19:45:13
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-12 12:55:13
*/

'use strict';

var React = require('react-native');
var editWorkoutActions = require('../../../actions/editWorkoutActions');
var modalActions = require('../../../actions/modalActions');

var {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} = React;

import {CustomCell} from 'react-native-tableview-simple';

var EditInstructionsCell = React.createClass({
  setInstructions: function(instructions) {
    editWorkoutActions.setInstructions(instructions, this.props.partIdx);
  },
  handlePartDisclosurePress: function(){
    //Let editWorkoutStore know which part we are editing
    editWorkoutActions.setTargetPartIdx(this.props.partIdx);
    modalActions.openPartModal();
  },
  renderPartLabel: function(){
    //If a name is provided for part, render it
    if(this.props.partName) {
      return this.props.partName.toUpperCase();
    } else {
      //Otherwise show default name of PART (num)
      return 'PART ' + (this.props.partIdx + 1);
    }
  },


  render: function(){
    //Gets the ref of parent component in editWorkout,
    //so onFocus of TextInput can scroll component to view
    var parentRef = 'part' + this.props.partIdx;

    return (
      /* jshint ignore:start */
      <View>
        <CustomCell customHeight={90} onPress={this.handlePartDisclosurePress}>
          <View style={styles.cellContainer}>
            <View style={styles.cellRow}>
              <Text style={styles.partNameText}>{this.renderPartLabel()}</Text>
              <Image
                style={{height: 13, width: 8}}
                source={require('image!disclosureIndicator')} />
            </View>
            <View ref='instructionsTextInput' style={styles.instructionsContainer}>
              <TextInput
                value={this.props.instructions}
                placeholder='Instructions, ie. 21-15-9 of'
                onChangeText={(text) => this.setInstructions(text)}
                multiline={true}
                style={styles.instructionsTextInput}
                onFocus={this.props.scrollToComponent.bind(this, parentRef, 'instrTextInput')} />
            </View>
          </View>
        </CustomCell>
        <View style={styles.cellSeparatorBackground}>
          <View style={styles.cellSeparatorLine}></View>
        </View>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  cellContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10,
  },
  cellRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  partNameText: {
    fontSize: 14,
    color: '#9B9B9B',
    fontFamily: 'Avenir Next'
  },
  instructionsContainer: {
    marginTop: 10,
  },
  instructionsTextInput: {
    height: 40,
    fontFamily: 'Avenir Next',
    color: '#2D2D2D',
    fontSize: 18
  },
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
