/*
* @Author: vincetam
* @Date:   2016-01-06 16:09:06
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-06 16:28:36
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
      customMetric: this.props.customMetric,
      customVal: this.props.customVal,
    };
  },
  _setCustomResult: function(val){
    // logModalActions.setResultRounds(val);
    this.setState({customVal: val});
  },
  render: function() {
    console.log('customInput rendering');
    return (
      <View>
        {this.state.customMetric ? <Text>{this.state.customMetric}</Text> : null}
        <TextInput
          value={this.state.customVal}
          placeholder='Result'
          autoCapitalize='words'
          onChangeText={(text) => this._setCustomResult(text)}
          multiline={true}
          style={styles.instructionsTextInput} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  instructionsTextInput: {
    height: 40,
    fontFamily: 'Avenir Next',
    fontSize: 18
  },
});

module.exports = CustomInput;
