/*
* @Author: vincetam
* @Date:   2015-12-13 17:20:32
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-07 21:49:12
*/

'use strict';

var React = require('react-native');
var editWorkoutActions = require('../../../actions/editWorkoutActions');
var isCustomMetric = require('../../../common/isCustomMetric');

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
    editWorkoutActions.toggleRecording(bool, this.props.partIdx);

    //Manually set state without store, as component is basic
    this.setState({recordingSwitchIsOn: bool});
  },

  //Adjust height to show components in ResultsCell
  adjustHeight: function() {
    if(this.state.recordingSwitchIsOn){
      //If recording custom result, show
      //both SegmCtrl and text input from ResultOptions
      if(isCustomMetric(this.props.resultType)){
        return 144;
      } else {
        return 100;
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
        <View style={[styles.cellContainer, {height: this.adjustHeight()}]}>
          <View style={styles.cellRow}>
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
  },

});

var styles = StyleSheet.create({
  cellContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  cellRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 44,
  },
  cellPrompt: {
    fontSize: 16,
    color: '#4A4A4A',
    fontFamily: 'Avenir Next',
  }
});


module.exports = ResultsCell;