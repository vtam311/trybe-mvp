/*
* @Author: vincetam
* @Date:   2015-12-29 15:02:15
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-29 15:31:00
*/

'use strict';

var React = require('react-native');
var editWorkoutActions = require('../../actions/editWorkoutActions');

var {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} = React;

var ViewPartHeader = React.createClass({
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
      <Image source={require('image!expandArrow')} /> :
      <Image source={require('image!collapseArrow')} />;

    var logOrLoggedIcon = this.state.isLogged ?
      <Image source={require('image!loggedIcon')} /> :
      <Image source={require('image!logIcon')} />;

    return (
      /* jshint ignore:start */
      <View style={styles.container}>
        <Text style={styles.headerText}>{part.name ? part.name : 'Part ' + (partIdx + 1)}</Text>
        <TouchableOpacity onPress={this.toggleCollapse}>
          {expandOrCollapseArrow}
        </TouchableOpacity>
        <TouchableOpacity onPress={this.logPart}>
          {logOrLoggedIcon}
        </TouchableOpacity>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerText: {
    fontFamily: 'Avenir Next',
    color: '#4A4A4A'
  },
});

module.exports = ViewPartHeader;
