/*
* @Author: vincetam
* @Date:   2016-01-14 14:20:42
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-14 16:58:52
*/

'use strict';

var React = require('react-native');

var {
  Image,
  Dimensions,
  StyleSheet,
  Text,
  View,
} = React;

var ProfileCard = React.createClass({
  getInitialState: function(){
    return {
      visibleWidth: Dimensions.get('window').width,
    };
  },
  render: function(){
    /* jshint ignore:start */
    return (
      <View style={[styles.container, {width: this.state.visibleWidth}]}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={[styles.imageCropper]}>
            <Image
              style={styles.profilePic}
              source={{uri: 'https://i.imgur.com/YcbwSpY.jpg'}} />
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={styles.nameText}>Vincent Tam</Text>
            <Text style={styles.activeTrybesText}>Active trybes</Text>
            <Text style={styles.trybesText}>ICON Athletes</Text>
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
      );
    /* jshint ignore:end */
  }
});

var styles = StyleSheet.create({
  container: {
    height: 230,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderTopWidth: .5,
    borderBottomWidth: .5,
    borderColor: '#d9d9d9',
    padding: 10,
    marginBottom: 20,
  },
  imageCropper: {
    position: 'relative',
    overflow: 'hidden',
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  profilePic: {
    height: 120,
    width: 120
  },
  nameText: {
    fontFamily: 'Avenir Next',
    fontSize: 24,
    color: '#4A4A4A',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'right'
  },
  activeTrybesText: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    color: '#4A4A4A',
    textAlign: 'right',
    textDecorationLine: 'underline',
    marginBottom: 3
  },
  trybesText: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    color: '#4A4A4A',
    textAlign: 'right',
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