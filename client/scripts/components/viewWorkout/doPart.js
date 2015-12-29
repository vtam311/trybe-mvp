/*
* @Author: vincetam
* @Date:   2015-12-28 16:01:39
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-28 17:37:21
*/

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} = React;

import {Section, CustomCell} from 'react-native-tableview-simple';


var DoPart = React.createClass({
  getInitialState: function(){
    return {
      isCollapsed: true,
    };
  },

  toggleCollapse: function(){
    this.setState({
      isCollapsed: !this.state.isCollapsed
    });
  },

  render: function(){
    var part = this.props.part;
    var partIdx = this.props.partIdx;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>{part.name ? part.name : 'Part ' + (partIdx + 1)}</Text>
          <TouchableOpacity onPress={this.toggleCollapse}>
            {this.state.isCollapsed ? <Text>v</Text> : <Text>^</Text>}
          </TouchableOpacity>
          <Text>Log</Text>
        </View>
        <View style={styles.body}>
        </View>
        <View style={styles.footer}>
        </View>
      </View>
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
  body: {
  },
  footer: {

  }
});

module.exports = DoPart;