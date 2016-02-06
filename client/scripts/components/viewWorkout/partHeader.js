/*
* @Author: vincetam
* @Date:   2016-01-16 14:31:53
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-05 17:34:35
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
        <View style={styles.partWheel}>
          <PartNameView
            partName={this.props.part.name}
            partIdx={this.props.partIdx}
            isModifying={this.props.isModifying} />
        </View>

      </View>
      /* jshint ignore:end */
    );
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  partWheel: {
    flex: .25,
    backgroundColor: 'rgba(77,186,151,.6)',
  },
});

module.exports = PartHeader;