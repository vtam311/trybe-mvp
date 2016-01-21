/*
* @Author: vincetam
* @Date:   2016-01-20 16:51:54
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-20 17:14:27
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
      <View style={[styles.container, {width: this.props.visibleWidth, height: this.props.visibleHeight}]}>
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
  container: {
    flex: 1,
    flexDirection: 'column',
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
