/*
* @Author: VINCE
* @Date:   2015-09-25 11:51:18
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-10 16:05:55
*/

'use strict';

var React = require('react-native');
var logActions = require('../../actions/logActions');

//Load components
var PartsView = require('./partsView');
var DayScene = require('./dayScene');

var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} = React;

var LogCard = React.createClass({
  handlePress: function(){
    var sceneName = this.props.workout.date.toString().slice(4,15);
    this.props.goToScene(DayScene, sceneName, this.props.workout);
  },
  render: function(){
    var workout = this.props.workout;
    var dateString = workout.date.toString();
    var day = dateString.slice(0,3).toUpperCase();
    var month = dateString.slice(4,7);
    var dateNum = dateString.slice(8,10);

    return (
      /* jshint ignore:start */
      <TouchableHighlight
        onPress={() => this.handlePress()}
        underlayColor='rgba(155,155,155,.4)'>
        <View style={styles.container}>
          <View style={styles.dateContainer}>
            <Text style={[styles.dateText, {fontSize: 11, marginBottom: 6, color: '#A79D93'}]}>{day}</Text>
            <Text style={[styles.dateText, {fontSize: 12}]}>{month}</Text>
            <Text style={[styles.dateText, {fontSize: 15}]}>{dateNum}</Text>
          </View>
          <View style={styles.workoutContent}>
            <PartsView
              workout={workout}
              showNotes={true}
              goToScene={this.props.goToScene} />
          </View>
          <View style={styles.disclosureIndicatorContainer}>
           <Image source={require('image!disclosureIndicator')} />
          </View>
        </View>
      </TouchableHighlight>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: .5,
    borderBottomWidth: .5,
    borderColor: '#979797',
    marginBottom: 10,
  },
  dateContainer: {
    flex: .15,
    flexDirection: 'column',
    justifyContent: 'center', //not working, RN bug
    alignItems: 'center',
    marginTop: 12 //until justifyContent works, use this
  },
  dateText: {
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    color: '#8D867E',
  },
  workoutContent: {
    flex: .75,
    flexDirection: 'column'
  },
  disclosureIndicatorContainer: {
    flex: .1,
    flexDirection: 'column',
    justifyContent: 'center', //not working, RN bug
    alignItems: 'center',
    marginTop: 12, //until justifyContent works, use this,
  },
});

module.exports = LogCard;
