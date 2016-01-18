/*
* @Author: vincetam
* @Date:   2016-01-18 12:52:44
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-18 12:57:49
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

var ExNameAndParams = require('../../common/viewWorkoutComponents/exNameAndParams');

var InstructionsView = React.createClass({
  handlePress: function(){
    //notify editWorkoutStore which instructions are being modified
    editWorkoutActions.setTargetExerciseIdx(this.props.partIdx, this.props.exIdx);
    modalActions.openExerciseModal();
  },
  render: function(){
    return (
      /* jshint ignore:start */
      <View style={styles.exerciseContainer}>
        <TouchableOpacity onPress={this.handlePress}>
          <ExNameAndParams
            exercise={this.props.exercise}
            exIdx={this.props.exIdx}
            customFontSize={25}
            customFontColor='#fff' />
        </TouchableOpacity>
      </View>
      /* jshint ignore:start */
    );
  }
});

var styles = StyleSheet.create({
  exerciseContainer: {
    width: 330,
    borderBottomWidth: .5,
    borderColor: '#fff',
    paddingTop: 15,
    paddingBottom: 15
  }
});

module.exports = InstructionsView;
