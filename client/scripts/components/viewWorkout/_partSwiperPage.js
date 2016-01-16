/*
* @Author: vincetam
* @Date:   2016-01-16 14:31:53
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-16 14:44:49
*/

'use strict';

var React = require('react-native');

var {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} = React;

var PartSwiperPage = React.createClass({
  render: function(){
    return (
      /* jshint ignore:start */
      <View>
        <View style={styles.header}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => console.log('back button pressed')}>
              <Image
                style={{width: 12, height: 21}}
                source={require('image!backArrow')} />
            </TouchableOpacity>
            <View style={styles.partWheel}>
              <Text style={styles.partName}>WARM UP</Text>
            </View>
          </View>
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
  headerContainer: {
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
  },
  partWheel: {
    height: 130,
    backgroundColor: 'rgba(77,186,151,.6)',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  partName: {
    fontFamily: 'Avenir Next',
    fontSize: 24,
    fontWeight: '600',
    color: 'white'
  },
});

module.exports = PartSwiperPage;