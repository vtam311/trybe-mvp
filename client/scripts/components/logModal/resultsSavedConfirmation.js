/*
* @Author: vincetam
* @Date:   2016-02-17 16:16:50
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-17 18:16:49
*/

'use strict';

var React = require('react-native');
var editWorkoutStore = require('../../stores/editWorkoutStore');
var modalActions = require('../../actions/modalActions');
var tabActions = require('../../actions/tabActions');

//Load components
var ViewResults = require('../../common/workoutViews/viewResults');

var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} = React;

var ResultsSavedConfirmation = React.createClass({
  handleCompleteWorkoutPress: function(){
    modalActions.closeLogModal();
    modalActions.closeViewWorkoutModal();
    tabActions.setTab('profile');
  },
  handleContinueWorkoutPress: function(){
    modalActions.closeLogModal();
  },
  render: function() {
    var workout = editWorkoutStore.getWorkout();
    var currPartIdx = editWorkoutStore.getTargetPartIdx();
    var result = workout.parts[currPartIdx].result;

    return (
      <View style={styles.container}>
        <View style={styles.congratContent}>
          <ViewResults result={result} />
          <Text style={styles.congratText}>. Great work!</Text>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity onPress={this.handleCompleteWorkoutPress}>
            <Text>View in Log</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleContinueWorkoutPress}>
            <Text>Continue Workout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  congratContent: {
    flex: .33,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  congratText: {
    color: '#58504D',
    fontSize: 15,
  },
  actionButtons: {
    flex: .66,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

module.exports = ResultsSavedConfirmation;
