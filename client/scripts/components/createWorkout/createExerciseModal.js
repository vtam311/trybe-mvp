/*
* @Author: vincetam
* @Date:   2015-10-29 17:28:28
* @Last Modified by:   vincetam
* @Last Modified time: 2015-10-29 18:55:09
*/

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity, //need?
  Animated,
  Dimensions
} = React;

//Gets device height for animating app
var {
  height: deviceHeight
} = Dimensions.get('window');

var CreateExerciseModal = React.createClass({
  getInitialState: function() {
    return { offset: new Animated.Value(deviceHeight) }
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
          <TouchableOpacity onPress={this.closeModal}>
            <Text style={{color: '#FFF'}}>Close Menu</Text>
          </TouchableOpacity>
        </Animated.View>
    )
  }
});

var styles = StyleSheet.create({
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    backgroundColor: 'rgba(0,0,0,.8)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
});

module.exports = CreateExerciseModal;
