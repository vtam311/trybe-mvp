/*
* @Author: vincetam
* @Date:   2016-02-05 14:18:46
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-05 14:24:26
*/

'use strict';

var React = require('react-native');

var {
  View,
  StyleSheet,
} = React;

var LocationDot = React.createClass({
  render: function(){
    return (
      /* jshint ignore:start */
      <View style={styles.dot}></View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(141,134,126,.5)',

    marginLeft: 5,
    marginRight: 5
  }
});

module.exports = LocationDot;
