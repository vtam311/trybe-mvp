/*
* @Author: vincetam
* @Date:   2015-10-29 17:28:28
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-19 10:40:18
*/

'use strict';

var React = require('react-native');
var editWorkoutStore = require('../../../stores/editWorkoutStore');
var editWorkoutActions = require('../../../actions/editWorkoutActions');
var editExerciseActions = require('../../../actions/editExerciseActions');
var editExerciseStore = require('../../../stores/editExerciseStore');
var modalActions = require('../../../actions/modalActions');

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

var TouchableWithoutFeedback = require('TouchableWithoutFeedback');
var dismissKeyboard = require('dismissKeyboard');

//Load components
var EditExerciseName = require('./editExerciseName');
var SelectedExercisePicker = require('./selectedExercisePicker');
var ExerciseDescriptionText = require('../../../common/workoutViews/exerciseDescrText');

//Gets device height for animating app
var {
  height: deviceHeight
} = Dimensions.get('window');

//Gist: This modal lets user edit or create a new exercise.
//If editing an existing exercise, we copy that exercise from editWorkoutStore
//and store a temp exercise obj in editExerciseStore which reflects that copy.
//All changes from user to the exercise go to the editExerciseStore.
//When user saves changes, the exercise obj in editExerciseStore overwrites
//the original targetExercise in editWorkoutStore.

var EditExerciseModal = React.createClass({
  getInitialState: function() {
    return {
      partIdx: editWorkoutStore.getTargetPartIdx(),
      exIdx: editWorkoutStore.getTargetExerciseIdx(),
      //init targetExercise from editWorkoutStore to render
      targetExercise: editWorkoutStore.getTargetExercise(),
      isModifyOrCreate: editExerciseStore.getIsModifyOrCreate(),
      exPickerIdx: 0,
      currentExercise: null,
      offset: new Animated.Value(deviceHeight),
    };
  },
  componentWillMount: function() {
    editExerciseStore.addChangeListener(this._onChange);
    //initialize currentExercise with the targetExercise user is editting
    editExerciseActions.initializeExercise(this.state.targetExercise);
  },
  componentDidMount: function() {
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: 0
    }).start();
  },
  componentWillUnmount: function() {
    editExerciseStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      currentExercise: editExerciseStore.getExercise(),
    });
  },
  closeModal: function() {
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: deviceHeight
    }).start(modalActions.closeExerciseModal());
  },
  getHeaderTitle: function(){
    if(this.state.isModifyOrCreate === 'create'){
      return 'New Exercise';
    } else {
      return 'Modify Exercise';
    }
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
    //save exercise from editExerciseStore into editWorkoutStore
    editWorkoutActions.saveExercise(this.state.currentExercise);
    this.closeModal();
  },
  removeExercise: function(){
    editWorkoutActions.removeExercise(this.state.partIdx, this.state.exIdx);
    this.closeModal();
  },
  hideKeyboard: function(){
    dismissKeyboard();
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
        return <ExerciseDescriptionText exercise={currentExercise} />;
      }else{
        //Otherwise render the delete text next to the delete icon
        return (
          <TouchableOpacity onPress={removeExercise}>
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        );
      }
    };

    return (
      <Animated.View style={[styles.modal, styles.flexCenter, {transform: [{translateY: this.state.offset}]}]}>
        <TouchableWithoutFeedback onPress={this.hideKeyboard}>
          <View style={styles.container} >
            <View style={styles.header}>
              <View style={styles.headerContainer}>
                <TouchableOpacity onPress={this.closeModal}>
                  <Text style={styles.headerButtonText}>Cancel</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitleText}>{this.getHeaderTitle()}</Text>
                <TouchableOpacity onPress={this.saveExercise}>
                  <Text style={styles.headerButtonText}>Done</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.body}>
              <View ref="exNameTextInput" style={styles.bodyContainer}>
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
              <TouchableOpacity onPress={this.removeExercise}>
                <Image
                  style={{height: 18, width: 18, marginLeft: 0}}
                  source={require('image!deleteButton')} />
              </TouchableOpacity>
              <View style={{marginLeft: 5}}>
                {showExercisePreviewIfFilled()}
              </View>
            </View>

          </View>
        </TouchableWithoutFeedback>
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
