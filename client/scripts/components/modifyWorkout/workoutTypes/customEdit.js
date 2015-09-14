'use strict';

var React = require('react-native');
var modifyWorkoutStore = require('../../../stores/modifyWorkoutStore');
var modifyWorkoutActions = require('../../../actions/modifyWorkoutActions');

var {
  StyleSheet,
  TextInput
} = React;


var CustomEdit = React.createClass({
  render: function(){
    var workout = this.props.workout;

    return (
      /* jshint ignore:start */
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          multiline={true}
          value={workout.instructions}/>
      /* jshint ignore:end */
    );
  },
});

module.exports = CustomEdit;
