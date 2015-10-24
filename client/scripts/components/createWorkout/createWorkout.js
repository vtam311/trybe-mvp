/*
* @Author: vincetam
* @Date:   2015-10-23 15:04:43
* @Last Modified by:   vincetam
* @Last Modified time: 2015-10-23 17:05:08
*/

'use strict';

var React = require('react-native');
var createWorkoutStore = require('../../stores/createWorkoutStore');

//Load components
var TableView = require('react-native-tableview');
var Section = TableView.Section;
var Item = TableView.Item;
var Cell = TableView.Cell;

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} = React;

var ModifyWorkout = React.createClass({
  getInitialState: function() {
    return {
      // isCreating: createWorkoutStore.getIsCreating(),
      workout: createWorkoutStore.getWorkout(),
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
      workout: createWorkoutStore.getWorkout(),
    });
  },

  render: function(){
    return (
      /* jshint ignore:start */
        <TableView style={{flex:1}}
           tableViewStyle={TableView.Consts.Style.Grouped}
           tableViewCellStyle={TableView.Consts.CellStyle.Value1}
           onPress={(event) => console.log(event)}>
          <Section arrow={true}>
            <Item value="Today" detail="Today">Workout Date</Item>
          </Section>
          <Section label="Part 1">
            <Item value="Today" detail="Today">Workout Date</Item>
          </Section>
        </TableView>
      /* jshint ignore:end */
            // <Cell><Text>Custom</Text></Cell>
    );
  }
});

module.exports = ModifyWorkout;