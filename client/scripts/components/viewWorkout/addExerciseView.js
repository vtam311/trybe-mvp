/*
* @Author: vincetam
* @Date:   2016-01-19 17:52:37
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-05 10:21:41
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
      <View style={styles.addExerciseContainer}>
        <TouchableOpacity onPress={this.handlePress} style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{height: 25, width: 25, marginBottom: 2, marginRight: 10}}
              source={require('image!addButtonWhite')} />
            <Text style={styles.addExerciseText}>Add Exercise</Text>
          </View>
        </TouchableOpacity>
      </View>
      /* jshint ignore:start */
    );
  }
});

var styles = StyleSheet.create({
  addExerciseContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'rgba(23,115,140,.75)',
  },
  addExerciseText:{
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    fontSize: 24,
    color: '#fff'
  }
});

module.exports = AddExerciseView;
