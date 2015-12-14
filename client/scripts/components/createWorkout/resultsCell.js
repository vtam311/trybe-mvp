/*
* @Author: vincetam
* @Date:   2015-12-13 17:20:32
* @Last Modified by:   VINCE
* @Last Modified time: 2015-12-13 20:10:50
*/

'use strict';

var React = require('react-native');
var createWorkoutActions = require('../../actions/createWorkoutActions');

var {
  SwitchIOS,
  View,
  StyleSheet,
  Text,
} = React;

//Load components
import {CustomCell} from 'react-native-tableview-simple';
var ResultOptions = require('./resultOptions');

var ResultsCell = React.createClass({
  getInitialState: function(){
    return {
      recordingSwitchIsOn: this.props.isRecording,
    };
  },
  toggleRecording: function(bool){
    createWorkoutActions.toggleRecording(bool, this.props.partIdx);

    //Manually set state without store, as component is basic
    this.setState({recordingSwitchIsOn: bool});
    console.log('resultsCell toggleRecording setting switch to', bool);
  },

  //When switch is on, adjust height to show ResultOptions
  //When off, only show cell.
  adjustHeight: function() {
    if(this.state.recordingSwitchIsOn){
      //If recording custom result, need room to show
      //both SegmCtrl and text input from ResultOptions
      if(this.props.resultType === 'Custom'){
        return 132;
      } else {
        //Adjust to fit SegmCtrl in ResultOptions
        return 88;
      }
    } else {
      //Set height to default cell height
      return 44;
    }
  },

  render: function(){
    //Must declare here, as props aren't accessible to ResultOptions
    var recordingSwitchIsOn = this.state.recordingSwitchIsOn;
    var resultType = this.props.resultType;
    var partIdx = this.props.partIdx;

    var showOrHideResultOptions = function(){
      if(recordingSwitchIsOn) {
        return (
          <ResultOptions
            resultType={resultType}
            partIdx={partIdx} />
        );
      } else {
        return null;
      }
    };

    return (
      /* jshint ignore:start */
      <CustomCell customHeight={this.adjustHeight()}>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around', height: this.adjustHeight()}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.cellPrompt}>Record Results</Text>
            <SwitchIOS
              onTintColor="#4dba97"
              onValueChange={(bool) => this.toggleRecording(bool)}
              value={this.props.isRecording} />
          </View>
          {showOrHideResultOptions()}
        </View>
      </CustomCell>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  cellPrompt: {
    fontSize: 16,
    color: '#4A4A4A',
    fontFamily: 'Avenir Next',
    marginTop: 5
  },
});


module.exports = ResultsCell;