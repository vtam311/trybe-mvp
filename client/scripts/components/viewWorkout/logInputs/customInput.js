/*
* @Author: vincetam
* @Date:   2016-01-06 16:09:06
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-07 10:42:59
*/

'use strict';

var React = require('react-native');
var logModalActions = require('../../../actions/logModalActions');

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
    //TO DO: Use helper function to replace all checks of
    //isCustomMetric logic
    if(this.state.metric &&
      this.state.metric !== 'Time' &&
      this.state.metric !== 'Rounds' &&
      this.state.metric !== 'Max Load'){
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
          <Text style={styles.customInputPrompt}>{this.state.metric}</Text>
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
    marginTop: 10
  },
  customInputPrompt: {
    fontSize: 14,
    color: '#929292',
    fontFamily: 'Avenir Next',
    marginTop: 10,
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
