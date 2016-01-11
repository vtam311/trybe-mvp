

/*
* @Author: VINCE
* @Date:   2015-09-25 11:53:15
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-10 17:05:00
*/

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
} = React;

var LogCardHeader = React.createClass({

  render: function(){
    return (
      /* jshint ignore:start */
      <View style={styles.header}>
        <Text style={styles.trybeNameText}>{this.props.trybe}</Text>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  trybeNameText: {
    fontFamily: 'Avenir Next',
    fontSize: 15,
  }
});

module.exports = LogCardHeader;
