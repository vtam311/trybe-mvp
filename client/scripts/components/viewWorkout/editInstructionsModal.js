/*
* @Author: vincetam
* @Date:   2016-01-18 11:00:44
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-18 11:37:39
*/

'use strict';

var React = require('react-native');
var editWorkoutStore = require('../../stores/editWorkoutStore');
var editWorkoutActions = require('../../actions/editWorkoutActions');
var modalActions = require('../../actions/modalActions');

var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
  TextInput,
  Image
} = React;

//Gets device height for animating app
var {
  height: deviceHeight
} = Dimensions.get('window');

var EditInstructionsModal = React.createClass({
  getInitialState: function() {
    return {
      offset: new Animated.Value(deviceHeight),
      partIdx: editWorkoutStore.getTargetPartIdx(),
      instructions: editWorkoutStore.getTargetInstructions(),
    };
  },
  componentDidMount: function() {
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: 0
    }).start();
  },
  closeModal: function() {
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: deviceHeight
    }).start(modalActions.closeInstructionsModal);
  },
  renderInstructions: function(text){
    this.setState({instructions: text});
  },
  saveInstructions: function(){
    editWorkoutActions.setInstructions(this.state.instructions, this.state.partIdx);
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
              <Text style={styles.headerTitleText}>Modify Instructions</Text>
              <TouchableOpacity onPress={this.saveInstructions}>
                <Text style={styles.headerButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.bodyContainer}>
              <TextInput
                value={this.state.instructions}
                placeholder='Instructions'
                onChangeText={(text) => this.renderInstructions(text)}
                multiline={true}
                style={styles.instructionsTextInput} />
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
  },
  instructionsTextInput: {
    height: 80,
    fontFamily: 'Helvetica',
    color: '#2D2D2D',
    fontSize: 16
  },
});

module.exports = EditInstructionsModal;
