/*
* @Author: vincetam
* @Date:   2016-01-18 12:52:44
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-19 10:44:35
*/

'use strict';

var React = require('react-native');
var editWorkoutActions = require('../../actions/editWorkoutActions');
var editExerciseActions = require('../../actions/editExerciseActions');
var modalActions = require('../../actions/modalActions');

var {
  TouchableOpacity,
  View,
  StyleSheet,
} = React;

var ExNameAndParams = require('../../common/workoutViews/exNameAndParams');

var ExerciseView = React.createClass({
  handlePress: function(){
    //Notify editExerciseModal that user is modifying exercise
    //rather than creating one
    editExerciseActions.setModifyOrCreate('modify');

    //notify editWorkoutStore which exercise is being modified
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

module.exports = ExerciseView;
