/*
* @Author: vincetam
* @Date:   2015-12-13 19:01:55
* @Last Modified by:   VINCE
* @Last Modified time: 2015-12-13 20:21:25
*/

'use strict';

var React = require('react-native');
var createWorkoutActions = require('../../actions/createWorkoutActions');

var {
  SegmentedControlIOS,
  TextInput,
  View
} = React;


var ResultOptions = React.createClass({
  // getInitialState: function() {
  //   return {
  //     resultType: 0,
  //   };
  // },
  setResultType: function(val){
    createWorkoutActions.setResultType(val, this.props.partIdx)
  },
  getResultTypeIdx: function(){
    //Change segmCtrlIdx based on result type
    var idx;
    var resultType = this.props.resultType;

    if(resultType === 'Time') idx = 0;
    else if(resultType === 'Rounds') idx = 1;
    else if(resultType === 'Max Load') idx = 2;
    else idx = 3; //else resultType is a custom one

    return idx;
  },

  render: function(){
    var resultType = this.props.resultType;
    var showOrHideCustomInput = function(){
      if(resultType === 'Custom') {
        return (
          <TextInput
            placeholder="Custom Metric"
            style={{height:44, marginTop: 5}} />
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
          onValueChange={(val) => this.setResultType(val)}
          tintColor={'#4DBA97'}/>
        {showOrHideCustomInput()}
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = ResultOptions;
