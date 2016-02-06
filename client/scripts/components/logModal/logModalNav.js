/*
* @Author: vincetam
* @Date:   2016-02-06 11:35:45
* @Last Modified by:   vincetam
* @Last Modified time: 2016-02-06 13:03:25
*/

'use strict';

var React = require('react-native');
var editWorkoutStore = require('../../stores/editWorkoutStore');
var editWorkoutActions = require('../../actions/editWorkoutActions');
var logModalStore = require('../../stores/logModalStore');
var logModalActions = require('../../actions/logModalActions');
var modalActions = require('../../actions/modalActions');
var viewWorkoutActions = require('../../actions/viewWorkoutActions');
var logActions = require('../../actions/logActions');

//Load components
var LogResults = require('./logModal');
//notes page

var {
  Navigator,
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} = React;

var RouteStack = {
  app: {
    name: 'Log Results',
    component: LogResults,
  }
};

//Gets device height for animating modal
var {
  height: deviceHeight
} = Dimensions.get('window');

//Gist: This component gets the target part's result from editWorkoutStore,
//and copies and initializes that result into logModalStore.
//Any edits are updated into logModalStore, and on press of 'Done',
//the updated copy overwrites the target result in editWorkoutStore
var LogModalNav = React.createClass({
  getInitialState: function(){
    return {
      offset: new Animated.Value(deviceHeight),
      partIdx: editWorkoutStore.getTargetPartIdx(),
      result: editWorkoutStore.getTargetPartResult(),
      notes: editWorkoutStore.getTargetPartNotes(),
    };
  },
  componentWillMount: function() {
    logModalStore.addChangeListener(this._onChange);

    //initialize logModalStore with the result and notes
    logModalActions.initializeResult(this.state.result);
    logModalActions.initializeNotes(this.state.notes);
  },
  componentWillUnmount: function() {
    logModalStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      result: logModalStore.getResult(),
      notes: logModalStore.getNotes()
    });
  },
  componentDidMount: function() {
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: 0
    }).start();
  },
  goToScene: function(component, name){
    this.refs.logModalNav.push({
      component: component,
      name: name
    });
  },
  resetRoute: function(route){
    this.refs.logModalNav.popToTop();
  },
  renderScene: function(route, navigator){
    var Component = route.component;

    return (
      <Component
        goToScene={this.goToScene}
        result={this.state.result}
        notes={this.state.notes} />
    );
  },
  render: function() {
    return (
      /* jshint ignore:start */
      <Animated.View style={[styles.modal, styles.flexCenter, {transform: [{translateY: this.state.offset}]}]}>
        <View style={styles.container}>
          <Navigator
            ref="logModalNav"
            initialRoute={RouteStack.app}
            renderScene={this.renderScene}
            sceneStyle={styles.scene}
            navigationBar={
              <Navigator.NavigationBar
                style={styles.navBar}
                routeMapper={NavBarRouteMapper} />
            } />
        </View>
      </Animated.View>
      /* jshint ignore:end */
    );
  }
});

var NavBarRouteMapper = {
   LeftButton: function(route, navigator, index, navState) {
    if(route.name === 'Log Results'){
      return (
        <TouchableOpacity
          style={styles.navBarComponentContainer}
          onPress={ () => modalActions.closeLogModal()}>
          <Text style={styles.navBarSideText}>Cancel</Text>
        </TouchableOpacity>
      );
    }

    if(route.name === 'Workout Notes'){
      return (
        <View style={styles.navBarComponentContainer}>
          <Image
            style={{height: 18, width: 10}}
            source={ require('image!backArrowGreen') } />
          <Text style={styles.navBarSideText}>Results</Text>
        </View>
      );
    }
  },

  RightButton: function(route, navigator, index, navState) {
      var handleDonePress = function(){
        //TO DO: use data from logModalStore
        // editWorkoutActions.savePartResult(this.state.result);
        // editWorkoutActions.savePartNotes(this.state.notes);
        // viewWorkoutActions.setPartIsLoggedTrue(this.state.partIdx);
        // logActions.addWorkoutPart(this.state.workout, this.state.partIdx);
        modalActions.closeLogModal();
      };
      return (
        <TouchableOpacity
          onPress={() => handleDonePress()}
          style={styles.navBarComponentContainer} >
          <Text style={styles.navBarSideText}>Done</Text>
        </TouchableOpacity>
      );
  },

  Title: function(route, navigator, index, navState) {
    return (
      /* jshint ignore:start */
      <View style={styles.navBarComponentContainer}>
        <Text style={styles.navBarTitleText}>{route.name}</Text>
      </View>
      /* jshint ignore:end */
    );
  },
};

var styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    paddingBottom: 100,
    backgroundColor: 'rgba(155, 155, 155, 0.4)',
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    height: 450,
    width: 340,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 3,
    shadowColor: '#9B9B9B',
    shadowOpacity: 8,
  },
  scene: {
    flex: 1,
    paddingTop: 64, //offset navbar from covering scene
  },
  navBar: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    borderBottomWidth: .5,
    borderBottomColor: 'rgba(155, 155, 155, 0.7)',
  },
  navBarComponentContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30
  },
  navBarTitleText: {
    fontFamily: 'Avenir Next',
    fontSize: 17,
    fontWeight: '500',
    color: '#4A4A4A'
  },
  navBarSideText: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    fontWeight: '500',
    color: '#4DBA97',
  },
});

module.exports = LogModalNav;
