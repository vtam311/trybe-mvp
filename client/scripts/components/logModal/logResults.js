/*
* @Author: vincetam
* @Date:   2016-01-02 15:53:03
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-17 16:53:24
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
} = React;

//Load components
var SelectedResultInput = require('./logInputs/selectedResultInput');
var NotesInput = require('./logInputs/notesInput');

var LogResults = React.createClass({
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
              <View style={{marginRight: 15, marginLeft: 15}}>
                <SegmentedControlIOS
                  values={['Time', 'Rounds', 'Max Load', 'Custom']}
                  selectedIndex={this.state.segmCtrlIdx}
                  onValueChange={(val) => this.setMetric(val)}
                  tintColor='#4DBA97' />
              </View>
              : null}

            <SelectedResultInput
              result={this.props.result}
              segmCtrlIdx={this.state.segmCtrlIdx}
              partIdx={this.props.partIdx} />

            <View style={styles.addNotesContainer}>
              <TouchableOpacity
                onPress={() => this.props.goToScene(NotesInput, 'Workout Notes')}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require('image!addButtonTeal')}
                  style={{height: 18, width: 18, marginRight: 10}}/>
                <Text style={[styles.text, {color: '#17738C'}]}>Add Notes</Text>
              </TouchableOpacity>
            </View>
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
  },
  metricControlContainer:{
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
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
  },
  addNotesContainer:{
    alignSelf: 'center',
    marginTop: 10,
  }
});

module.exports = LogResults;
