/*
* @Author: VINCE
* @Date:   2015-09-25 11:53:15
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-10 16:23:04
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
    var dateDescr = Date(this.props.date).slice(0,10);

    return (
      /* jshint ignore:start */
      <View style={styles.header}>
        <Text style={styles.dateText}>{dateDescr}</Text>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  header: {
    paddingBottom: 20,
    // flexDirection: 'row',
    // justifyContent: 'center'
  },
  dateText: {
    fontFamily: 'Avenir Next',
    // fontStyle: 'italic',
    fontSize: 16,
  }
});

module.exports = LogCardHeader;
