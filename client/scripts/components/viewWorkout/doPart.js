/*
* @Author: vincetam
* @Date:   2015-12-28 16:01:39
* @Last Modified by:   VINCE
* @Last Modified time: 2015-12-28 18:27:23
*/

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} = React;

import {Section, CustomCell} from 'react-native-tableview-simple';

//Load custom components
var EditExerciseCell = require('../editWorkout/editPart/editExerciseCell');

var DoPart = React.createClass({
  getInitialState: function(){
    return {
      isCollapsed: true,
      isLogged: false
    };
  },

  toggleCollapse: function(){
    this.setState({
      isCollapsed: !this.state.isCollapsed
    });
  },

  logPart: function(){
    this.setState({
      isLogged: true
    });
  },

  render: function(){
    var part = this.props.part;
    var partIdx = this.props.partIdx;

    var expandOrCollapseArrow = this.state.isCollapsed ?
      /* jshint ignore:start */
      <Image
        source={require('image!expandArrow')} /> :
      <Image
        source={require('image!collapseArrow')} />;
      /* jshint ignore:end */

    var logOrLoggedIcon = this.state.isLogged ?
      /* jshint ignore:start */
      <Image
        source={require('image!loggedIcon')} /> :
      <Image
        source={require('image!logIcon')} />;
      /* jshint ignore:end */

    var exercises = part.exercises.map((exercise, index) =>
      <EditExerciseCell
        exercise={exercise}
        partIdx={partIdx}
        exIdx={index}
        openExerciseModal={this.props.openExerciseModal} />
    );

    return (
      /* jshint ignore:start */
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{part.name ? part.name : 'Part ' + (partIdx + 1)}</Text>
          <TouchableOpacity onPress={this.toggleCollapse}>
            {expandOrCollapseArrow}
          </TouchableOpacity>
          <TouchableOpacity onPress={this.logPart}>
            {logOrLoggedIcon}
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <Text>{part.instructions}</Text>
          {exercises}
        </View>

        <View style={styles.footer}>
        </View>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#c8c7cc',
    paddingLeft: 15,
    paddingRight: 15
  },
  header: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerText: {
    fontFamily: 'Avenir Next',
    color: '#4A4A4A'
  },
  body: {
  },
  footer: {

  }
});

module.exports = DoPart;