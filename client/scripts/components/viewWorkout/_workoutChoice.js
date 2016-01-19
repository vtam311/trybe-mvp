/*
* @Author: vincetam
* @Date:   2016-01-18 18:07:15
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-18 18:25:25
*/

'use strict';

var React = require('react-native');
var modalActions = require('../../actions/modalActions');

var {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} = React;

var WorkoutChoice = React.createClass({
  handleStartPress: function(){
    modalActions.openViewWorkoutModal();
  },
  render: function(){
    return (
      /* jshint ignore:start */
      <View style={styles.container}>
        <Text style={styles.trybeNameText}>ICON ATHLETES</Text>
        <TouchableOpacity onPress={this.handleStartPress}>
          <View style={styles.startButton}>
            <Text style={styles.startButtonText}>START WORKOUT</Text>
          </View>
        </TouchableOpacity>
      </View>
      /* jshint ignore:start */
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(73,162,160,.5)',
    flexDirection: 'column',
    alignItems: 'center',
  },
  trybeNameText: {
    marginTop: 150,
    marginBottom: 40,

    fontFamily: 'Avenir',
    fontSize: 32,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center'
  },
  startButton: {
    height: 50,
    width: 250,
    borderColor: '#fff',
    borderWidth: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  startButtonText: {
    fontFamily: 'Avenir',
    fontSize: 20,
    color: '#fff'
  }
});

module.exports = WorkoutChoice;
