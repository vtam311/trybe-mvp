/*
* @Author: vincetam
* @Date:   2016-01-19 17:52:37
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-20 12:03:13
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
        <TouchableOpacity onPress={this.handlePress} style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            style={{height: 25, width: 25, marginTop: 3, marginRight: 10}}
            source={require('image!addButtonWhite')} />
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
    paddingTop: 25,
    paddingBottom: 15,
  },
  addExerciseText:{
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    fontSize: 25,
    color: '#fff'
  }
});

module.exports = AddExerciseView;
