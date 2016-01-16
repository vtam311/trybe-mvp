/*
* @Author: vincetam
* @Date:   2015-12-13 19:01:55
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-14 13:54:36
*/

'use strict';

var React = require('react-native');
var editWorkoutActions = require('../../../actions/editWorkoutActions');
var isCustomMetric = require('../../../common/isCustomMetric');

var {
  SegmentedControlIOS,
  TextInput,
  View,
  StyleSheet
} = React;


var ResultOptions = React.createClass({
  setResultType: function(val){
    editWorkoutActions.setResultType(val, this.props.partIdx);
  },
  getResultTypeIdx: function(){
    //Changes segmCtrlIdx based on result type
    var idx, resultType = this.props.resultType;

    if(resultType === 'Time') idx = 0;
    else if(resultType === 'Rounds') idx = 1;
    else if(resultType === 'Max Load') idx = 2;
    else if(resultType) idx = 3; //if defined but none of above, is custom
    else idx = null; //else not defined

    return idx;
  },
  showCustomTextInputVal: function(){
    //if resultType is still 'Custom' and not yet defined by user,
    //show null so Custom Text Input is not pre-set to 'Custom'
    if(this.props.resultType === 'Custom') return null;
    else return this.props.resultType;
  },

  render: function(){
    //Must declare props to pass to showOrHideCustomInput
    var resultType = this.props.resultType;
    var setResultType = this.setResultType.bind(this);
    var showCustomTextInputVal = this.showCustomTextInputVal;
    var scrollToComponent = this.props.scrollToComponent;
    var parentRef = 'part' + this.props.partIdx;

    var showOrHideCustomInput = function(){
      //If resultType is a custom one, show TextInput
      if(isCustomMetric(resultType)){
        return (
          <View style={styles.cellRow}>
            <TextInput
              value={showCustomTextInputVal()}
              style={{height: 40}}
              placeholder="Distance, Reps, Etc."
              autoCapitalize='words'
              onChangeText={(text) => setResultType(text)}
              onFocus={scrollToComponent.bind(this, parentRef, 'customTextInput')} />
          </View>
        );
      } else {
        return null;
      }
    };

    return (
      /* jshint ignore:start */
      <View>
        <View style={styles.largeCellRow}>
          <SegmentedControlIOS
            values={['Time', 'Rounds', 'Max Load', 'Custom']}
            selectedIndex={this.getResultTypeIdx()}
            onValueChange={(val) => setResultType(val)}
            tintColor={'#4DBA97'}/>
        </View>
        {showOrHideCustomInput()}
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  cellRow: {
    justifyContent: 'center',
    height: 44,
  },
  largeCellRow: {
    justifyContent: 'center',
    height: 56,
  }
});

module.exports = ResultOptions;
