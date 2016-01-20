/*
* @Author: vincetam
* @Date:   2016-01-18 12:52:44
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-20 13:07:35
*/

'use strict';

var React = require('react-native');
var editWorkoutActions = require('../../actions/editWorkoutActions');
var editExerciseActions = require('../../actions/editExerciseActions');
var modalActions = require('../../actions/modalActions');

var {
  TouchableOpacity,
  Image,
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
    if(this.props.isModifying) {
      return (
        /* jshint ignore:start */
        <TouchableOpacity onPress={this.handlePress}>
          <View style={styles.exerciseContainer}>
            <ExNameAndParams
              exercise={this.props.exercise}
              exIdx={this.props.exIdx}
              customFontSize={25}
              customFontColor='#fff' />
            <View style={{flex: .05}}>
              <Image
                source={require('image!disclosureIndicatorWhite')}
                style={{marginTop: 10, marginLeft: 10}} />
            </View>
          </View>
        </TouchableOpacity>
        /* jshint ignore:end */
      );
    } else {
      return (
        <View style={styles.exerciseContainer}>
          <ExNameAndParams
            exercise={this.props.exercise}
            exIdx={this.props.exIdx}
            customFontSize={25}
            customFontColor='#fff' />
        </View>
      );
    }
  }
});

var styles = StyleSheet.create({
  exerciseContainer: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: .5,
    borderColor: '#fff',
    paddingTop: 15,
    paddingBottom: 15
  }
});

module.exports = ExerciseView;
