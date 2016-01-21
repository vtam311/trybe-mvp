/*
* @Author: vincetam
* @Date:   2016-01-10 21:20:46
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-20 21:19:46
*/

'use strict';

var React = require('react-native');

//Load components
var Part = require('./part');

var {
  StyleSheet,
  Text,
  View,
} = React;

var ViewWorkoutBody = React.createClass({

  render: function(){
    //workouts are made of parts. parts include instructions,
    //exercises, results, and optionally notes
    var workout = this.props.workout;

    //Filter for parts that exist. ie. Part at index 0 may not be present,
    //while part at index 1 does, if user logged second part before the first.
    var partExists = function(part){
      if(part) return true;
    };
    var existingParts = workout.parts.filter(partExists);
    var partViews = existingParts.map((part, index) =>
        /* jshint ignore:start */
        <View key={index}>
          <Part part={part} showNotes={this.props.showNotes}/>
          { existingParts[index + 1] ?
            <View style={styles.separatorLine}></View> :
            null
          }
        </View>
        /* jshint ignore:end */
    );

    return (
      /* jshint ignore:start */
      <View>
        { partViews }
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  results: {
    borderBottomWidth: .5,
    borderColor: '#9B9B9B',
  },
  separatorLine: {
    height: 0.5,
    backgroundColor: '#9B9B9B',
    marginTop: 10,
    marginBottom: 10,
  }
});

module.exports = ViewWorkoutBody;
