/*
* @Author: vincetam
* @Date:   2016-01-12 11:30:40
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-12 18:13:44
*/

'use strict';

var React = require('react-native');
var editWorkoutStore = require('../../stores/editWorkoutStore');
var editWorkoutActions = require('../../actions/editWorkoutActions');
var modalActions = require('../../actions/modalActions');

var {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
  TextInput,
  Image,
  DeviceEventEmitter,
  StatusBarIOS
} = React;

//Load components
var TouchableWithoutFeedback = require('TouchableWithoutFeedback');
import {TableView, Section} from 'react-native-tableview-simple';
var DateCell = require('./dateCell');
var Part = require('./editPart/part');

//Gets device height for animating app
var {
  height: deviceHeight
} = Dimensions.get('window');

var EditWorkoutModal = React.createClass({
  getInitialState: function() {
    return {
      offset: new Animated.Value(deviceHeight),
      visibleHeight: Dimensions.get('window').height,
      visibleWidth: Dimensions.get('window').width,
      workout: editWorkoutStore.getWorkout(),
    };
  },
  componentWillMount: function() {
    this.keyboardWillShowListener = DeviceEventEmitter.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideListener = DeviceEventEmitter.addListener('keyboardWillHide', this.keyboardWillHide);
  },
  componentDidMount: function() {
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: 0
    }).start();

    editWorkoutStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    editWorkoutStore.removeChangeListener(this._onChange);
    this.keyboardWillShowListener.remove();
    this.keyboardWillHideListener.remove();
  },
  _onChange: function(){
    this.setState({
      workout: editWorkoutStore.getWorkout(),
    });
  },
  closeModal: function() {
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: deviceHeight
    }).start(modalActions.closeWorkoutModal);
  },
  keyboardWillShow: function(e) {
    var newSize = Dimensions.get('window').height - e.endCoordinates.height;
    this.setState({visibleHeight: newSize});
  },
  keyboardWillHide: function(e) {
    this.setState({visibleHeight: Dimensions.get('window').height});
  },
  scrollToComponent: function(refName, child) {
    console.log('editWorkout scrollToComponent called');
    var offset;
    if(child === 'instrTextInput') offset = -70;
    else if(child === 'customTextInput') offset = 50;

    setTimeout( () => {
      let scrollResponder = this.refs.scrollView.getScrollResponder();
      scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
        React.findNodeHandle(this.refs[refName]),
        offset, //more offset
        true
      );
    }, 50);
  },
  render: function() {
    var parts = this.state.workout.parts.map((part, index) =>
      /* jshint ignore:start */
      <View style={{marginBottom: 20}} key={index} >
        <Part
          ref={'part' + index}
          part={part}
          partIdx={index}
          scrollToComponent={this.scrollToComponent} />
      </View>
      /* jshint ignore:end */
    );

    //Bottom content inset of ScrollView offsets
    //tab bar from covering scene
    return (
      /* jshint ignore:start */
      <Animated.View style={[styles.modal, {transform: [{translateY: this.state.offset}]}]}>
        <View style={[styles.container, {height: this.state.visibleHeight, width: this.state.visibleWidth}]}>

          <View style={styles.header}>
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress={editWorkoutActions.addPart}>
                <Text style={styles.headerButtonText}>Add Part</Text>
              </TouchableOpacity>
              <Text style={styles.headerTitleText}>New Workout</Text>
              <TouchableOpacity onPress={this.closeModal}>
                <Text style={styles.headerButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView
            ref='scrollView'
            keyboardDismissMode='on-drag'
            contentContainerStyle={styles.contentContainerStyle}
            contentInset={{top: 0, left: 0, bottom: 75, right: 0}} >
            <TableView>

              <Section>
                <DateCell
                  date={this.state.workout.date} />
              </Section>

              {parts}

            </TableView>
          </ScrollView>

        </View>
      </Animated.View>
      /* jshint ignore:end */
    );

  }
});

var styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#EFEFF4',
    borderRadius: 3,
    shadowColor: '#9B9B9B',
    shadowOpacity: 8,
  },
  header: {
    flex: .1,
    borderBottomWidth: .5,
    borderBottomColor: 'rgba(155, 155, 155, 0.7)',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    backgroundColor: '#4DBA97',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
  },
  headerTitleText: {
    fontFamily: 'Avenir',
    fontSize: 18,
    color: 'white'
  },
  headerButtonText: {
    fontFamily: 'Avenir Next',
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
  },
  contentContainerStyle: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  body: {
    flex: .9,
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
  },
  partNamePrompt: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Avenir Next'
  },
});

module.exports = EditWorkoutModal;
