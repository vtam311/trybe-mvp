/*
* @Author: vincetam
* @Date:   2015-10-28 19:45:13
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-22 17:41:12
*/

'use strict';

var React = require('react-native');
var createWorkoutActions = require('../../../actions/createWorkoutActions');

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
  handlePartDisclosurePress: function(){
    //Let createWorkoutStore know which part we are editing
    createWorkoutActions.setTargetPartIdx(this.props.partIdx);
    this.props.openPartModal();
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
    //Gets the ref of parent component in createWorkout,
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
                value={this.state.instructions}
                placeholder='Instructions'
                autoCapitalize='words'
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
      /* jshint ignore:start */
    );
  }
});

var styles = StyleSheet.create({
  cellContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10,
    // backgroundColor: 'grey'
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
    // backgroundColor: 'black'
  },
  instructionsTextInput: {
    height: 40,
    fontFamily: 'Avenir Next',
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
