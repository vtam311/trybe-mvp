/*
* @Author: vincetam
* @Date:   2015-12-13 17:20:32
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-18 12:51:04
*/

'use strict';

var React = require('react-native');
var createWorkoutActions = require('../../../actions/createWorkoutActions');

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
  },

  //Adjust height to show components in ResultsCell
  adjustHeight: function() {
    if(this.state.recordingSwitchIsOn){
      //If recording custom result, show
      //both SegmCtrl and text input from ResultOptions
      if(this.props.resultType &&
        this.props.resultType !== 'Time' &&
        this.props.resultType !== 'Rounds' &&
        this.props.resultType !==  'Max Load'){
        return 132;
      } else {
        //If recording Time, Rounds, or Max Load,
        //adjust to fit SegmCtrl in ResultOptions
        return 88;
      }
    } else {
      //If not recording, just show cell with SwitchIOS
      return 44;
    }
  },

  render: function(){
    //Must declare here, as props aren't accessible to showOrHideResultOptions
    var recordingSwitchIsOn = this.state.recordingSwitchIsOn;
    var resultType = this.props.resultType;
    var partIdx = this.props.partIdx;
    var scrollToComponent = this.props.scrollToComponent;

    var showOrHideResultOptions = function(){
      if(recordingSwitchIsOn) {
        return (
          <ResultOptions
            resultType={resultType}
            partIdx={partIdx}
            scrollToComponent={scrollToComponent} />
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