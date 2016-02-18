/*
* @Author: VINCE
* @Date:   2015-09-26 12:46:46
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-18 11:52:36
*/

'use strict';

var React = require('react-native');

var renderResultsTime = require('./renderResultsTime');

var {
  Image,
  StyleSheet,
  Text,
  View,
} = React;

var ViewResults = React.createClass({
  render: function(){
    var result = this.props.result;
    var resultView, icon;
    var textStyle;

    if(this.props.customFontSize){
      textStyle = [styles.resultText, {fontSize: this.props.customFontSize}];
    } else {
      textStyle = styles.resultText;
    }

    //only render if result is input from user
    if(result.val){
      switch (result.type) {
        case 'Time':
          icon = <Image style={[styles.metricIcon, {marginTop: 2}]} source={require('image!timeIcon')}/> ;
          var time = renderResultsTime(result.val)
          resultView = <Text style={textStyle}>{time}</Text>;
          break;
        case 'Rounds':
          icon = <Image style={[styles.metricIcon, {marginTop: 2}]} source={require('image!rounds')}/> ;
          var rounds = result.val.toString() + ' Rounds'
          resultView = <Text style={textStyle}>{rounds}</Text>;
          break;
        case 'Max Load':
          icon = <Image style={[styles.metricIcon, {marginBottom: 8}]} source={require('image!weightIcon')}/> ;
          var maxLoad = result.val.val.toString() + ' ' + result.val.units;
          resultView = <Text style={textStyle}>{maxLoad}</Text>;
          break;
        case 'Custom':
          resultView = <Text style={textStyle}>{result.val}</Text>;
          break;
        //If none of above, is specified custom type
        default:
          resultView =
            <View>
              <Text style={textStyle}>{result.type}</Text>
              <Text style={textStyle}>{result.val}</Text>
            </View>
      }
    }

    return (
      /* jshint ignore:start */
      <View style={styles.resultContainer}>
        {this.props.showIcon ?
          icon
          : null
        }
        {resultView}
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  resultContainer: {
    flexDirection: 'row',
    // marginBottom: 10,
  },
  metricIcon: {
    height: 16,
    width: 16,
    marginRight: 5,
  },
  resultText: {
    textAlign: 'right',
    color: '#58504D',
    fontSize: 15,
    // fontWeight: '500',
  }
});

module.exports = ViewResults;