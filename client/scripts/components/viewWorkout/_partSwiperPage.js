/*
* @Author: vincetam
* @Date:   2016-01-16 14:31:53
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-18 10:44:09
*/

'use strict';

var React = require('react-native');

var {
  ScrollView,
  TouchableOpacity,
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
          <Text style={styles.partName}>{this.props.part.name.toUpperCase()}</Text>
        </View>


        <ScrollView
          contentContainerStyle={styles.contentContainerStyle} >
          <View>
            <TouchableOpacity onPress={() => console.log('instructions clicked')}>
              <View style={styles.instructionsContainer}>
                <Text style={styles.instructionsText}>{this.props.part.instructions}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      /* jshint ignore:start */
    );
  }
});

var styles = StyleSheet.create({
  partWheel: {
    height: 60,
    backgroundColor: 'rgba(77,186,151,.6)',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  partName: {
    fontFamily: 'Avenir Next',
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    marginTop: 10,
  },
  contentContainerStyle: {
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'column',
    alignItems: 'center'
  },
  instructionsContainer: {
    width: 300,
    marginTop: 30,
    marginBottom: 30,
  },
  instructionsText: {
    fontFamily: 'Avenir Next',
    fontSize: 25,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
  },
});

module.exports = PartSwiperPage;