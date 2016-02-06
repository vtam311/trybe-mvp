/*
* @Author: vincetam
* @Date:   2016-01-16 14:31:53
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-05 17:46:13
*/

'use strict';

var React = require('react-native');

var {
  ScrollView,
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
} = React;

var PartNameView = require('./partNameView');

var PartHeader = React.createClass({
  render: function(){
    return (
      /* jshint ignore:start */
      <View style={[styles.container, {width: this.props.visibleWidth, height: 150}]}>
        <PartNameView
          partName={this.props.part.name}
          partIdx={this.props.partIdx}
          isModifying={this.props.isModifying} />
      </View>
      /* jshint ignore:end */
    );
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

module.exports = PartHeader;