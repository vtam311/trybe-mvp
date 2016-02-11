/*
* @Author: vincetam
* @Date:   2016-02-10 16:21:33
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-10 17:11:38
*/

'use strict';

var React = require('react-native');
var editWorkoutActions = require('../../actions/editWorkoutActions');
var viewWorkoutActions = require('../../actions/viewWorkoutActions');
var modalActions = require('../../actions/modalActions');
var newWorkout = require('../../common/newWorkout');
var newObject = require('../../common/copyObjectHelper');

//Load components
var ExerciseDescription = require('../../common/workoutViews/exerciseDescrText');
var ViewResults = require('../../common/workoutViews/viewResults');

var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} = React;

var Part = React.createClass({
  handleTryAgainPress: function(){
    //create a separate workout and part object to send to viewWorkout
    var separateWorkout = newWorkout(this.props.workout);
    separateWorkout.id = Math.random() * 9999;
    separateWorkout.date = new Date();
    var separatePart = newObject(this.props.part);
    separatePart.notes = '';

    //ensure workout only has the relevant part user selected
    separateWorkout.parts = [];
    separateWorkout.parts.push(separatePart);

    editWorkoutActions.setWorkout(separateWorkout);

    //notify editWorkoutStore to show custom workout rather than
    //default workout
    editWorkoutActions.setDefaultOrCustom('custom');

    //ensure all parts of workout in viewWorkout
    //are initialized to false for isLogged, since is new workout
    viewWorkoutActions.initPartsAreLogged();

    modalActions.openViewWorkoutModal();
  },
  render: function(){
    var part = this.props.part;
    var exercises = part.exercises.map((exercise, index) =>
      /* jshint ignore:start */
       <View style={styles.exerciseContainer} key={index}>
        <ExerciseDescription
          exercise={exercise} />
       </View>
      /* jshint ignore:end */
    );

    return (
      /* jshint ignore:start */
      <View style={styles.partContainer}>
        <Text style={styles.partNameText}>{part.name}</Text>
        <View style={styles.separatorLine}></View>
        <Text style={styles.instructionText}>{part.instructions}</Text>
        {exercises}
        <View style={styles.resultsContainer}>
          <ViewResults result={part.result} />
        </View>
        {this.props.showNotes === true && part.notes ?
          <View style={styles.notesContainer}>
            <Text numberOfLines={this.props.notesNumLines} style={styles.notesText}>{part.notes}</Text>
          </View> :
          null
        }
        <View style={styles.footer}>
          <TouchableOpacity style={styles.iconContainer} onPress={ () => this.handleTryAgainPress() } >
            <Text style={styles.footerText}>Try Again</Text>
            <Image
              source={require('image!tryIcon')}
              style={[styles.footerIcon]} />
          </TouchableOpacity>
        </View>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  partContainer: {
    flexDirection: 'column',
  },
  partNameText: {
    fontSize: 15,
    color: '#58504D',
    marginBottom: 8,
  },
  separatorLine: {
    height: .5,
    backgroundColor: '#d9d9d9',
    marginBottom: 10,
  },
  instructionText: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#8D867E',
    marginBottom: 6,
  },
  exerciseContainer: {
    paddingTop: 3,
    paddingBottom: 3
  },
  resultsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 30,
  },
  notesContainer: {
    flex: 1,
  },
  notesText: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#8D867E',
    marginBottom: 10
  },
  footer:{
    borderTopWidth: .5,
    borderColor: '#d9d9d9',
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  footerText:{
    fontFamily: 'Avenir Next',
    fontSize: 15,
    fontWeight: '500',
    color: '#8D867E'
  },
  footerIcon: {
    marginLeft: 5,
    marginRight: 5,
  },
});

module.exports = Part;