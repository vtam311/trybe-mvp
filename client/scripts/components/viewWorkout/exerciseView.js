/*
* @Author: vincetam
* @Date:   2016-01-18 12:52:44
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-03 22:44:34
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

var ExNameAndParams = require('./new_ExNameAndParams');

var ExerciseView = React.createClass({
  handlePress: function(){
    //Notify editExerciseModal that user is modifying existing
    //exercise rather than creating a new one
    editExerciseActions.setModifyOrCreate('modify');

    //notify editWorkoutStore which exercise is being modified
    editWorkoutActions.setTargetExerciseIdx(this.props.partIdx, this.props.exIdx);
    modalActions.openExerciseModal();
  },
  render: function(){
    if(this.props.isModifying) {
      return (
        /* jshint ignore:start */
          <View style={styles.exerciseContainer}>
            <ExNameAndParams
              exercise={this.props.exercise}
              partIdx={this.props.partIdx}
              exIdx={this.props.exIdx}
              customFontSize={25}
              customFontColor='#fff' />
            <View style={{flex: .1, flexDirection: 'row', justifyContent: 'flex-end', marginLeft: 15}}>
             <TouchableOpacity
              onPress={this.handlePress}
              style={{padding: 8, position: 'relative'}}>
                <Image
                  source={require('image!infoIcon')} />
              </TouchableOpacity>
            </View>
          </View>
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
    // alignItems: 'center',
    borderBottomWidth: .5,
    borderColor: '#fff',
    paddingTop: 15,
    paddingBottom: 15
  }
});

module.exports = ExerciseView;
