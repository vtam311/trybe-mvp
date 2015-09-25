/*
* @Author: VINCE
* @Date:   2015-09-25 11:53:15
* @Last Modified by:   VINCE
* @Last Modified time: 2015-09-25 11:56:53
*/

'use strict';

var React = require('react-native');
var logActions = require('../../actions/logActions');

var {
  StyleSheet,
  Text,
  View,
} = React;

var LogCardHeader = React.createClass({

  render: function(){
    //TO DO: get library to convert createdAt to 'x hours ago'
    var when = this.props.when;

    return (
      /* jshint ignore:start */
      <View>
        <Text>{when}</Text>
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = LogCardHeader;
