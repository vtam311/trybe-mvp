/*
* @Author: vincetam
* @Date:   2016-02-17 13:53:06
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-17 15:15:49
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
  TouchableOpacity
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
  handleCancelPress: function(){
    this.closeModal();
  },
  handlePost: function(){
    console.log('sendMessage message is', this.state.chatMessage);
    feedActions.sendMessage(this.state.chatMessage);
    this.clearMessage(); //needed?
    modalActions.closePostModal();
  },
  closeModal: function() {
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: deviceHeight
    }).start(modalActions.closePostModal);
  },
  clearMessage: function(){
    this.setState({
      chatMessage: ''
    });
  },
  render: function(){
    return (
      <Animated.View style={[styles.modal, {transform: [{translateY: this.state.offset}]}]}>
        <View style={[styles.container, {height: this.state.visibleHeight, width: this.state.visibleWidth}]}>

          <View style={styles.header}>
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress={this.handleCancelPress}>
                <Text style={styles.headerButtonText}>Cancel</Text>
              </TouchableOpacity>
              <Text style={styles.headerTitleText}>Write Message</Text>
              <TouchableOpacity onPress={this.handlePost}>
                <Text style={styles.headerButtonText}>Post</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.body}>
            <TextInput
              style={styles.messageBox}
              value={this.state.chatMessage}
              placeholder={'What\'s going on?'}
              onChangeText={(text) => this.setState({chatMessage: text})}
              onSubmitEditing={() => this.handlePost()}/>
          </View>

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
  },
  container: {
    flex: 1,
  },
  header: {
    flex: .1,
    borderBottomWidth: .5,
    borderBottomColor: 'rgba(155, 155, 155, 0.7)',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    backgroundColor: '#fff',
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
    fontWeight: '600',
    color: '#8D867E'
  },
  headerButtonText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 17,
    color: '#4DBA97'
  },
  body: {
    flex: .9,
    flexDirection: 'column',
  },
  messageBox: {
    height: 40,
    marginLeft: 10,
    marginRight: 10
  },
});

module.exports = PostModal;
