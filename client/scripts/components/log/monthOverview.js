/*
* @Author: vincetam
* @Date:   2016-02-18 12:55:07
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-19 10:41:59
*/

'use strict';

var React = require('react-native');

var {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} = React;

var MonthOverview = React.createClass({
  render: function(){
    /* jshint ignore:start */
    return (
      <View style={[styles.container, {width: this.props.width}]}>
        <Image
          source={require('image!logoBackdropThick')}
          style={{flex: 1, height: null, width: null}}
          resizeMode='contain'>

          <View style={styles.content}>

            <View style={styles.topContainer}>
              <Text style={styles.monthText}>{this.props.date.month} {this.props.date.year}</Text>
            </View>

            <View style={styles.centerContainer}>
              <Image source={require('image!backArrowLightGrey')} />
              <Image source={require('image!forwardArrowLightGrey')} />
            </View>

            <View style={styles.bottomContainer}>
              <View style={styles.metricContainer}>
                <Text style={styles.metricText}>18</Text>
                <Image source={require('image!loggedIcon')} style={{width: 26, height: 26}} />
              </View>
              <View style={styles.metricContainer}>
                <Text style={styles.metricText}>3</Text>
                <Image source={require('image!newAchievementGreen')} style={{width: 24, height: 24}} />
              </View>
            </View>
          </View>

        </Image>
      </View>
      );
    /* jshint ignore:end */
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 255, 255, .85)',
    borderTopWidth: .5,
    borderBottomWidth: .5,
    borderColor: '#979797',
    shadowColor: '#979797',
    padding: 10,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  centerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  monthText: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    fontWeight: '500',
    color: '#4A4A4A',
  },
  metricContainer: {
    marginLeft: 65,
    marginRight: 65,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  metricText:{
    marginRight: 5,
    fontFamily: 'Avenir Next',
    fontSize: 24,
    fontWeight: '400',
    color: '#4A4A4A',
  },
});

module.exports = MonthOverview;