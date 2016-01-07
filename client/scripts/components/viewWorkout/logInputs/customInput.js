/*
* @Author: vincetam
* @Date:   2016-01-06 16:09:06
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-06 19:23:20
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
    logModalActions.setResultCustom(val);
    this.setState({customVal: val});
  },
  _getPlaceHolderText: function(){
    var placeholder;
    var customMetric = this.state.customMetric;

    if(!customMetric){
      placeholder = 'Custom';
    } else {
      placeholder = customMetric;
    }

    return placeholder;
  },
  render: function() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.customVal}
          placeholder={this._getPlaceHolderText()}
          autoCapitalize='words'
          onChangeText={(text) => this._setCustomResult(text)}
          multiline={true}
          style={styles.instructionsTextInput} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  instructionsTextInput: {
    height: 40,
    fontFamily: 'Avenir Next',
    fontSize: 18
  },
});

module.exports = CustomInput;
