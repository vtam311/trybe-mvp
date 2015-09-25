/*
* @Author: VINCE
* @Date:   2015-09-25 11:45:27
* @Last Modified by:   VINCE
* @Last Modified time: 2015-09-25 14:38:51
*/

'use strict';

var React = require('react-native');
var logStore = require('../../stores/logStore');
var logActions = require('../../actions/logActions');

//Load components
var LogCard = require('./logCard');

var {
  StyleSheet,
  Text,
  View,
  ListView
} = React;

var Log = React.createClass({
  getInitialState: function(){
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
    };
  },
  componentDidMount: function(){
    logStore.addChangeListener(this._onChange);
    logActions.getCards();
  },
  componentWillUnmount: function(){
    logStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    var cards = logStore.getCards();
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(cards)
    });
  },

  renderRow: function(card){
    return (
      /* jshint ignore:start */
      <View>
        <LogCard card={card}/>
      </View>
      /* jshint ignore:end */
    );
  },
  render: function(){
    /* jshint ignore:start */
    return (
      <View style={styles.container}>
        <ListView dataSource={this.state.dataSource} renderRow={this.renderRow} />
      </View>
      );
    /* jshint ignore:end */
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

module.exports = Log;
