/*
* @Author: vincetam
* @Date:   2016-01-16 14:31:53
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-18 17:24:40
*/

'use strict';

var React = require('react-native');

var {
  ScrollView,
  Dimensions,
  View,
  Text,
  StyleSheet,
} = React;

var InstructionsView = require('./_instructionsView');
var ExerciseView = require('./_exerciseView');

var PartPage = React.createClass({
  getInitialState: function(){
    return {
      visibleWidth: Dimensions.get('window').width,
    };
  },
  render: function(){
    var exerciseViews = this.props.part.exercises.map( (exercise, index) =>
      /* jshint ignore:start */
      <ExerciseView exercise={exercise} partIdx={this.props.partIdx} exIdx={index} />
      /* jshint ignore:end */
    );

    return (
      /* jshint ignore:start */
      <View style={{width: this.state.visibleWidth}}>
        <View style={styles.partWheel}>
          <View style={styles.partNameContainer}>
            <Text style={styles.partNameText}>{this.props.part.name.toUpperCase()}</Text>
          </View>
        </View>

        <ScrollView
          contentContainerStyle={styles.contentContainerStyle} >
          <InstructionsView
            instructions={this.props.part.instructions}
            partIdx={this.props.partIdx} />
          {exerciseViews}
        </ScrollView>

      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  partWheel: {
    height: 110,
    backgroundColor: 'rgba(77,186,151,.6)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  partNameContainer: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  partNameText: {
    fontFamily: 'Avenir Next',
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    marginTop: 10,
  },
  contentContainerStyle: {
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'column',
    alignItems: 'center'
  },

});

module.exports = PartPage;