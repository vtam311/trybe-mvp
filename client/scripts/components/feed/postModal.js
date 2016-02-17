/*
* @Author: vincetam
* @Date:   2016-02-17 13:53:06
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-17 14:24:13
*/

'use strict';

var React = require('react-native');
var feedActions = require('../../actions/feedActions');
var modalActions = require('../../actions/modalActions');

var {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Animated,
} = React;

//Gets device height for animating app
var {
  height: deviceHeight
} = Dimensions.get('window');

var PostModal = React.createClass({
  getInitialState: function(){
    return {
      chatMessage: '',
      offset: new Animated.Value(deviceHeight),
      visibleWidth: Dimensions.get('window').width,
      visibleHeight: Dimensions.get('window').height,
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
    }).start(modalActions.closePostModal);
  },
  sendMessage: function(){
    feedActions.sendMessage(this.state.chatMessage);
    console.log('sendMessage message is', this.state.chatMessage);
    this.clearMessage();
  },
  clearMessage: function(){
    this.setState({
      chatMessage: ''
    });
  },
  render: function(){
    return (
      <Animated.View style={[styles.modal, styles.flexCenter, {transform: [{translateY: this.state.offset}]}]}>
        <View style={styles.container}>
          <TextInput
            style={[styles.chatBar, {width: this.state.visibleWidth, height: this.state.visibleHeight}]}
            value={this.state.chatMessage}
            placeholder={'What\'s going on?'}
            onChangeText={(text) => this.setState({chatMessage: text})}
            onSubmitEditing={() => this.sendMessage()}/>
        </View>
      </Animated.View>
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
    // backgroundColor: 'rgba(155, 155, 155, 0.4)',
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1 //needed
  },
  chatBar: {
    backgroundColor: '#fff',
    textAlign: 'center',
  },
});

module.exports = PostModal;
