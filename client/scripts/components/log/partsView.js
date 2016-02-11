/*
* @Author: vincetam
* @Date:   2016-02-10 11:54:49
* @Last Modified by:   VINCE
* @Last Modified time: 2016-02-10 16:16:54
*/

'use strict';

var React = require('react-native');

//Load components
var PartView = require('./partView');

var {
  TouchableHighlight,
  Image,
  StyleSheet,
  Text,
  View,
} = React;

var PartsView = React.createClass({
  render: function(){
    var workout = this.props.workout;

    //Filter for parts that exist. ie. Part at index 0 may not be present,
    //while part at index 1 does, if user logged second part before the first.
    var partExists = function(part){
      if(part) return true;
    };
    var existingParts = workout.parts.filter(partExists);
    var partViews = existingParts.map((part, index) =>
      /* jshint ignore:start */
      <View style={styles.partViewContainer} key={index}>
        <PartView
          part={part}
          showNotes={this.props.showNotes}
          notesNumLines={1} />
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
  partViewContainer: {
    flex: 1,
    paddingTop: 10,
  },
  separatorLine: {
    height: 0.5,
    backgroundColor: '#9B9B9B',
  }
});

module.exports = PartsView;
