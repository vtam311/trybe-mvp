/*
* @Author: vincetam
* @Date:   2015-09-23 15:41:03
* @Last Modified by:   VINCE
* @Last Modified time: 2015-09-23 16:25:19
*/

'use strict';

var React = require('react-native');
var modifyWorkoutStore = require('../../stores/modifyWorkoutStore');
var modifyWorkoutActions = require('../../actions/modifyWorkoutActions');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  PickerIOS
} = React;

var DIST_CHOICES = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,25,30,35,40,45,50,100,200,400,600,800,1200,1600];
var DIST_UNITS = ['ft', 'yd', 'm', 'km', 'mi'];

var PickerItemIOS = PickerIOS.Item;

var DistEdit = React.createClass({
  /*DistEdit state does not reflect store's state because each workout has many exercises which can be modified. If it did, the number of listeners would be too high. */
  getInitialState: function() {
    return {
      showDistSelection: false
    };
  },
  toggleDistEdit: function(){
    this.setState({
      showDistSelection: !this.state.showDistSelection
    });
  },
  setDist: function(dist, partIdx, exIdx){
    modifyWorkoutActions.setDist(dist, partIdx, exIdx);
  },
  setDistUnits: function(unit, partIdx, exIdx){
    modifyWorkoutActions.setDistUnit(unit, partIdx, exIdx);
  },
  render: function() {
    console.log('distanceEdit comp rendered');
    //Load props
    var exercise = this.props.exercise;
    var partIdx = this.props.partIdx;
    var exIdx = this.props.exIdx;

    var distEdit;

    //Show distEdit options if the exercise's dist are being edited
    if(this.state.showDistSelection){
      distEdit = (
        <View>
          <PickerIOS
            selectedValue={exercise.distance.val}
            onValueChange={(val) => this.setDist(val, partIdx, exIdx)}>
            {DIST_CHOICES.map((num) =>
              <PickerItemIOS
                key={num}
                value={num}
                label={num.toString()}/>
            )}
          </PickerIOS>
          <PickerIOS
            selectedValue={exercise.distance.units}
            onValueChange={(val) => this.setDistUnits(val, partIdx, exIdx)}>
            {DIST_UNITS.map((unit) =>
              <PickerItemIOS
                key={unit}
                value={unit}
                label={unit}/>
            )}
          </PickerIOS>
        </View>
      );
    }else{
      distEdit = null;
    }

    return (
      <View>
        <TouchableHighlight
          onPress={ () => this.toggleDistEdit() }>
          <Text>{exercise.distance.val}{exercise.distance.units}</Text>
        </TouchableHighlight>
        {distEdit}
      </View>
    );
  }
});

module.exports = DistEdit;
