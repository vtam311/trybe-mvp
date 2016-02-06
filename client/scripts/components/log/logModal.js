/*
* @Author: vincetam
* @Date:   2016-01-02 15:53:03
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-06 11:22:36
*/

'use strict';

var React = require('react-native');
var editWorkoutStore = require('../../stores/editWorkoutStore');
var editWorkoutActions = require('../../actions/editWorkoutActions');
var viewWorkoutActions = require('../../actions/viewWorkoutActions');
var logModalStore = require('../../stores/logModalStore');
var logModalActions = require('../../actions/logModalActions');
var logActions = require('../../actions/logActions');
var modalActions = require('../../actions/modalActions');

var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Animated,
  Dimensions,
  TextInput,
  Image,
  SegmentedControlIOS
} = React;

//Load components
var SelectedResultInput = require('./logInputs/selectedResultInput');
var NotesInput = require('./logInputs/notesInput');

//Gets device height for animating app
var {
  height: deviceHeight
} = Dimensions.get('window');

//Gist: This component gets the target part's result from editWorkoutStore,
//and copies and initializes that result into logModalStore.
//Any edits are updated into logModalStore, and on press of 'Done',
//the updated copy overwrites the target result in editWorkoutStore
var LogModal = React.createClass({
  getInitialState: function() {
    return {
      offset: new Animated.Value(deviceHeight),
      partIdx: editWorkoutStore.getTargetPartIdx(),
      workout: editWorkoutStore.getWorkout(),
      //init result with result from editWorkoutStore
      //so component can render
      result: editWorkoutStore.getTargetPartResult(),
      notes: editWorkoutStore.getTargetPartNotes(),
      isShowingPicker: false,
      segmCtrlIdx: 0,
    };
  },
  componentWillMount: function() {
    logModalStore.addChangeListener(this._onChange);

    //initialize logModalStore with the result and notes
    logModalActions.initializeResult(this.state.result);
    logModalActions.initializeNotes(this.state.notes);

    //set default segmCtrlIdx based on val of result.type
    this.setDefaultSegmCtrlIdx();
  },
  componentDidMount: function() {
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: 0
    }).start();
  },
  componentWillUnmount: function() {
    logModalStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      workout: editWorkoutStore.getWorkout(),
      result: logModalStore.getResult(),
      notes: logModalStore.getNotes()
    });
  },
  closeModal: function() {
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: deviceHeight
    }).start(modalActions.closeLogModal);
  },
  setDefaultSegmCtrlIdx: function(){
    var segmCtrlIdx;
    //If no result type is provided, set to null.
    //If not time, rounds, or max load, default to custom
    switch(this.state.result.type) {
      case null:
        segmCtrlIdx = null;
        break;
      case 'Time':
        segmCtrlIdx = 0;
        break;
      case 'Rounds':
        segmCtrlIdx = 1;
        break;
      case 'Max Load':
        segmCtrlIdx = 2;
        break;
      default:
        segmCtrlIdx = 3;
    }
    this.setState({
      segmCtrlIdx: segmCtrlIdx
    });
  },
  setMetric: function(val){
    //Depending on the selected val, the picker should change
    var seg;
    if(val === 'Time') seg = 0;
    else if(val === 'Rounds') seg = 1;
    else if(val === 'Max Load') seg = 2;
    else if(val === 'Custom') seg = 3;

    this.setState({
      segmCtrlIdx: seg
    });
  },
  getCurrMetricText: function(){
    var result;
    switch(this.state.segmCtrlIdx) {
      case null:
        result = null;
        break;
      case 0:
        result = 'Time';
        break;
      case 1:
        result = 'Rounds';
        break;
      case 2:
        result = 'Max Load';
        break;
      default:
        result = 'Custom';
    }
    return result;
  },
  saveChanges: function(){
    editWorkoutActions.savePartResult(this.state.result);
    editWorkoutActions.savePartNotes(this.state.notes);
    viewWorkoutActions.setPartIsLoggedTrue(this.state.partIdx);
    logActions.addWorkoutPart(this.state.workout, this.state.partIdx);
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
              <Text style={styles.headerTitleText}>Log Results</Text>
              <TouchableOpacity onPress={this.saveChanges}>
                <Text style={styles.headerButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.bodyContainer}>
              <View style={styles.metricControlContainer}>
                <TouchableOpacity onPress={() => this.setState({isShowingPicker: !this.state.isShowingPicker})}>
                  <View style={styles.metricControlRow}>
                    <Text style={styles.text}>Metric</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text style={[styles.text, {color: '#A79D93'}]}>{this.getCurrMetricText()}</Text>
                      <Image
                        source={require('image!disclosureIndicator')}
                        style={{width: 8, height: 13, marginLeft: 7, marginBottom: 1}} />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              {this.state.isShowingPicker ?
                <SegmentedControlIOS
                  values={['Time', 'Rounds', 'Max Load', 'Custom']}
                  selectedIndex={this.state.segmCtrlIdx}
                  onValueChange={(val) => this.setMetric(val)}
                  tintColor={'#4DBA97'}/>
                : null}

              <SelectedResultInput
                result={this.state.result}
                segmCtrlIdx={this.state.segmCtrlIdx}
                partIdx={this.state.partIdx} />
              <NotesInput
                notes={this.state.notes} />
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
    paddingBottom: 100,
    backgroundColor: 'rgba(155, 155, 155, 0.4)',
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    height: 450,
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
    fontSize: 17,
    fontWeight: '500',
    color: '#4A4A4A'
  },
  headerButtonText: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    fontWeight: '500',
    color: '#4DBA97',
  },
  body: {
    height: 100,
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  metricControlContainer:{
    marginTop: 15,
    marginBottom: 15
  },
  metricControlRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text:{
    fontFamily: 'Avenir Next',
    fontSize: 16,
    fontWeight: '500',
    color: 'black'
  }
});

module.exports = LogModal;
