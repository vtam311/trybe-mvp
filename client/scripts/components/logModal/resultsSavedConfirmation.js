/*
* @Author: vincetam
* @Date:   2016-02-17 16:16:50
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-17 19:36:54
*/

'use strict';

var React = require('react-native');
var editWorkoutStore = require('../../stores/editWorkoutStore');
var viewWorkoutActions = require('../../actions/viewWorkoutActions');
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
    //Set the currPartIdx of ViewWorkoutModal to be the next one,
    //so it preloads for user
    var nextPartIdx = editWorkoutStore.getTargetPartIdx() + 1;

    viewWorkoutActions.setCurrPartIdx(nextPartIdx);
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
          <Text style={styles.text}>. Great work!</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={this.handleCompleteWorkoutPress}>
            <Text style={styles.buttonText}>Complete</Text>
          </TouchableOpacity>

          {nextPartName ?
            <View style={styles.continueContent}>
              <Text style={styles.text}>OR</Text>
              <TouchableOpacity onPress={this.handleContinueWorkoutPress}>
                <Text style={styles.buttonText}>Continue To {nextPartName}</Text>
              </TouchableOpacity>
            </View>
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
  text: {
    color: '#58504D',
    fontSize: 15,
  },
  buttonsContainer: {
    flex: .66,
    flexDirection: 'column',
    alignItems: 'center'
  },
  continueContent: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  buttonText: {
    color: '#4dba97',
    fontWeight: '600',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20
  }
});

module.exports = ResultsSavedConfirmation;
