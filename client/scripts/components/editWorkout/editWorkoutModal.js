/*
* @Author: vincetam
* @Date:   2016-01-12 11:30:40
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-12 13:42:05
*/

'use strict';

var React = require('react-native');
var editWorkoutStore = require('../../../stores/editWorkoutStore');
var editWorkoutActions = require('../../../actions/editWorkoutActions');

var {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
  DeviceEventEmitter,
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
    }).start(this.props.closeModal);
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
      <Animated.View style={[styles.modal, styles.flexCenter, {transform: [{translateY: this.state.offset}, styles.container, {height: this.state.visibleHeight, width: this.state.visibleWidth}]}>
        <View>
          <View style={styles.header}>
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress={this.closeModal}>
                <Text style={styles.headerButtonText}>Done</Text>
              </TouchableOpacity>
              <Text style={styles.headerTitleText}>Add Part</Text>
              <TouchableOpacity onPress={this.savePart}>
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
    // return (
    //   <Animated.View style={[styles.modal, styles.flexCenter, {transform: [{translateY: this.state.offset}]}]}>
    //     <View style={styles.container}>
    //       <View style={styles.header}>
    //         <View style={styles.headerContainer}>
    //           <TouchableOpacity onPress={this.closeModal}>
    //             <Text style={styles.headerButtonText}>Cancel</Text>
    //           </TouchableOpacity>
    //           <Text style={styles.headerTitleText}>Edit Part</Text>
    //           <TouchableOpacity onPress={this.savePart}>
    //             <Text style={styles.headerButtonText}>Done</Text>
    //           </TouchableOpacity>
    //         </View>
    //       </View>

    //       <View style={styles.body}>
    //         <View style={styles.bodyContainer}>
    //           <Text style={styles.partNamePrompt}>Purpose</Text>
    //           <TextInput
    //             value={this.state.partName}
    //             placeholder={'Warmup, Strength, Etc.'}
    //             autoCapitalize='words'
    //             onChangeText={(text) => this.renderPartName(text)}
    //             style={{height: 40}}/>
    //         </View>
    //       </View>

    //     </View>
    //   </Animated.View>
    // )

var styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    paddingBottom: 50,
    backgroundColor: 'rgba(155, 155, 155, 0.4)',
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    height: 180,
    width: 340,
    // backgroundColor: 'rgba(255, 255, 255, 1)',
    backgroundColor: '#EFEFF4',
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
  contentContainerStyle: {
    paddingTop: 20,
    paddingBottom: 20,
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
  },
  partNamePrompt: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Avenir Next'
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
});

module.exports = EditWorkoutModal;
