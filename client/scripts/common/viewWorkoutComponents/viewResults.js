/*
* @Author: VINCE
* @Date:   2015-09-26 12:46:46
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-11 19:05:55
*/

'use strict';

var React = require('react-native');

var renderResultsTime = require('./renderResultsTime');

var {
  StyleSheet,
  Text,
  View,
} = React;

var ViewResults = React.createClass({
  render: function(){
    var result = this.props.result;
    // switch (result.type) {
    //   case undefined:
    //     break;
    //   default:
    //     return true;
    // }

    return (
      /* jshint ignore:start */
      <View style={styles.partResult}>
        <Text style={styles.resultText}>{renderResultsTime(result.val)}</Text>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  partResult: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  resultText: {
    fontFamily: 'Avenir Next',
    fontStyle: 'italic',
    color: 'grey',
    fontSize: 15,
    fontWeight: '500'
  }
});

module.exports = ViewResults;