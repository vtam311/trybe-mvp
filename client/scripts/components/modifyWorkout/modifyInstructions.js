//Deprecated as of 12/27/15

// 'use strict';

// var React = require('react-native');
// var modifyWorkoutStore = require('../../stores/modifyWorkoutStore');
// var modifyWorkoutActions = require('../../actions/modifyWorkoutActions');

// var {
//   View,
//   StyleSheet,
//   Text,
//   TextInput
// } = React;


// var ModifyInstructions = React.createClass({
//   saveInstructions: function(text){
//     //Opting to not use modifyWorkoutActions, as onChangeText continually
//     //updates state of store as user inputs text, which triggers
//     //refresh & interrupts user text input if typing quickly
//     this.props.part.instructions = text;
//   },
//   render: function(){
//     var part = this.props.part;
//     var isEditable = this.props.isEditable;

//     return (
//       /* jshint ignore:start */
//       <TextInput
//         style={{height: 100}}
//         multiline={true}
//         editable={isEditable}
//         value={part.instructions}
//         onChangeText={(text) => this.saveInstructions(text)}/>
//       /* jshint ignore:end */
//     );
//   },
// });

// module.exports = ModifyInstructions;
