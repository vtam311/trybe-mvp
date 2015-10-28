/*
* @Author: vincetam
* @Date:   2015-10-23 15:04:43
* @Last Modified by:   vincetam
* @Last Modified time: 2015-10-27 18:39:20
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
  TextInput,
  ActivityIndicatorIOS, //delete later
  Image
} = React;

import {TableView, Section, Cell, CustomCell} from 'react-native-tableview-simple';

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
          <Section>
            <Cell cellstyle="RightDetail" accessory="DisclosureIndicator" title="Workout Date" detail="Today" />
          </Section>
          <Section header="Workout Details">
            <Cell cellstyle="Subtitle" title="Instructions" detail="In 20 min, perform as many rounds as possible of" accessory="DisclosureIndicator"/>
            <Cell cellstyle="Basic" accessory="DisclosureIndicator" title="5 Pull Ups" onPress={() => {console.log('Heyho!')}}/>
            <Cell cellstyle="Basic" accessory="DisclosureIndicator" title="10 Push Ups" onPress={() => {console.log('Heyho!')}}/>
            <Cell cellstyle="Basic" accessory="DisclosureIndicator" title="15 Squats" onPress={() => {console.log('Heyho!')}}/>
            <CustomCell customHeight={44} onPress={() => {console.log('Heyho!')}}>
              <Image
                style={{height: 16, width: 16, marginRight: 5}}
                source={require('image!addButton')} />
              <Text style={{flex: 1, fontSize: 16}}>Add Exercise</Text>
            </CustomCell>
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
  customCell: {
    height: 100
  }
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