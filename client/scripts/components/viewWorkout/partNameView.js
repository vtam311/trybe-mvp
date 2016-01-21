/*
* @Author: vincetam
* @Date:   2016-01-20 16:25:50
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-20 16:48:25
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

var PartNameView = React.createClass({
  handlePress: function(){
    //Let editWorkoutStore know which part we are editing
    editWorkoutActions.setTargetPartIdx(this.props.partIdx);
    modalActions.openPartModal();
  },
  renderPartName: function(){
    var name;
    if(this.props.partName){
      name = this.props.partName.toUpperCase();
    } else {
      var partNum = this.props.partIdx + 1;
      name = ('Part ' + partNum).toUpperCase();
    }

    return name;
  },
  render: function(){
    return (
      <View style={styles.partNameContainer}>
        { this.props.isModifying ?
          <TouchableOpacity onPress={this.handlePress}
            style={{flex: 1, flexDirection: 'row'}}>

            <View style={{alignSelf: 'center'}}>
              <Text style={styles.partNameText}>{this.renderPartName()}</Text>
            </View>
            <View style={{position: 'relative', marginLeft: 10, marginTop: 22}}>
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
    marginTop: 40,
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
});

module.exports = PartNameView;
