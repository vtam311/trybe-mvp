/*
* @Author: vincetam
* @Date:   2015-10-23 15:04:43
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-16 18:25:32
*/

'use strict';

var React = require('react-native');
var createWorkoutActions = require('../../actions/createWorkoutActions');
var createWorkoutStore = require('../../stores/createWorkoutStore');

var {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
  DeviceEventEmitter
} = React;

var TouchableWithoutFeedback = require('TouchableWithoutFeedback');

//Load components
import {TableView, Section, CustomCell} from 'react-native-tableview-simple';
var DateCell = require('./dateCell');
var Part = require('./editPart/part');

var CreateWorkout = React.createClass({
  getInitialState: function() {
    return {
      workout: createWorkoutStore.getWorkout(),
      visibleHeight: Dimensions.get('window').height
    };
  },
  componentWillMount: function() {
    DeviceEventEmitter.addListener('keyboardWillShow', this.keyboardWillShow);
    DeviceEventEmitter.addListener('keyboardWillHide', this.keyboardWillHide);
  },
  componentDidMount: function() {
    createWorkoutStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    createWorkoutStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      workout: createWorkoutStore.getWorkout(),
    });
  },
  keyboardWillShow: function(e) {
    console.log('createWorkout keyboardWillShow called');
    var newSize = Dimensions.get('window').height - e.endCoordinates.height;
    this.setState({visibleHeight: newSize});
  },
  keyboardWillHide: function(e) {
    console.log('createWorkout keyboardWillHide called');
    this.setState({visibleHeight: Dimensions.get('window').height});
  },
  addPart: function(){
    createWorkoutActions.addPart();
  },

  render: function(){
    console.log('createWorkout rendering height of', this.state.visibleHeight);
    var parts = this.state.workout.parts.map((part, index) =>
      /* jshint ignore:start */
      <Part
        part={part}
        partIdx={index}
        openExerciseModal={this.props.openExerciseModal}
        openPartModal={this.props.openPartModal}
        key={index} />
      /* jshint ignore:end */
    );

    return (
      /* jshint ignore:start */
      <View style={[styles.container, {height: this.state.visibleHeight}]}>
        <ScrollView contentContainerStyle={styles.stage}>
          <TableView>

            <Section>
              <DateCell />
            </Section>

            {parts}

            <Section>
              <TouchableHighlight onPress={this.addPart} activeOpacity={.8} underlayColor={'#BFBFBF'}>
                <View style={{flexDirection: 'column', justifyContent: 'space-around', height: 44}}>
                  <View style={{flexDirection: 'row', marginLeft: 10}}>
                    <Image
                      style={{height: 14, width: 14, marginTop: 2, marginRight: 8}}
                      source={require('image!addButton')} />
                    <Text style={{flex: 1, fontSize: 14, color: '#767676', fontFamily: 'ArialMT'}}>ADD PART</Text>
                  </View>
                </View>
              </TouchableHighlight>
            </Section>

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
  stage: {
    paddingTop: 20,
    paddingBottom: 20,
  },
});

module.exports = CreateWorkout;
