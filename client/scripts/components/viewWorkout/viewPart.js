/*
* @Author: vincetam
* @Date:   2015-12-28 16:01:39
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-02 16:12:20
*/

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} = React;

import {Section, CustomCell} from 'react-native-tableview-simple';

//Load custom components
var PartHeader = require('./partHeader');
var ViewInstructions = require('./viewInstructions');
var EditExerciseCell = require('../editWorkout/editPart/editExerciseCell');


var DoPart = React.createClass({
  getInitialState: function(){
    return {
      isExpanded: true,
    };
  },
  toggleCollapse: function(){
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  },
  render: function(){
    var part = this.props.part;
    var partIdx = this.props.partIdx;

    /* jshint ignore:start */
    var exercises = part.exercises.map((exercise, index) =>
      <View key={index}>
        <EditExerciseCell
          exercise={exercise}
          partIdx={partIdx}
          exIdx={index}
          openExerciseModal={this.props.openExerciseModal} />
        <View style={styles.cellSeparatorBackground}>
          <View style={styles.cellSeparatorLine}></View>
        </View>
      </View>
    );
    /* jshint ignore:end */

    return (
      /* jshint ignore:start */
      <View style={styles.container}>
        <View style={styles.header}>
          <PartHeader
            part={part}
            partIdx={partIdx}
            toggleCollapse={this.toggleCollapse}
            isExpanded={this.state.isExpanded}
            openLogModal={this.props.openLogModal} />
        </View>

        {this.state.isExpanded ?
          <View>
            <View style={styles.body}>
              <ViewInstructions
                instructions={part.instructions}
                partIdx={partIdx} />
              {exercises}
            </View>

            <View style={styles.footer}>
              <TouchableOpacity
                onPress={() => this.toggleCollapse()}
                style={{marginBottom: 10}}>
                <Image source={require('image!collapseArrow')} />
              </TouchableOpacity>
            </View>
          </View>
          : null
        }

      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#c8c7cc',
  },
  header: {
    padding: 10,
  },
  body: {
    borderTopWidth: .5,
    borderColor: 'rgba(155,155,155,.7)',
    marginLeft: 5,
  },
  footer: {
    height: 40,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cellSeparatorBackground: {
    backgroundColor: '#fff',
  },
  cellSeparatorLine: {
    marginLeft: 15,
    height: 0.5,
    backgroundColor: '#c8c7cc',
  }
});

module.exports = DoPart;