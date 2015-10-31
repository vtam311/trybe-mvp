/*
* @Author: vincetam
* @Date:   2015-10-29 17:28:28
* @Last Modified by:   vincetam
* @Last Modified time: 2015-10-30 17:59:47
*/

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
  TextInput
} = React;

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

var CreateExerciseModal = React.createClass({
  getInitialState: function() {
    return {
      offset: new Animated.Value(deviceHeight),
      newOrEdit: 'New'
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
    }).start(this.props.closeModal);
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
                style={{height: 40, textDecorationLine: 'underline', textDecorationStyle: 'solid', textDecorationColor: 'black'}}
                placeholder={'Exercise'}
                placeholderTextColor={'#9B9B9B'}/>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    // justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10
  }
});

module.exports = CreateExerciseModal;
