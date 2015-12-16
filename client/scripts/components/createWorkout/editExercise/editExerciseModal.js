/*
* @Author: vincetam
* @Date:   2015-10-29 17:28:28
* @Last Modified by:   VINCE
* @Last Modified time: 2015-12-15 17:07:30
*/

'use strict';

var React = require('react-native');
var createWorkoutStore = require('../../../stores/createWorkoutStore');
var createWorkoutActions = require('../../../actions/createWorkoutActions');
var editExerciseActions = require('../../../actions/editExerciseActions');
var editExerciseStore = require('../../../stores/editExerciseStore');

var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
  TextInput,
  SegmentedControlIOS,
  Image,
} = React;

//Load components
var EditExerciseName = require('./editExerciseName');
var SelectedExercisePicker = require('./selectedExercisePicker');
var ViewExercise = require('../../../common/viewWorkoutComponents/viewExercise');

//Gets device height for animating app
var {
  height: deviceHeight
} = Dimensions.get('window');

//Gist: This modal lets user edit or create a new exercise.
//If editing an existing exercise, we copy that exercise from createWorkoutStore
//and store a temp exercise obj in editExerciseStore which reflects that copy.
//All changes from user to the exercise go to the editExerciseStore.
//When user saves changes, the exercise obj in editExerciseStore overwrites
//the original targetExercise in createWorkoutStore.

var EditExerciseModal = React.createClass({
  getInitialState: function() {
    return {
      offset: new Animated.Value(deviceHeight),
      partIdx: createWorkoutStore.getTargetPartIdx(),
      exIdx: createWorkoutStore.getTargetExerciseIdx(),
      targetExercise: createWorkoutStore.getTargetExercise(),
      exPickerIdx: 0,
      //Initially set currentExercise to createWorkoutStore's targetExercise
      //so downstream components can load with data. However,
      //currentExercise will reflect editExerciseStore's exercise
      currentExercise: createWorkoutStore.getTargetExercise(),
    };
  },
  componentDidMount: function() {
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: 0
    }).start();
    editExerciseStore.addChangeListener(this._onChange);

    //initialize currentExercise with the targetExercise user is editting
    editExerciseActions.initializeExercise(this.state.targetExercise);
  },
  componentWillUnmount: function() {
    editExerciseStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      currentExercise: editExerciseStore.getExercise()
    });
  },
  closeModal: function() {
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: deviceHeight
    }).start(this.props.closeModal);
  },
  setExercisePicker: function(val){
    //Depending on the selected val, the picker should change
    var seg;
    if(val === 'Reps') seg = 0;
    if(val === 'Weight') seg = 1;
    if(val === 'Distance') seg = 2;
    if(val === 'Time') seg = 3;

    this.setState({
      exPickerIdx: seg
    });
  },
  saveExercise: function(){
    //save exercise from editExerciseStore into createWorkoutStore
    var exercise = this.state.currentExercise;
    createWorkoutActions.saveExercise(exercise);
    this.closeModal();
  },
  removeExercise: function(){
    createWorkoutActions.removeExercise(this.state.partIdx, this.state.exIdx);
    this.closeModal();
  },
  render: function() {
    //Gist: Renders a modal for creating or editing an exercise object
    //SelectedExercisePicker component shows a PickerIOS component to edit
    //either reps, load, time, distance, etc. based on user's selection
    //from SegmentedControlIOS

    //Declare for reference in showExercisePreviewIfFilled
    var currentExercise = this.state.currentExercise;
    var removeExercise = this.removeExercise;
    var showExercisePreviewIfFilled = function(){
      if(currentExercise.name){
        //If the user provides an exercise name, show preview
        return <ViewExercise exercise={currentExercise} />;
      }else{
        //Otherwise render the delete text next to the delete icon
        return (
          <TouchableOpacity>
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        );

      }
    };

    return (
      <Animated.View style={[styles.modal, styles.flexCenter, {transform: [{translateY: this.state.offset}]}]}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress={this.closeModal}>
                <Text style={styles.headerButtonText}>Cancel</Text>
              </TouchableOpacity>
              <Text style={styles.headerTitleText}>New Exercise</Text>
              <TouchableOpacity onPress={this.saveExercise}>
                <Text style={styles.headerButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.bodyContainer}>
              <EditExerciseName exerciseName={this.state.currentExercise.name} />
              <View style={{marginTop: 10}}>
                <SegmentedControlIOS
                  values={['Reps', 'Weight', 'Distance', 'Time']}
                  selectedIndex={this.state.exPickerIdx}
                  onValueChange={(val) => this.setExercisePicker(val)}
                  tintColor={'#4DBA97'}/>
                <SelectedExercisePicker
                  exPickerIdx={this.state.exPickerIdx}
                  partIdx={this.state.partIdx}
                  exIdx={this.state.exIdx}
                  currentExercise={this.state.currentExercise} />
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity>
              <Image
                style={{height: 18, width: 18, marginLeft: 0}}
                source={require('image!deleteButton')} />
            </TouchableOpacity>
            <View style={{marginLeft: 5}}>
              {showExercisePreviewIfFilled()}
            </View>
          </View>

        </View>
      </Animated.View>
    )
  }
});

var styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(155, 155, 155, 0.4)',
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    height: 400,
    width: 340,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 3,
    shadowColor: '#9B9B9B',
    shadowOpacity: 8,
  },
  header: {
    height: 40,
    borderBottomWidth: .5,
    borderBottomColor: 'rgba(155, 155, 155, 0.7)',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  headerTitleText: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    fontWeight: '500',
    color: '#4A4A4A'
  },
  headerButtonText: {
    fontFamily: 'Avenir Next',
    fontSize: 15,
    fontWeight: '500',
    color: '#4DBA97',
  },
  body: {
    height: 320,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  bodyContainer: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  footer: {
    flex: 1,
    height: 40,
    borderTopColor: '#9B9B9B',
    borderTopWidth: .5,
    borderTopColor: 'rgba(155, 155, 155, 0.7)',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  deleteText: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    color: '#FA6F80'
  }
});

module.exports = EditExerciseModal;
