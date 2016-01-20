/*
* @Author: vincetam
* @Date:   2016-01-19 17:52:37
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-19 17:55:22
*/

'use strict';

var React = require('react-native');
var editWorkoutActions = require('../../actions/editWorkoutActions');
var editExerciseActions = require('../../actions/editExerciseActions');
var modalActions = require('../../actions/modalActions');

var {
  TouchableOpacity,
  Image,
  Text,
  View,
  StyleSheet,
} = React;

var AddExerciseView = React.createClass({
  handlePress: function(){
    //Notify editExerciseModal that user is creating new exercise
    //rather than modifying one
    editExerciseActions.setModifyOrCreate('create');

    //Set up editExerciseModal to point to correct exercise
    editWorkoutActions.addExercise(this.props.partIdx);
    modalActions.openExerciseModal();
  },
  render: function(){
    return (
      /* jshint ignore:start */
      <View style={styles.exerciseContainer}>
        <TouchableOpacity onPress={this.handlePress}>
          <Image
            style={{height: 18, width: 18, marginRight: 5}}
            source={require('image!addButton')} />
          <Text style={styles.addExerciseText}>Add Exercise</Text>
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

module.exports = AddExerciseView;
