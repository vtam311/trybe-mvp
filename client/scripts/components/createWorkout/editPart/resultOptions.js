/*
* @Author: vincetam
* @Date:   2015-12-13 19:01:55
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-18 12:39:43
*/

'use strict';

var React = require('react-native');
var createWorkoutActions = require('../../../actions/createWorkoutActions');

var {
  SegmentedControlIOS,
  TextInput,
  View
} = React;


var ResultOptions = React.createClass({
  setResultType: function(val){
    createWorkoutActions.setResultType(val, this.props.partIdx);
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
    var setResultType = this.setResultType;
    var showCustomTextInputVal = this.showCustomTextInputVal;
    var scrollToComponent = this.props.scrollToComponent; //bind here, in onFocus, or both?
    var parentRef = 'part' + this.props.partIdx;

    var showOrHideCustomInput = function(){
      //If resultType is a custom one, show TextInput
      if(resultType &&
        resultType !== 'Time' &&
        resultType !== 'Rounds' &&
        resultType !==  'Max Load') {
        return (
          <TextInput
            value={showCustomTextInputVal.bind(this)}
            placeholder="Distance, Reps, etc"
            style={{height:38, marginTop: 5}}
            autoCapitalize='words'
            onChangeText={(text) => setResultType.bind(this, text)}
            onFocus={scrollToComponent.bind(this, parentRef, 'customTextInput')} />
        );
      } else {
        return null;
      }
    };

    return (
      /* jshint ignore:start */
      <View style={{marginBottom: 0}}>
        <SegmentedControlIOS
          values={['Time', 'Rounds', 'Max Load', 'Custom']}
          selectedIndex={this.getResultTypeIdx()}
          onValueChange={(val) => setResultType(val)}
          tintColor={'#4DBA97'}/>
        {showOrHideCustomInput()}
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = ResultOptions;
