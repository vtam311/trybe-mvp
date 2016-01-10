/*
* @Author: VINCE
* @Date:   2015-09-25 11:53:15
* @Last Modified by:   vincetam
* @Last Modified time: 2016-01-10 15:09:26
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
    var dateDescr = Date(this.props.date).slice(0,10);

    return (
      /* jshint ignore:start */
      <View>
        <Text>{dateDescr}</Text>
      </View>
      /* jshint ignore:end */
    );
  }
});

module.exports = LogCardHeader;
