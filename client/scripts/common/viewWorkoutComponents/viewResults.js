/*
* @Author: VINCE
* @Date:   2015-09-26 12:46:46
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-11 19:19:29
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
    var result;
    console.log('ViewResults result is', this.props.result);
    switch (this.props.result.type) {
      case 'Time':
        result = renderResultsTime(this.props.result.val);
        break;
      case 'Rounds':
        result = this.props.result.val.toString() + ' Rounds';
        break;
      case 'Max Load':
        result =
          this.props.result.val.val.toString() + ' ' +
          this.props.result.val.units;
        break;
      default:
        null;
    }

    return (
      /* jshint ignore:start */
      <View style={styles.partResult}>
        <Text style={styles.resultText}>{result}</Text>
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