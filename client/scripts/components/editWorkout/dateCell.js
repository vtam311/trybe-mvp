/*
* @Author: vincetam
* @Date:   2015-10-29 15:00:08
* @Last Modified by:   vincetam
* @Last Modified time: 2015-12-29 00:20:22
*/

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  Text,
  Image
} = React;

import {CustomCell} from 'react-native-tableview-simple';

var DateCell = React.createClass({
  showPreview: function(date){
    var dateIsToday = function(){
      var today = new Date();
      if(date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getYear() === today.getYear()) {
        return true;
      } else {
        return false;
      }
    };

    //If day is today, return 'Today' as preview
    if(dateIsToday(date)) return 'Today';
    else {
      var dateString = this.props.date.toString();
      var datePreview = dateString.slice(0,10);
      return datePreview;
    }
  },
  ensureIsDateObj: function(date){
    if(typeof date === 'string') return new Date(date);
    else return date;
  },
  render: function(){
    var date = this.ensureIsDateObj(this.props.date);

    return (
      /* jshint ignore:start */
      <CustomCell onPress={this.props.openDateModal}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.cellPrompt}>Date</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.cellStatus}>{this.showPreview(date)}</Text>
            <Image
              style={{height: 13, width: 8, marginTop: 4, marginLeft: 15}}
              source={require('image!disclosureIndicator')} />
          </View>
        </View>
      </CustomCell>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  cellPrompt: {
    fontSize: 16,
    color: '#4A4A4A',
    fontFamily: 'Avenir Next'
  },
  cellStatus: {
    fontSize: 16,
    color: '#9B9B9B',
    fontFamily: 'Avenir Next'
  }
});

module.exports = DateCell;
