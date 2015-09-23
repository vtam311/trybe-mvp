'use strict';

var React = require('react-native');
var renderTimeHelper = require('../../common/renderTimeHelper');
var modifyWorkoutStore = require('../../stores/modifyWorkoutStore');
var modifyWorkoutActions = require('../../actions/modifyWorkoutActions');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  PickerIOS
} = React;

var PickerItemIOS = PickerIOS.Item;
var TIME_CHOICES = [1,2,3,4,5,6,7,8,9,10,15,20,25,30,45,60,90];

var TimeEdit = React.createClass({
  getInitialState: function() {
    return {
      showTimeSelection: false
    };
  },
  toggleTimeEdit: function() {
    // modifyWorkoutActions.toggleTimeEdit();
    this.setState({
      showTimeSelection: !this.state.showTimeSelection
    });
  },
  setTime: function(num){
    //If num is not two digits, add zero to front
    num = ('0' + num).slice(-2);
    var time = '00:' + num + ':00';
    this.props.workout.time = time;
    modifyWorkoutActions.updateWorkout(this.props.workout);
  },
  render: function() {
    if(this.state.showTimeSelection && this.props.workout.time){
      return (
        /* jshint ignore:start */
        <View>
          <TouchableHighlight
            onPress={ () => this.toggleTimeEdit() }>
            <Text>{renderTimeHelper(this.props.workout.time) + ' As Many Rounds as Possible'}</Text>
          </TouchableHighlight>
          <PickerIOS
            selectedValue={Number(this.props.workout.time.slice(3,5))}
            onValueChange={(num) => this.setTime(num)}>
            {TIME_CHOICES.map((num) =>
              <PickerItemIOS
                key={num}
                value={num}
                label={num.toString() + ' min'}/>
            )}
          </PickerIOS>
        </View>
        /* jshint ignore:end */
      );
    } else if(this.props.workout.time) {
      return (
        /* jshint ignore:start */
        <View>
          <TouchableHighlight
            onPress={ () => this.toggleTimeEdit() }>
            <Text>{renderTimeHelper(this.props.workout.time) + ' As Many Rounds as Possible'}</Text>
          </TouchableHighlight>
        </View>
        /* jshint ignore:end */
      );
    } else {
      return null;
    }
  }
});


module.exports = TimeEdit;
