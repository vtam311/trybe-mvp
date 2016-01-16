/*
* @Author: vincetam
* @Date:   2016-01-16 14:31:53
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-16 14:49:07
*/

'use strict';

var React = require('react-native');

var {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image
} = React;

var PartSwiperPage = React.createClass({
  render: function(){
    return (
      /* jshint ignore:start */
      <View>

        <View style={styles.partWheel}>
          <Text style={styles.partName}>WARM UP</Text>
        </View>


        <ScrollView
          contentContainerStyle={styles.contentContainerStyle} >
          <View style={{height: 300}}>
            <Text>Test</Text>
          </View>
        </ScrollView>
      </View>
      /* jshint ignore:start */
    );
  }
});

var styles = StyleSheet.create({
  partWheel: {
    height: 70,
    backgroundColor: 'rgba(77,186,151,.6)',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  partName: {
    fontFamily: 'Avenir Next',
    fontSize: 24,
    fontWeight: '600',
    color: 'white'
  },
});

module.exports = PartSwiperPage;