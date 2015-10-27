/*
* @Author: vincetam
* @Date:   2015-10-23 15:04:43
* @Last Modified by:   vincetam
* @Last Modified time: 2015-10-27 13:28:15
*/

'use strict';

var React = require('react-native');
var createWorkoutStore = require('../../stores/createWorkoutStore');

//Load components
// var TableView = require('react-native-tableview');
// var Section = TableView.Section;
// var Item = TableView.Item;
// var Cell = TableView.Cell;
//

var {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  TextInput
} = React;

import {TableView, Section, Cell} from 'react-native-tableview-simple';

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
      <ScrollView contentContainerStyle={styles.stage}>
        <TableView>
          <Section header="ACCESSORY">
            <Cell cellstyle="RightDetail" accessory="DisclosureIndicator" title="RightDetail" detail="Detail" />
          </Section>
        </TableView>
      </ScrollView>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  stage: {
    backgroundColor: '#EFEFF4',
    paddingTop: 20,
    paddingBottom: 20,
  },
});

module.exports = ModifyWorkout;



      //Below is TableView component using react-native-tableview
        // <TableView style={{flex:1}}
        //    tableViewStyle={TableView.Consts.Style.Grouped}
        //    tableViewCellStyle={TableView.Consts.CellStyle.Value1}
        //    onPress={(event) => console.log(event)}>
        //   <Section arrow={true}>
        //     <Item value="Today" detail="Today">Workout Date</Item>
        //   </Section>
        //   <Section>
        //     <Item detail="In 20 min, perform as many rounds as possible of" arrow={true}>Instructions</Item>
        //     <Item arrow={true}>5 Pull Ups</Item>
        //     <Item arrow={true}>10 Push Ups</Item>
        //     <Item arrow={true}>15 Squats</Item>
        //   </Section>
        // </TableView>