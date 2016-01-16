/*
* @Author: vincetam
* @Date:   2016-01-14 14:20:42
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-15 22:15:14
*/

'use strict';

var React = require('react-native');

var {
  Image,
  StyleSheet,
  Text,
  View,
} = React;

var ProfileCard = React.createClass({
  render: function(){
    /* jshint ignore:start */
    return (
      <View style={[styles.container]}>
        <Image
          source={require('image!logoBackdrop')}
          style={{flex: 1, height: null, width: null}}
          resizeMode='contain'>

        <View style={styles.content}>
          <View style={styles.topContainer}>
            <View style={{flexDirection: 'row'}}>
              <View style={[styles.imageCropper]}>
                <Image
                  style={styles.profilePic}
                  source={{uri: 'https://i.imgur.com/YcbwSpY.jpg'}} />
              </View>
              <View style={{marginLeft: 20}}>
                <Text style={styles.nameText}>Vincent Tam</Text>
                <Text style={styles.trybesText}>ICON Athletes</Text>
              </View>
            </View>

            <View>
              <Image
                style={styles.settingsIcon}
                source={require('image!settings')} />
            </View>

          </View>

          <View style={styles.bottomContainer}>
            <View style={styles.metrics}>
              <Text style={styles.metricText}>5</Text>
              <Text style={styles.metricDescr}>7 day workouts</Text>
            </View>
            <View style={styles.metrics}>
              <Text style={styles.metricText}>114</Text>
              <Text style={styles.metricDescr}>completed</Text>
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
    height: 200,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 255, 255, .85)',
    borderTopWidth: .5,
    borderBottomWidth: .5,
    borderColor: '#979797',
    shadowColor: '#979797',
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: .5,
    marginTop: -20,
    marginBottom: 10,
    padding: 10,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  imageCropper: {
    position: 'relative',
    overflow: 'hidden',
    width: 80,
    height: 80,
    marginLeft: 5,
    marginTop: 5
  },
  profilePic: {
    height: 80,
    width: 80
  },
  nameText: {
    fontFamily: 'Avenir Next',
    fontSize: 24,
    color: '#58504D',
    marginTop: 3,
    marginBottom: 5,
    textAlign: 'right'
  },
  trybesText: {
    fontFamily: 'Avenir Next',
    fontSize: 18,
    color: '#58504D',
    textAlign: 'right',
  },
  settingsIcon: {
    marginTop: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 35
  },
  metrics: {
    marginRight: 30,
    marginLeft: 30,
    alignItems: 'center',
  },
  metricText:{
    fontFamily: 'Avenir Next',
    fontSize: 18,
    fontWeight: '700',
    color: '#58504D'
  },
  metricDescr:{
    color: '#58504D',
    fontSize: 14
  }
});

module.exports = ProfileCard;