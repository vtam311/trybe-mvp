/*
* @Author: vincetam
* @Date:   2016-01-20 16:51:54
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-06 10:09:11
*/

'use strict';

var React = require('react-native');
var editWorkoutActions = require('../../actions/editWorkoutActions');

var {
  TouchableOpacity,
  Image,
  View,
  Text,
  StyleSheet,
} = React;

var AddPartPage = React.createClass({
  handlePress: function(){
    editWorkoutActions.addPart();
  },
  render: function(){
    return (
      /* jshint ignore:start */
      <View style={[styles.partNameContainer, {width: this.props.visibleWidth}]}>
        <TouchableOpacity
          onPress={this.handlePress}
          style={styles.buttonContainer}>
          <Image source={require('image!addButtonWhite')}
            style={styles.addButton} />
          <Text style={styles.addButtonText}>New Part</Text>
        </TouchableOpacity>
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  partNameContainer: {
    flex: 1,
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  addButton: {
    marginTop: 5,
    marginRight: 8
  },
  addButtonText:{
    fontFamily: 'Avenir Next',
    fontSize: 25,
    fontWeight: '600',
    color: '#fff'
  },
});

module.exports = AddPartPage;
