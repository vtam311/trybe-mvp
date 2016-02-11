/*
* @Author: vincetam
* @Date:   2016-02-10 14:58:52
* @Last Modified by:   VINCE
* @Last Modified time: 2016-02-10 16:15:59
*/

'use strict';

var React = require('react-native');

var PartView = require('./partView');

var {
  ScrollView,
  StyleSheet,
  Text,
  View,
} = React;

//Scene for showing a full workout's part, along with ability to retry
var DayScene = React.createClass({
  getInitialState: function(){
    return {
      workout: this.props.route.workout
    };
  },
  render: function(){
    var workout = this.state.workout;
    //Filter for parts that exist. ie. Part at index 0 may not be present,
    //while part at index 1 does, if user logged second part before the first.
    var partExists = function(part){
      if(part) return true;
    };
    var existingParts = workout.parts.filter(partExists);
    var partViews = existingParts.map((part, index) =>
      /* jshint ignore:start */
      <View style={styles.partViewContainer} key={index}>
        <PartView part={part} showNotes={true} notesNumLines={null}/>
      </View>
      /* jshint ignore:end */
    );

    return (
      /* jshint ignore:start */
        <View style={styles.container}>
          <ScrollView>
            { partViews }
          </ScrollView>
        </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(141, 134, 126, .2)',
  },
  partViewContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
  },
  controlsContent: {
    backgroundColor: '#fff'
  }
});

module.exports = DayScene;