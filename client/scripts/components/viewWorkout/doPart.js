/*
* @Author: vincetam
* @Date:   2015-12-28 16:01:39
* @Last Modified by:   VINCE
* @Last Modified time: 2015-12-28 16:53:19
*/

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var DoPart = React.createClass({
  render: function(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
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
    flex: 1
  },
  header: {
    height: 44
  },
  body: {

  },
  footer: {

  }
});

module.exports = DoPart;