/*
* @Author: vincetam
* @Date:   2016-02-17 16:16:50
* @Last Modified by:   VINCE
* @Last Modified time: 2016-02-17 18:23:45
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
    var nextPartName;

    //If the workout's part is followed by another part, gets its name
    if(workout.parts[currPartIdx + 1]){
      //if it has a name, get it. Otherwise, name it Part #
      if(workout.parts[currPartIdx + 1].name){
        nextPartName = workout.parts[currPartIdx + 1].name;
      } else {
        nextPartName = 'Part ' + (currPartIdx+1);
      }
    }

    return (
      <View style={styles.container}>
        <View style={styles.congratContent}>
          <ViewResults result={result} />
          <Text style={styles.congratText}>. Great work!</Text>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity onPress={this.handleCompleteWorkoutPress}>
            <Text>Complete</Text>
          </TouchableOpacity>

          <Text>OR</Text>

          {nextPartName ?
            <TouchableOpacity onPress={this.handleContinueWorkoutPress}>
              <Text>Continue To {nextPartName}</Text>
            </TouchableOpacity>
            : null
          }
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
