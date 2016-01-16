/*
* @Author: vincetam
* @Date:   2016-01-16 12:52:29
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-16 14:47:17
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
var Swiper = require('react-native-swiper');
import {TableView} from 'react-native-tableview-simple';
var ViewPart = require('./viewPart');
var PartSwiperPage = require('./_partSwiperPage');

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
    console.log('closeModal')
  },
  render: function() {

    return (
      /* jshint ignore:start */
      <Animated.View style={[styles.modal, {transform: [{translateY: this.state.offset}]}]}>
        <View style={[styles.container, {height: this.state.visibleHeight, width: this.state.visibleWidth}]}>
          <View style={styles.header}>
            <TouchableOpacity onPress={this.closeModal}>
              <Image
                style={{width: 12, height: 21, marginTop: 30, marginLeft: 10}}
                source={require('image!backArrow')} />
            </TouchableOpacity>
          </View>

          <Swiper style={styles.wrapper}>
            <PartSwiperPage />
            <PartSwiperPage />
          </Swiper>

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
  wrapper: {
  },
  header: {
    height: 60,
    backgroundColor: 'rgba(77,186,151,.6)',
  },
});

module.exports = ViewWorkoutModal;
