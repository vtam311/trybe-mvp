/*
* @Author: VINCE
* @Date:   2015-09-26 12:46:46
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-11 19:52:44
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
    var resultView;
    var result = this.props.result;
    console.log('ViewResults result is', result);
    switch (result.type) {
      case 'Time':
        var time = renderResultsTime(result.val)
        resultView = <Text style={styles.resultText}>{time}</Text>;
        break;
      case 'Rounds':
        var rounds = result.val.toString() + ' Rounds'
        resultView = <Text style={styles.resultText}>{rounds}</Text>;
        break;
      case 'Max Load':
        var maxLoad = result.val.val.toString() + ' ' + result.val.units;
        resultView = <Text style={styles.resultText}>{maxLoad}</Text>;
        break;
      case 'Custom':
        resultView = <Text style={styles.resultText}>{result.val}</Text>;
        break;
      //If none of above, is specified custom type
      default:
        resultView =
          <View>
            <Text style={styles.resultText}>{result.type}</Text>
            <Text style={styles.resultText}>{result.val}</Text>
          </View>
    }

    return (
      /* jshint ignore:start */
      <View style={styles.partResult}>
        {resultView}
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  partResult: {
    marginTop: 10,
    marginBottom: 10,
    // flexDirection: 'row',
    // justifyContent: 'flex-end'
  },
  resultText: {
    textAlign: 'right',
    fontFamily: 'Avenir Next',
    fontStyle: 'italic',
    color: 'grey',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 5,
  }
});

module.exports = ViewResults;