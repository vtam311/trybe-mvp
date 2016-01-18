/*
* @Author: vincetam
* @Date:   2016-01-16 14:31:53
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-18 12:51:29
*/

'use strict';

var React = require('react-native');

var {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image
} = React;

var InstructionsView = require('./_instructionsView');
var ExerciseView = require('../../common/viewWorkoutComponents/exNameAndParams');

var PartSwiperPage = React.createClass({
  render: function(){
    var exerciseViews = this.props.part.exercises.map( (exercise, index) =>
      /* jshint ignore:start */
      <View style={styles.exerciseContainer}>
        <ExerciseView
          exercise={exercise}
          exIdx={index}
          customFontSize={25}
          customFontColor='#fff' />
      </View>
      /* jshint ignore:end */
    );

    return (
      /* jshint ignore:start */
      <View>
        <View style={styles.partWheel}>
          <Text style={styles.partName}>{this.props.part.name.toUpperCase()}</Text>
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
    height: 60,
    backgroundColor: 'rgba(77,186,151,.6)',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  partName: {
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
  exerciseContainer: {
    width: 330,
    borderBottomWidth: .5,
    borderColor: '#fff',
    paddingTop: 15,
    paddingBottom: 15
  }
});

module.exports = PartSwiperPage;