/*
* @Author: vincetam
* @Date:   2015-10-29 17:28:28
* @Last Modified by:   vincetam
* @Last Modified time: 2015-10-30 15:59:29
*/

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Dimensions
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
            <Text style={{color: '#4DBA97'}}>Cancel</Text>
            <Text style={{color: '#4A4A4A'}}>New Exercise</Text>
            <TouchableOpacity onPress={this.closeModal}>
              <Text style={{color: '#4DBA97'}}>Done</Text>
            </TouchableOpacity>
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
    backgroundColor: 'rgba(155, 155, 155, 0.4)'
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
  },
  header: {
    height: 40,
    flex: 1,
    flexDirection: 'row'
  },
});

module.exports = CreateExerciseModal;
