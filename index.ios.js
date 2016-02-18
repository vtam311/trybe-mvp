'use strict';

require("babel/register");

var React = require('react-native');
var EventEmitter = require('EventEmitter');
var modalActions = require('./client/scripts/actions/modalActions');
var modalStore = require('./client/scripts/stores/modalStore');

//Load components
var TabBar = require('./client/scripts/components/tabBar');
var EditWorkoutModal = require('./client/scripts/components/editWorkout/editWorkoutModal');
var ViewWorkoutModal = require('./client/scripts/components/viewWorkout/viewWorkoutModal');
var EditInstructionsModal = require('./client/scripts/components/viewWorkout/editInstructionsModal');
var EditExerciseModal = require('./client/scripts/components/editWorkout/editExerciseModal/editExerciseModal');
var EditPartModal = require('./client/scripts/components/editWorkout/editPart/editPartModal');
var EditDateModal = require('./client/scripts/components/editWorkout/editPart/editDateModal');
var LogModal = require('./client/scripts/components/logModal/logModalNav');
var PostModal = require('./client/scripts/components/feed/postModal');
var Firebase = require('firebase');
var Auth0Lock = require('react-native-lock-ios');
var firebaseRef = new Firebase("https://trybe.firebaseio.com");

var lock = new Auth0Lock({clientId: "2AEubwoUnJd76NDkQRMl0LEITsoNlo5W", domain: "trybe.auth0.com"});
var FirebaseTokenGenerator = require("firebase-token-generator");

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} = React;

var RouteStack = {
  app: {
    component: TabBar
  }
};

var Trybe = React.createClass({
  getInitialState: function(){
    return {
      viewWorkoutModalVisible: false,
      editWorkoutModalVisible: false,
      instructionsModalVisible: false,
      exerciseModalVisible: false,
      partModalVisible: false,
      dateModalVisible: false,
      logModalVisible: false,
      postModalVisible: false,
      authData: firebaseRef.getAuth()
    };
  },
  componentWillMount: function() {
    this.rootNavListener = new EventEmitter();
  },
  componentDidMount: function() {
    modalStore.addChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      viewWorkoutModalVisible: modalStore.getViewWorkoutModalVisible(),
      editWorkoutModalVisible: modalStore.getEditWorkoutModalVisible(),
      instructionsModalVisible: modalStore.getInstructionsModalVisible(),
      exerciseModalVisible: modalStore.getExerciseModalVisible(),
      partModalVisible: modalStore.getPartModalVisible(),
      dateModalVisible: modalStore.getDateModalVisible(),
      logModalVisible: modalStore.getLogModalVisible(),
      postModalVisible: modalStore.getPostModalVisible(),
    });
  },
  renderScene: function(route, navigator){
    var Component = route.component;

    return (
      <Component
        rootNav={this.refs.rootNav}
        events={this.rootNavListener} />
    );
  },
  showLock: function() {
    lock.show({}, (err, profile, token) => {
      if (err) {
        console.log(err);
        return;
      }
      // firebase token: Firebase app configuration -> secrets
        var tokenGenerator = new FirebaseTokenGenerator('dzM08pcN5kg04o6M3azKU9ngYXQ86a6kaHAhWNbM');
        
        // use the token generator to create a new token with the userId
        var ref_token = tokenGenerator.createToken({ uid: profile.userId });
        var _this = this;
        firebaseRef.authWithCustomToken(ref_token, function(error, authData) {
          if (error) {
            console.log('Login Failed!');
          } else {
            _this.setState({authData: authData});
          }
        });
    });
  },
  render: function() {
    var login = (
      <View style={styles.loginContainer}>
        <TouchableHighlight style={styles.loginButton} onPress={this.showLock}>
          <Text>Login</Text>
        </TouchableHighlight>
      </View>);
    
    return !this.state.authData ? login : (
      /* jshint ignore:start */
      <View style={styles.container}>
      
        <Navigator
          ref="rootNav"
          initialRoute={RouteStack.app}
          renderScene={this.renderScene} />
        {this.state.viewWorkoutModalVisible ? <ViewWorkoutModal /> : null }
        {this.state.editWorkoutModalVisible ? <EditWorkoutModal /> : null }
        {this.state.instructionsModalVisible ? <EditInstructionsModal /> : null }
        {this.state.exerciseModalVisible ? <EditExerciseModal /> : null }
        {this.state.partModalVisible ? <EditPartModal /> : null }
        {this.state.dateModalVisible ? <EditDateModal /> : null }
        {this.state.logModalVisible ? <LogModal /> : null }
        {this.state.postModalVisible ? <PostModal /> : null }
      </View>
      /* jshint ignore:end */
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButton: {
    width:200,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('trybe', () => Trybe);
