/*
* @Author: vincetam
* @Date:   2015-10-29 17:28:28
* @Last Modified by:   VINCE
* @Last Modified time: 2015-12-03 23:04:52
*/

'use strict';

var React = require('react-native');
var createWorkoutStore = require('../../stores/createWorkoutStore');
var editExerciseActions = require('../../actions/editExerciseActions');
var editExerciseStore = require('../../stores/editExerciseStore');

var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
  TextInput,
  SegmentedControlIOS,
} = React;

var RepPicker = require('./pickers/repPicker');

//Gets device height for animating app
var {
  height: deviceHeight
} = Dimensions.get('window');

var EXERCISE_TEMPLATE = {
  name: null,
  reps: null,
  load: {units: 'lbs', val: null},
  time: null,
  distance: {units: null, val: null},
  url: null
};

//Architect the system: a temp exercise obj in editExerciseStore
//that, when CreateExerciseModal loads, copies the target exercise
//obj from createExerciseStore.
  //editExerciseStore is loaded with createExerciseStore's targetExercise
  //currentExercise, from editExerciseStore, should be what I use to work off of
//On any edits from repPicker, the temp exercise obj gets updated.
  //the state of the exercise obj should be reflected from editExerciseStore
  //use editExerciseActions to update exercise obj
//On save, the temp exercise obj overwrites the target exercise obj
  //this state's workout can be used to overwrite createExerciseStore's
  //reference spot for targetExercise
//On cancel, nothing changes.

var CreateExerciseModal = React.createClass({
  getInitialState: function() {
    return {
      offset: new Animated.Value(deviceHeight),
      partIdx: createWorkoutStore.getTargetPartIdx(),
      exIdx: createWorkoutStore.getTargetExerciseIdx(),
      targetExercise: createWorkoutStore.getTargetExercise(),
    };
  },
  componentDidMount: function() {
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: 0
    }).start();
    createWorkoutStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    createWorkoutStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      partIdx: createWorkoutStore.getTargetPartIdx(),
      exIdx: createWorkoutStore.getTargetExerciseIdx(),
      targetExercise: createWorkoutStore.getTargetExercise()
    });
  },
  closeModal: function() {
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: deviceHeight
    }).start(this.props.closeModal);
  },
  saveExercise: function(){
    //save exercise from editExerciseStore into createWorkoutStore
    this.closeModal();
  },
  render: function() {
    return (
      <Animated.View style={[styles.modal, styles.flexCenter, {transform: [{translateY: this.state.offset}]}]}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress={this.closeModal}>
                <Text style={styles.headerButtonText}>Cancel</Text>
              </TouchableOpacity>
              <Text style={styles.headerTitleText}>New Exercise</Text>
              <TouchableOpacity onPress={this.closeModal}>
                <Text style={styles.headerButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.bodyContainer}>
              <TextInput
                style={styles.textInput}
                placeholder={'Exercise Name'}
                placeholderTextColor={'#9B9B9B'}/>
              <View style={{marginTop: 15}}>
                <SegmentedControlIOS
                  values={['Reps', 'Weight', 'Distance', 'Time']}
                  selectedIndex={0}
                  tintColor={'#4DBA97'}/>
                <RepPicker
                  partIdx={this.state.partIdx}
                  exIdx={this.state.exIdx}
                  targetExercise={this.state.targetExercise}/>
              </View>
            </View>
          </View>
        </View>
      </Animated.View>
    )
  }
});

//Note to self: underline in textInput is not showing up

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
    height: 360
  },
  bodyContainer: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15
  },
  textInput: {
    height: 40,
    marginTop: 15,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: 'black'
  }
});

module.exports = CreateExerciseModal;
