/*
* @Author: vincetam
* @Date:   2015-10-23 15:04:43
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-28 19:26:42
*/

'use strict';

var React = require('react-native');
var editWorkoutActions = require('../../actions/editWorkoutActions');
var editWorkoutStore = require('../../stores/editWorkoutStore');

var {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
  DeviceEventEmitter,
  TextInput //temp to test
} = React;

//Load components
var TouchableWithoutFeedback = require('TouchableWithoutFeedback');
import {TableView, Section} from 'react-native-tableview-simple';
var DateCell = require('./dateCell');
var Part = require('./editPart/part');


var EditWorkout = React.createClass({
  getInitialState: function() {
    return {
      workout: editWorkoutStore.getWorkout(),
      visibleHeight: Dimensions.get('window').height
    };
  },
  componentWillMount: function() {
    this.keyboardWillShowListener = DeviceEventEmitter.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideListener = DeviceEventEmitter.addListener('keyboardWillHide', this.keyboardWillHide);
  },
  componentDidMount: function() {
    editWorkoutStore.addChangeListener(this._onChange);
    //editWorkoutStore is initialized with the trybe's workout by default,
    //so user can edit workout in viewWorkout component.
    //When user edits workout from scratch, we reset the workout.
    editWorkoutActions.resetWorkout();
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
  keyboardWillShow: function(e) {
    var newSize = Dimensions.get('window').height - e.endCoordinates.height;
    this.setState({visibleHeight: newSize});
  },
  keyboardWillHide: function(e) {
    this.setState({visibleHeight: Dimensions.get('window').height});
  },
  scrollToComponent: function(refName, child) {
    var offset;
    if(child === 'instrTextInput') offset = -90;
    else if(child === 'customTextInput') offset = 0;

    setTimeout( () => {
      let scrollResponder = this.refs.scrollView.getScrollResponder();
      scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
        React.findNodeHandle(this.refs[refName]),
        offset, //more offset
        true
      );
    }, 50);
  },

  render: function(){
    var parts = this.state.workout.parts.map((part, index) =>
      /* jshint ignore:start */
      <Part
        ref={'part' + index}
        part={part}
        partIdx={index}
        openExerciseModal={this.props.openExerciseModal}
        openPartModal={this.props.openPartModal}
        scrollToComponent={this.scrollToComponent}
        key={index} />
      /* jshint ignore:end */
    );

    //Bottom content inset of ScrollView offsets
    //tab bar from covering scene
    return (
      /* jshint ignore:start */
      <View style={[styles.container, {height: this.state.visibleHeight}]}>
        <ScrollView
          ref='scrollView'
          keyboardDismissMode='on-drag'
          contentContainerStyle={styles.contentContainerStyle}
          contentInset={{top: 0, left: 0, bottom: 75, right: 0}} >
          <TableView>

            <Section>
              <DateCell
                date={this.state.workout.date}
                openDateModal={this.props.openDateModal} />
            </Section>

            {parts}

          </TableView>
        </ScrollView>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFF4',
  },
  contentContainerStyle: {
    paddingTop: 20,
    paddingBottom: 20,
  },
});

module.exports = EditWorkout;
