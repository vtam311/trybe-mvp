/*
* @Author: vincetam
* @Date:   2016-01-20 16:25:50
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-18 19:11:18
*/

'use strict';

var React = require('react-native');
var editWorkoutActions = require('../../actions/editWorkoutActions');
var modalActions = require('../../actions/modalActions');

var {
  TouchableOpacity,
  Image,
  View,
  Text,
  StyleSheet,
} = React;

var PartHeader = React.createClass({
  handlePress: function(){
    //Let editWorkoutStore know which part we are editing
    editWorkoutActions.setTargetPartIdx(this.props.partIdx);
    modalActions.openPartModal();
  },
  renderPartName: function(){
    var name;
    //If part name is specified, show it
    if(this.props.partName){
      name = this.props.partName.toUpperCase();
    } else {
      //otherwise show 'PART #'
      var partNum = this.props.partIdx + 1;
      name = ('Part ' + partNum).toUpperCase();
    }

    return name;
  },
  render: function(){
    return (
      <View style={[styles.partNameContainer, {width: this.props.width}]}>
        { this.props.isModifying ?
          <TouchableOpacity onPress={this.handlePress}
            style={{flex: 1, flexDirection: 'row'}}>
            <View style={{alignSelf: 'center'}}>
              <Text style={[styles.partNameText, styles.editableText]}>{this.renderPartName()}</Text>
            </View>
            <View style={{position: 'absolute', marginLeft: 10, marginTop: 8}}>
              <Image
                source={require('image!disclosureIndicatorWhite')}
                style={{marginTop: 9}} />
            </View>
          </TouchableOpacity>
          :
          <View >
            <Text style={styles.partNameText}>{this.renderPartName()}</Text>
          </View>
        }
      </View>
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
  partNameText: {
    fontFamily: 'Avenir Next',
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    marginTop: 10,
  },
  editableText: {
    fontWeight: '400'
  }
});

module.exports = PartHeader;
