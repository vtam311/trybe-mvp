/*
* @Author: vincetam
* @Date:   2016-01-02 15:53:03
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-06 13:21:44
*/

'use strict';

var React = require('react-native');
var editWorkoutStore = require('../../stores/editWorkoutStore');
var logModalStore = require('../../stores/logModalStore');
var logModalActions = require('../../actions/logModalActions');

var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
  TextInput,
  Image,
  SegmentedControlIOS
} = React;

//Load components
var SelectedResultPicker = require('./selectedResultPicker');

//Gets device height for animating app
var {
  height: deviceHeight
} = Dimensions.get('window');

var LogModal = React.createClass({
  getInitialState: function() {
    return {
      offset: new Animated.Value(deviceHeight),
      partIdx: editWorkoutStore.getTargetPartIdx(),
      //init targetResult with result from editWorkoutStore
      //so component can render
      targetResult: editWorkoutStore.getTargetResult(),
      resultPickerIdx: 0,
    };
  },
  componentWillMount: function() {
    logModalStore.addChangeListener(this._onChange);
    //initialize result with the targetResult user is editting
    logModalActions.initializeResult(this.state.targetResult);
  },
  componentDidMount: function() {
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: 0
    }).start();
  },
  _onChange: function(){
    this.setState({targetResult: logModalStore.getResult()});
  },
  closeModal: function() {
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: deviceHeight
    }).start(this.props.closeModal);
  },
  setResultPicker: function(val){
    //Depending on the selected val, the picker should change
    var seg;
    if(val === 'Time') seg = 0;
    else if(val === 'Rounds') seg = 1;
    else if(val === 'Max Load') seg = 2;
    else if(val === 'Custom') seg = 3;

    this.setState({
      resultPickerIdx: seg
    });
  },
  saveResults: function(){
    //To do: save log results
    // editWorkoutActions.setPartName(this.state.partName);
    this.closeModal();
  },
  render: function() {
    console.log('logModal rendering');
    return (
      <Animated.View style={[styles.modal, styles.flexCenter, {transform: [{translateY: this.state.offset}]}]}>
        <View style={styles.container}>

          <View style={styles.header}>
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress={this.closeModal}>
                <Text style={styles.headerButtonText}>Cancel</Text>
              </TouchableOpacity>
              <Text style={styles.headerTitleText}>Log Results</Text>
              <TouchableOpacity onPress={this.saveResults}>
                <Text style={styles.headerButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.bodyContainer}>
              <SegmentedControlIOS
                values={['Time', 'Rounds', 'Max Load', 'Custom']}
                selectedIndex={this.state.resultPickerIdx}
                onValueChange={(val) => this.setResultPicker(val)}
                tintColor={'#4DBA97'}/>
              <SelectedResultPicker
                resultPickerIdx={this.state.resultPickerIdx}
                partIdx={this.state.partIdx} />
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
    marginBottom: 50,
    backgroundColor: 'rgba(155, 155, 155, 0.4)',
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    height: 300,
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
    height: 100,
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
  }
});

module.exports = LogModal;
