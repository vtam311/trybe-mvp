/*
* @Author: vincetam
* @Date:   2015-10-23 15:04:43
* @Last Modified by:   VINCE
* @Last Modified time: 2015-12-14 18:10:15
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
var Swipeout = require('react-native-swipeout');
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
    //Testing swipeout
    // Buttons
    var swipeoutBtns = [
      {
        text: 'Delete',
        backgroundColor: 'rgba(255,255,255,0)',
        color: 'red'
      }
    ];

    var parts = this.state.workout.parts.map((part, index) =>
      <Swipeout right={swipeoutBtns} backgroundColor={'rgba(255,255,255,0)'} onOpen={() => null}>
        <Part
          part={part}
          partIdx={index}
          openExerciseModal={this.props.openExerciseModal}
          key={index} />
      </Swipeout>

    );

    //Issue: If a part's exercises take up the screen, the Add Part button gets pushed down and lost.
    //Seems to be an issue with ScrollView - adding a new section with a cell still has that issue.
      //Nevermind. Adding just a view within TableView makes that problem way worse. The entire view is eclipsed.
      //If in a Section, only about 1/3 of it is. Weird.

    //Do I want Add Part to be surrounded by lines like the sections, or off on its own?
    return (
      /* jshint ignore:start */
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.stage}>
          <TableView>
            <Swipeout right={swipeoutBtns}>
              <View>
                <Text>Swipe me left</Text>
              </View>
            </Swipeout>

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
