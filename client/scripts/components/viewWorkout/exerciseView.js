/*
* @Author: vincetam
* @Date:   2016-01-18 12:52:44
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-04 12:09:21
*/

'use strict';

var React = require('react-native');
var editWorkoutActions = require('../../actions/editWorkoutActions');
var editExerciseActions = require('../../actions/editExerciseActions');
var modalActions = require('../../actions/modalActions');

var {
  TouchableOpacity,
  Text,
  Image,
  View,
  StyleSheet,
} = React;

var ExerciseParams = require('./exerciseParams');
var RepPicker = require('./exerciseParameterPickers/repPicker');
var LoadPicker = require('./exerciseParameterPickers/loadPicker');
var DistancePicker = require('./exerciseParameterPickers/distancePicker');
var TimePicker = require('./exerciseParameterPickers/timePicker');

var ExerciseView = React.createClass({
  getInitialState: function(){
    return {
      showPicker: false,
      selectedPicker: null,
      selectedPickerParam: null,
    };
  },
  setShowPicker: function(bool){
    this.setState({showPicker: bool});
  },
  handleRepPress: function(){
    //If current picker is already showing, toggle off on press
    if(this.state.selectedPickerParam === 'reps'){
      this.setState({showPicker: !this.state.showPicker});
    } else {
    //Otherwise show on press
      this.setState({showPicker: true});
    }
    var picker =
      <RepPicker
        reps={this.props.exercise.reps}
        partIdx={this.props.partIdx}
        exIdx={this.props.exIdx} />;
    this.setState({
      selectedPicker: picker,
      selectedPickerParam: 'reps'
    });
  },
  handleLoadPress: function(){
    //If current picker is already showing, toggle off on press
    if(this.state.selectedPickerParam === 'load'){
      this.setState({showPicker: !this.state.showPicker});
    } else {
    //Otherwise show on press
      this.setState({showPicker: true});
    }

    var picker =
      <LoadPicker
        loadVal={this.props.exercise.load.val}
        units={this.props.exercise.load.units}
        partIdx={this.props.partIdx}
        exIdx={this.props.exIdx} />;

    this.setState({
      selectedPicker: picker,
      selectedPickerParam: 'load'
    });
  },
  handleDistancePress: function(){
    //If current picker is already showing, toggle off on press
    if(this.state.selectedPickerParam === 'distance'){
      this.setState({showPicker: !this.state.showPicker});
    } else {
    //Otherwise show on press
      this.setState({showPicker: true});
    }

    var picker =
      <DistancePicker
        distVal={this.props.exercise.distance.val}
        units={this.props.exercise.distance.units}
        partIdx={this.props.partIdx}
        exIdx={this.props.exIdx} />;

    this.setState({
      selectedPicker: picker,
      selectedPickerParam: 'distance'
    });
  },
  handleTimePress: function(){
    //If current picker is already showing, toggle off on press
    if(this.state.selectedPickerParam === 'time'){
      this.setState({showPicker: !this.state.showPicker});
    } else {
    //Otherwise show on press
      this.setState({showPicker: true});
    }

    var picker =
      <TimePicker time={this.props.exercise.time}
        partIdx={this.props.partIdx}
        exIdx={this.props.exIdx} />;

    this.setState({
      selectedPicker: picker,
      selectedPickerParam: 'time'
    });
  },
  handleInfoPress: function(){
    //Notify editExerciseModal that user is modifying existing
    //exercise rather than creating a new one
    editExerciseActions.setModifyOrCreate('modify');

    //notify editWorkoutStore which exercise is being modified
    editWorkoutActions.setTargetExerciseIdx(this.props.partIdx, this.props.exIdx);
    modalActions.openExerciseModal();
  },
  render: function(){
    if(this.props.isModifying) {
      return (
        /* jshint ignore:start */
          <View style={styles.exerciseContainer}>
            <View style={styles.rowContainer}>
              <TouchableOpacity>
                <Text style={styles.exerciseText}>{this.props.exercise.name}</Text>
              </TouchableOpacity>
              <ExerciseParams
                exercise={this.props.exercise}
                partIdx={this.props.partIdx}
                exIdx={this.props.exIdx}
                handleRepPress={this.handleRepPress}
                handleLoadPress={this.handleLoadPress}
                handleDistancePress={this.handleDistancePress}
                handleTimePress={this.handleTimePress} />
              <View style={{flex: .1, flexDirection: 'row', justifyContent: 'flex-end', marginLeft: 15}}>
               <TouchableOpacity
                onPress={this.handleInfoPress}
                style={{padding: 8, position: 'relative'}}>
                  <Image
                    source={require('image!infoIcon')} />
                </TouchableOpacity>
              </View>
            </View>
            {this.state.showPicker ?
              <View style={styles.pickerContainer}>
                {this.state.selectedPicker}
              </View>
              : null
            }
          </View>
        /* jshint ignore:end */
      );
    } else {
      return (
        <View style={styles.exerciseContainer}>
          <View style={styles.rowContainer}>
            <Text style={styles.exerciseText}>{this.props.exercise.name}</Text>
            <ExerciseParams
              exercise={this.props.exercise}
              exIdx={this.props.exIdx}
              handleRepPress={this.handleRepPress}
              handleLoadPress={this.handleLoadPress}
              handleDistancePress={this.handleDistancePress}
              handleTimePress={this.handleTimePress} />
          </View>
        </View>
      );
    }
  }
});
    //More icon

var styles = StyleSheet.create({
  exerciseContainer: {
    // flex: 1,
    borderBottomWidth: .5,
    borderColor: '#fff',
    paddingTop: 15,
    paddingBottom: 15,
    // backgroundColor: 'green',
  },
  rowContainer: {
    flexDirection: 'row',
    // backgroundColor: 'red'
  },
  exerciseText:{
    fontFamily: 'Avenir Next',
    fontSize: 25,
    color: '#fff',
    fontWeight: '500',
  },
  pickerContainer: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10,
  }
});

module.exports = ExerciseView;
