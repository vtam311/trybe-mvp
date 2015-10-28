/*
* @Author: vincetam
* @Date:   2015-10-23 15:04:43
* @Last Modified by:   VINCE
* @Last Modified time: 2015-10-28 15:29:00
*/

'use strict';

var React = require('react-native');
var createWorkoutStore = require('../../stores/createWorkoutStore');

var {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Image,
  Dimensions
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
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.stage}>
          <TableView>
            <Section>
              <CustomCell onPress={() => {console.log('Heyho!')}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{fontSize: 16, color: '#9B9B9B'}}>Date</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 16}}>Today</Text>
                    <Image
                      style={{height: 13, width: 8, marginTop: 4, marginLeft: 5}}
                      source={require('image!disclosureIndicator')} />
                  </View>
                </View>
              </CustomCell>
            </Section>
            <Section header="Part 1">
              <CustomCell customHeight={70}>
                <View style={{flex: 1, flexDirection: 'column', marginTop: 5}}>
                  <Text style={{fontSize: 14, color: '#9B9B9B'}}>Instructions</Text>
                  <TextInput
                      style={{height: 40}}/>
                </View>
              </CustomCell>
              <CustomCell onPress={() => {console.log('Heyho!')}}>
                <Image
                  style={{height: 14, width: 14, marginTop: 2, marginRight: 8}}
                  source={require('image!clearButton')} />
                <Text style={{flex: 1, fontSize: 16}}>5 Pull Ups</Text>
                <Image
                  style={{height: 13, width: 8}}
                  source={require('image!disclosureIndicator')} />
              </CustomCell>
              <CustomCell onPress={() => {console.log('Heyho!')}}>
                <Image
                  style={{height: 14, width: 14, marginTop: 2, marginRight: 8}}
                  source={require('image!addButton')} />
                <Text style={{flex: 1, fontSize: 16}}>Add Exercise</Text>
              </CustomCell>
            </Section>
            <View style={{flex: 1, flexDirection: 'row', marginLeft: 10}}>
              <Image
                style={{height: 14, width: 14, marginTop: 4, marginRight: 8}}
                source={require('image!addButton')} />
              <Text style={{flex: 1, fontSize: 16}}>Add Part</Text>
            </View>
          </TableView>
        </ScrollView>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFF4',
  },
  stage: {
    backgroundColor: '#EFEFF4',
    paddingTop: 20,
    paddingBottom: 20,
  }
});

module.exports = ModifyWorkout;
