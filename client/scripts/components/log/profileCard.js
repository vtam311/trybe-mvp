/*
* @Author: vincetam
* @Date:   2016-01-14 14:20:42
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-15 21:38:51
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
              <Text style={{fontFamily: 'Avenir Next', fontSize: 18, fontWeight: '500'}}>5 workouts</Text>
              <Text style={{color: '#4A4A4A'}}>7-day activity</Text>
            </View>
            <View style={styles.verticalLine}></View>
            <View style={styles.metrics}>
              <Text style={{fontFamily: 'Avenir Next', fontSize: 18, fontWeight: '500'}}>114</Text>
              <Text style={{color: '#4A4A4A'}}>completed</Text>
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
    height: 230,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 255, 255, .75)',
    borderTopWidth: .5,
    borderBottomWidth: .5,
    borderColor: '#d9d9d9',
    padding: 10,
    marginBottom: 20,
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
    borderRadius: 40,
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
    color: '#4A4A4A',
    marginTop: 3,
    marginBottom: 5,
    textAlign: 'right'
  },
  trybesText: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    color: '#4A4A4A',
    textAlign: 'right',
  },
  settingsIcon: {
    marginTop: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30
  },
  metrics: {
    marginRight: 30,
    marginLeft: 30,
    alignItems: 'center',
  },
  verticalLine: {
    width: .5,
    height: 30,
    backgroundColor: '#C2C2C2'
  }
});

module.exports = ProfileCard;