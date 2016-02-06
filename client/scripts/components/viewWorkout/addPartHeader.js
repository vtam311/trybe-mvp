/*
* @Author: vincetam
* @Date:   2016-02-06 10:04:46
* @Last Modified by:   VINCE
* @Last Modified time: 2016-02-06 10:09:19
*/

'use strict';

var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
} = React;

var AddPartHeader = React.createClass({
  render: function(){
    return (
      /* jshint ignore:start */
      <View style={[styles.partNameContainer, {width: this.props.visibleWidth}]}>
        <Text style={styles.partNameText}>NEW PART</Text>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  partNameContainer: {
    flex: 1,
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  partNameText: {
    fontFamily: 'Avenir Next',
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    marginTop: 10,
  },
});

module.exports = AddPartHeader;
