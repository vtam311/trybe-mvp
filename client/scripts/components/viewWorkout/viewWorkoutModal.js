/*
* @Author: vincetam
* @Date:   2016-01-16 12:52:29
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-18 14:27:51
*/

'use strict';

var React = require('react-native');
var viewWorkoutStore = require('../../stores/viewWorkoutStore');
var viewWorkoutActions = require('../../actions/viewWorkoutActions');
var editWorkoutStore = require('../../stores/editWorkoutStore');
var editWorkoutActions = require('../../actions/editWorkoutActions');
var modalActions = require('../../actions/modalActions');

var {
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  View,
} = React;

//Load components
var Swiper = require('react-native-swiper');
var PartSwiperPage = require('./_partSwiperPage');

//Gets device height for animating app
var {
  height: deviceHeight
} = Dimensions.get('window');

var ViewWorkoutModal = React.createClass({
  getInitialState: function() {
    return {
      workout: null, //will be populated by getDailyWorkout
      swiperIndex: 1,
      offset: new Animated.Value(deviceHeight),
      visibleHeight: Dimensions.get('window').height,
      visibleWidth: Dimensions.get('window').width,
    };
  },
  componentWillMount: function(){
    editWorkoutStore.addChangeListener(this._onChange);

    editWorkoutActions.getDailyWorkout();
  },
  componentDidMount: function() {
    this.scrollToSwiperIdx();
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: 0
    }).start();
  },
  componentWillUnmount: function(){
    editWorkoutStore.removeChangeListener(this._onChange);
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
    }).start(modalActions.closeViewWorkoutModal);
  },
  setSwiperIdx: function(index){
    this.setState({swiperIndex: index});
    console.log('setSwiperIdx setting this.state.swiperIndex to', index);
  },
  scrollToSwiperIdx: function(){
    this.refs.swiper.scrollTo(this.state.swiperIndex);
  },
  render: function() {
    console.log('viewWorkoutModal render');
    console.log('viewWorkoutModal rendering with this.state.swiperIndex of', this.state.swiperIndex);

    var partSwiperPages = this.state.workout.parts.map( (part, index) =>
      /* jshint ignore:start */
      <PartSwiperPage part={part} partIdx={index} key={index} setSwiperIdx={this.setSwiperIdx} />
      /* jshint ignore:end */
    );

    return (
      /* jshint ignore:start */
      <Animated.View style={[styles.modal, {transform: [{translateY: this.state.offset}]}]}>
        <View style={[styles.container, {height: this.state.visibleHeight, width: this.state.visibleWidth}]}>
          <Image
            source={require('image!iconAthletesBackground')}
            style={{flex: 1, height: null, width: null}}
            resizeMode='contain' >

            <View style={styles.header}>
              <TouchableOpacity onPress={this.closeModal}>
                <Image
                  style={styles.backArrow}
                  source={require('image!backArrow')} />
              </TouchableOpacity>
            </View>

            <Swiper style={styles.wrapper} ref='swiper'>
              {partSwiperPages}
            </Swiper>

          </Image>
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
  },
  wrapper: {
  },
  header: {
    height: 60,
    backgroundColor: 'rgba(77,186,151,.6)',
  },
  backArrow: {
    width: 12,
    height: 21,
    marginTop: 30,
    marginLeft: 10
  }
});

module.exports = ViewWorkoutModal;
