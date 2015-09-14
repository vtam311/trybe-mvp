/*
* @Author: vincetam
* @Date:   2015-09-14 15:37:12
* @Last Modified by:   VINCE
* @Last Modified time: 2015-09-14 16:02:25
*/

'use strict';

var React =  require('react-native');
var doWorkoutStore = require('../../../stores/doWorkoutStore');
var doWorkoutActions = require('../../../actions/doWorkoutActions');

var {
  View,
  StyleSheet,
  Text,
  TextInput
} = React;


var DoCustom = React.createClass({
  getInitialState: function() {
    return {
      notes: doWorkoutStore.getNotes()
    };
  },
  componentDidMount: function() {
    doWorkoutStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    doWorkoutStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      notes: doWorkoutStore.getNotes(),
    });
  },
  render: function(){
    var workout = this.props.workout;
    var isEditable = this.props.isEditable;

    return (
      /* jshint ignore:start */
      <View>
        <TextInput
          style={{height: 100}}
          multiline={true}
          editable={isEditable}
          value={workout.instructions}/>
        <Text>Notes</Text>
        <TextInput
          style={{height: 150}}
          multiline={true}
          editable={isEditable}
          value={this.state.notes}/>
      </View>
      /* jshint ignore:end */
    );
  },
});

module.exports = DoCustom;
