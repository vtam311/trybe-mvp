/*
* @Author: VINCE
* @Date:   2015-09-25 11:53:15
* @Last Modified by:   VINCE
* @Last Modified time: 2015-09-25 14:09:33
*/

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
} = React;

var LogCardHeader = React.createClass({

  render: function(){
    //TO DO: get library to convert createdAt to 'x hours ago'
    var createdAt = this.props.createdAt;

    return (
      /* jshint ignore:start */
      <View>
        <Text>{createdAt}</Text>
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = LogCardHeader;
