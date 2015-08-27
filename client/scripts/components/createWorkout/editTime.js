'use strict';

var React = require('react-native');
var renderTimeHelper = require('../../helpers/renderTimeHelper');
var createWorkoutStore = require('../../stores/createWorkoutStore');
var createWorkoutActions = require('../../actions/createWorkoutActions');

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
      showTimeSelection: createWorkoutStore.getIsEditingTime()
    };
  },
  componentDidMount: function() {
    createWorkoutStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    createWorkoutStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      showTimeSelection: createWorkoutStore.getIsEditingTime(),
    });
  },
  toggleTimeEdit: function() {
    createWorkoutActions.toggleTimeEdit();
  },
  setTime: function(num){
    //If num is not two digits, add zero to front
    num = ('0' + num).slice(-2);
    var time = '00:' + num + ':00';

    var updatedWorkout = this.props.workout;
    updatedWorkout.time = time;
    createWorkoutActions.updateWorkout(updatedWorkout);
  },
  render: function() {
    if(this.state.showTimeSelection){
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
    }else{
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
    }
  }
});


module.exports = TimeEdit;
