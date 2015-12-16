/*
* @Author: vincetam
* @Date:   2015-10-23 15:04:43
* @Last Modified by:   VINCE
* @Last Modified time: 2015-12-15 15:31:07
*/

'use strict';

var React = require('react-native');
var createWorkoutActions = require('../../actions/createWorkoutActions');
var createWorkoutStore = require('../../stores/createWorkoutStore');

var {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight
} = React;

//Load components
import {TableView, Section, CustomCell} from 'react-native-tableview-simple';
var DateCell = require('./dateCell');
var Part = require('./part');

var CreateWorkout = React.createClass({
  getInitialState: function() {
    return {
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
  addPart: function(){
    createWorkoutActions.addPart();
  },

  render: function(){

    var parts = this.state.workout.parts.map((part, index) =>
      <Part
        part={part}
        partIdx={index}
        openExerciseModal={this.props.openExerciseModal}
        openPartModal={this.props.openPartModal}
        key={index} />
    );

    //Issue: If a part's exercises take up the screen, the Add Part button gets pushed down and covered.
    return (
      /* jshint ignore:start */
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.stage}>
          <TableView>

            <Section>
              <DateCell />
            </Section>

            {parts}

            <Section>
              <TouchableHighlight onPress={this.addPart} activeOpacity={.8} underlayColor={'#BFBFBF'}>
                <View style={{flexDirection: 'column', justifyContent: 'space-around', height: 44}}>
                  <View style={{flexDirection: 'row', marginLeft: 10}}>
                    <Image
                      style={{height: 14, width: 14, marginTop: 2, marginRight: 8}}
                      source={require('image!addButton')} />
                    <Text style={{flex: 1, fontSize: 14, color: '#767676', fontFamily: 'ArialMT'}}>ADD PART</Text>
                  </View>
                </View>
              </TouchableHighlight>
            </Section>

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
    paddingTop: 20,
    paddingBottom: 20,
  },
});

module.exports = CreateWorkout;
