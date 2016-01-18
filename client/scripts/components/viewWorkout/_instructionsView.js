/*
* @Author: vincetam
* @Date:   2016-01-18 10:54:00
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-18 14:20:37
*/

'use strict';

var React = require('react-native');
var editWorkoutActions = require('../../actions/editWorkoutActions');
var modalActions = require('../../actions/modalActions');

var {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} = React;

var InstructionsView = React.createClass({
  handlePress: function(){
    this.props.setSwiperIdx(this.props.partIdx);
    //notify editWorkoutStore which instructions are being modified
    editWorkoutActions.setTargetPartIdx(this.props.partIdx);
    modalActions.openInstructionsModal();
  },
  render: function(){
    return (
      /* jshint ignore:start */
      <TouchableOpacity onPress={this.handlePress}>
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructionsText}>{this.props.instructions}</Text>
        </View>
      </TouchableOpacity>
      /* jshint ignore:start */
    );
  }
});

var styles = StyleSheet.create({
  instructionsContainer: {
    width: 300,
    marginTop: 30,
    marginBottom: 30,
  },
  instructionsText: {
    fontFamily: 'Avenir Next',
    fontSize: 25,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
  },
});

module.exports = InstructionsView;
