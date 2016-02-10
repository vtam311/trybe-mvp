/*
* @Author: vincetam
* @Date:   2016-02-10 11:54:49
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-10 15:41:23
*/

'use strict';

var React = require('react-native');

//Load components
var PartView = require('./partView');
var PartScene = require('./partScene');

var {
  TouchableHighlight,
  Image,
  StyleSheet,
  Text,
  View,
} = React;

var PartsView = React.createClass({
  passPartToScene: function(part){
    return part;
  },
  handlePress: function(part){
    this.props.goToScene(PartScene, part.name, part);
  },
  render: function(){
    var workout = this.props.workout;

    //Filter for parts that exist. ie. Part at index 0 may not be present,
    //while part at index 1 does, if user logged second part before the first.
    var partExists = function(part){
      if(part) return true;
    };
    var existingParts = workout.parts.filter(partExists);
    var touchablePartViews = existingParts.map((part, index) =>
      /* jshint ignore:start */
      <TouchableHighlight
        onPress={() => this.handlePress(part)}
        underlayColor='rgba(155,155,155,.4)'
        key={index}>
        <View style={styles.touchableHighlightContainer}>
          <View style={styles.partViewContainer}>
            <PartView part={part} showNotes={this.props.showNotes}/>
            { existingParts[index + 1] ?
              <View style={styles.separatorLine}></View> :
              null
            }
          </View>
         <View style={styles.disclosureIndicatorContainer}>
          <Image source={require('image!disclosureIndicator')} />
         </View>
        </View>
      </TouchableHighlight>
      /* jshint ignore:end */
    );

    return (
      /* jshint ignore:start */
      <View>
        { touchablePartViews }
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  touchableHighlightContainer: {
    flexDirection: 'row',
  },
  partViewContainer: {
    flex: .9,
    paddingTop: 10,
  },
  disclosureIndicatorContainer: {
    flex: .1,
    flexDirection: 'column',
    justifyContent: 'center', //not working, RN bug
    alignItems: 'center',
    marginTop: 12 //until justifyContent works, use this
  },
  separatorLine: {
    height: 0.5,
    backgroundColor: '#9B9B9B',
  }
});

module.exports = PartsView;
