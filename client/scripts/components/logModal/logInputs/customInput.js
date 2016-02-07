/*
* @Author: vincetam
* @Date:   2016-01-06 16:09:06
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-06 21:13:29
*/

'use strict';

var React = require('react-native');
var logModalActions = require('../../../actions/logModalActions');
var isCustomMetric = require('../../../common/isCustomMetric');

var {
  View,
  StyleSheet,
  Text,
  TextInput
} = React;

var CustomInput = React.createClass({
  getInitialState: function() {
    return {
      metric: this.props.metric,
      customVal: this.props.customVal,
      isCustomMetric: false,
    };
  },
  componentWillMount: function(){
    this.checkIsCustomMetric();
  },
  checkIsCustomMetric: function(){
    if(isCustomMetric(this.state.metric)){
      this.setState({isCustomMetric: true});
    }
  },
  _setCustomResult: function(val){
    logModalActions.setResultCustom(val);
    this.setState({customVal: val});
  },
  _getPlaceholderText: function(){
    var placeholder;
    var metric = this.state.metric;

    //If a custom metric is provided, show 'Result',
    //otherwise show 'Custom'
    if(!metric){
      placeholder = 'Custom Results';
    } else {
      placeholder = 'Result';
    }

    return placeholder;
  },
  render: function() {
    return (
      <View style={styles.container}>
        {this.state.isCustomMetric ?
          <Text style={styles.customInputPromptText}>{this.state.metric}</Text>
          :
          null
        }
        <TextInput
          value={this.state.customVal}
          placeholder={this._getPlaceholderText()}
          autoCapitalize='words'
          onChangeText={(text) => this._setCustomResult(text)}
          multiline={true}
          style={styles.customResultTextInput} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  customInputPromptText: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    fontWeight: '500',
    color: '#A79D93',
  },
  customResultTextInput: {
    marginTop: 10,
    marginBottom: 10,
    height: 30,
    fontFamily: 'Avenir Next',
    fontSize: 16
  },
});

module.exports = CustomInput;
