'use strict';

require("babel/register");

var React = require('react-native');

//Load components
var TabBar = require('./client/scripts/components/tabBar');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity, //need?
  Animated,
  Dimensions
} = React;

//Gets device height for animating app
var {
  height: deviceHeight
} = Dimensions.get('window');

// Keeping for reference
var TopModal = React.createClass({
  getInitialState: function() {
    return { offset: new Animated.Value(deviceHeight) }
  },
  componentDidMount: function() {
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: 0
    }).start();
  },
  closeModal: function() {
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: deviceHeight
    }).start(this.props.closeModal);
  },
  render: function() {
    return (
        <Animated.View style={[styles.modal, styles.flexCenter, {transform: [{translateY: this.state.offset}]}]}>
          <TouchableOpacity onPress={this.closeModal}>
            <Text style={{color: '#FFF'}}>Close Menu</Text>
          </TouchableOpacity>
        </Animated.View>
    )
  }
});

//keeping for reference
var App = React.createClass({
    render: function() {
      return (
        <View style={styles.flexCenter}>
          <TouchableOpacity onPress={this.props.openModal}>
            <Text>Open Modal</Text>
          </TouchableOpacity>
        </View>
      )
    }
});

var RouteStack = {
  app: {
    component: TabBar
  }
};

var Trybe = React.createClass({
  getInitialState: function(){
    return {
      modalVisible: false
    };
  },
  openModal: function(){
    this.setState({modalVisible: true});
  },
  renderScene: function(route, navigator){
    var Component = route.component;

    return (
      <Component rootNav={this.refs.rootNav} openModal={this.openModal}/>
    );
  },

  render: function() {
    return (
      /* jshint ignore:start */
      <View style={styles.container}>
        <Navigator
          ref="rootNav"
          initialRoute={RouteStack.app}
          renderScene={this.renderScene} />
        {this.state.modalVisible ? <TopModal closeModal={() => this.setState({modalVisible: false}) }/> : null }
      </View>
      /* jshint ignore:end */
    );
  }
});
        // <Text>Hi</Text>

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    backgroundColor: 'rgba(0,0,0,.8)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
});

AppRegistry.registerComponent('trybe', () => Trybe);
