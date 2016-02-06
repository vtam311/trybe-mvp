/*
* @Author: vincetam
* @Date:   2016-01-02 15:53:03
* @Last Modified by:   VINCE
* @Last Modified time: 2016-02-06 13:02:54
*/

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SegmentedControlIOS,
  TextInput, //take out later
} = React;

//Load components
var SelectedResultInput = require('./logInputs/selectedResultInput');
var NotesInput = require('./logInputs/notesInput');


var LogModal = React.createClass({
  getInitialState: function() {
    return {
      isShowingPicker: false,
      segmCtrlIdx: 0,
    };
  },
  componentWillMount: function() {
    //set default segmCtrlIdx based on val of result.type
    this.setDefaultSegmCtrlIdx();
  },
  setDefaultSegmCtrlIdx: function(){
    var segmCtrlIdx;
    //If no result type is provided, set to null.
    //If not time, rounds, or max load, default to custom
    switch(this.props.result.type) {
      case null:
        segmCtrlIdx = null;
        break;
      case 'Time':
        segmCtrlIdx = 0;
        break;
      case 'Rounds':
        segmCtrlIdx = 1;
        break;
      case 'Max Load':
        segmCtrlIdx = 2;
        break;
      default:
        segmCtrlIdx = 3;
    }
    this.setState({
      segmCtrlIdx: segmCtrlIdx
    });
  },
  setMetric: function(val){
    //Depending on the selected val, the picker should change
    var seg;
    if(val === 'Time') seg = 0;
    else if(val === 'Rounds') seg = 1;
    else if(val === 'Max Load') seg = 2;
    else if(val === 'Custom') seg = 3;

    this.setState({
      segmCtrlIdx: seg
    });
  },
  getCurrMetricText: function(){
    var result;
    switch(this.state.segmCtrlIdx) {
      case null:
        result = null;
        break;
      case 0:
        result = 'Time';
        break;
      case 1:
        result = 'Rounds';
        break;
      case 2:
        result = 'Max Load';
        break;
      default:
        result = 'Custom';
    }
    return result;
  },
  render: function() {
    return (
      <View style={styles.container}>

        <View style={styles.body}>
          <View style={styles.bodyContainer}>
            <View style={styles.metricControlContainer}>
              <TouchableOpacity onPress={() => this.setState({isShowingPicker: !this.state.isShowingPicker})}>
                <View style={styles.metricControlRow}>
                  <Text style={styles.text}>Metric</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={[styles.text, {color: '#A79D93'}]}>{this.getCurrMetricText()}</Text>
                    <Image
                      source={require('image!disclosureIndicator')}
                      style={{width: 8, height: 13, marginLeft: 7, marginBottom: 1}} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            {this.state.isShowingPicker ?
              <SegmentedControlIOS
                values={['Time', 'Rounds', 'Max Load', 'Custom']}
                selectedIndex={this.state.segmCtrlIdx}
                onValueChange={(val) => this.setMetric(val)}
                tintColor={'#4DBA97'}/>
              : null}

            <SelectedResultInput
              result={this.props.result}
              segmCtrlIdx={this.state.segmCtrlIdx}
              partIdx={this.props.partIdx} />
            <NotesInput
              notes={this.props.notes} />
          </View>
        </View>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    height: 100,
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  metricControlContainer:{
    marginTop: 15,
    marginBottom: 15
  },
  metricControlRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text:{
    fontFamily: 'Avenir Next',
    fontSize: 16,
    fontWeight: '500',
    color: 'black'
  }
});

module.exports = LogModal;
