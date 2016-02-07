/*
* @Author: VINCE
* @Date:   2015-12-15 15:19:09
* @Last Modified by:   VINCE
* @Last Modified time: 2016-02-05 12:30:23
*/

'use strict';

var React = require('react-native');
var editWorkoutStore = require('../../../stores/editWorkoutStore');
var editWorkoutActions = require('../../../actions/editWorkoutActions');
var modalActions = require('../../../actions/modalActions');

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

var EditPartModal = React.createClass({
  getInitialState: function() {
    return {
      offset: new Animated.Value(deviceHeight),
      partIdx: editWorkoutStore.getTargetPartIdx(),
      partName: editWorkoutStore.getPartName()
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
    }).start(modalActions.closePartModal);
  },
  renderPartName: function(text){
    this.setState({partName: text});
  },
  savePart: function(){
    editWorkoutActions.setPartName(this.state.partName);
    this.closeModal();
  },
  removePart: function(){
    editWorkoutActions.removePart();
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
              <Text style={styles.headerTitleText}>Edit Part</Text>
              <TouchableOpacity onPress={this.savePart}>
                <Text style={styles.headerButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.bodyContainer}>
              <Text style={styles.partNamePrompt}>Name / Purpose</Text>
              <TextInput
                value={this.state.partName}
                placeholder={'Warmup, Strength, Etc.'}
                autoCapitalize='words'
                onChangeText={(text) => this.renderPartName(text)}
                style={{height: 40}}/>
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity onPress={this.removePart}>
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  style={{height: 18, width: 18}}
                  source={require('image!deleteButton')} />
                <Text style={styles.deleteText}>Delete Part</Text>
              </View>
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
  deleteText: {
    marginLeft: 5,
    fontFamily: 'Avenir Next',
    fontSize: 16,
    color: '#FA6F80'
  }
});

module.exports = EditPartModal;
