/*
* @Author: vincetam
* @Date:   2016-01-16 12:52:29
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-16 13:30:05
*/

'use strict';

var React = require('react-native');
var viewWorkoutStore = require('../../stores/viewWorkoutStore');
var viewWorkoutActions = require('../../actions/viewWorkoutActions');
var modalActions = require('../../actions/modalActions');

var {
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
} = React;

//Load components
import {TableView} from 'react-native-tableview-simple';
var ViewPart = require('./viewPart');

//Gets device height for animating app
var {
  height: deviceHeight
} = Dimensions.get('window');

var ViewWorkoutModal = React.createClass({
  getInitialState: function() {
    return {
      offset: new Animated.Value(deviceHeight),
      visibleHeight: Dimensions.get('window').height,
      visibleWidth: Dimensions.get('window').width,
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
    }).start(modalActions.closeViewWorkoutModal);
  },
  render: function() {

    //Bottom content inset of ScrollView offsets
    //tab bar from covering scene
    return (
      /* jshint ignore:start */
      <Animated.View style={[styles.modal, {transform: [{translateY: this.state.offset}]}]}>
        <View style={[styles.container, {height: this.state.visibleHeight, width: this.state.visibleWidth}]}>

          <View style={styles.header}>
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress={this.closeModal}>
                <Image
                  style={{width: 12, height: 21}}
                  source={require('image!backArrow')} />
              </TouchableOpacity>
              <Text style={styles.headerTitleText}>New Workout</Text>
            </View>
          </View>

          <ScrollView
            contentContainerStyle={styles.contentContainerStyle} >
            <View style={{height: 300}}>
              <Text>Test</Text>
            </View>
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
    backgroundColor: 'rgba(73,162,160,.5)',
    borderRadius: 3,
    shadowColor: '#9B9B9B',
    shadowOpacity: 8,
  },
  header: {
    height: 130,
    backgroundColor: 'rgba(77,186,151,.6)',
  },
  headerContainer: {
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
  },
  headerTitleText: {
    fontFamily: 'Avenir',
    fontSize: 20,
    color: 'white'
  },
  headerButtonText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 17,
    color: 'white'
  },
  contentContainerStyle: {
    // paddingTop: 20,
    // paddingBottom: 20,
  }
});

module.exports = ViewWorkoutModal;
