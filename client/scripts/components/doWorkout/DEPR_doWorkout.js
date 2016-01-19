//DEPR 1/19/16
/*
* @Author: vincetam
* @Date:   2015-09-14 11:24:06
* @Last Modified by:   VINCE
* @Last Modified time: 2016-01-19 09:34:51
*/

// 'use strict';

// var React = require('react-native');
// var doWorkoutActions = require('../../actions/doWorkoutActions');
// var doWorkoutStore = require('../../stores/doWorkoutStore');

// //Load components
// var ViewWorkoutBody = require('../../common/viewWorkoutComponents/viewWorkoutBody');
// var EditNotes = require('../../common/editWorkoutComponents/editNotes');
// var CompleteWorkoutButton = require('./completeWorkoutButton');

// var {
//   StyleSheet,
//   Text,
//   View,
//   TouchableHighlight,
//   TextInput
// } = React;

// var DoWorkout = React.createClass({
//   getInitialState: function() {
//     return {
//       workout: doWorkoutStore.getWorkout(),
//     };
//   },
//   componentDidMount: function() {
//     doWorkoutStore.addChangeListener(this._onChange);
//   },
//   componentWillUnmount: function() {
//     doWorkoutStore.removeChangeListener(this._onChange);
//   },
//   _onChange: function(){
//     this.setState({
//       workout: doWorkoutStore.getWorkout(),
//     });
//   },
//   render: function(){
//     var workout = this.state.workout;

//     return (
//       /* jshint ignore:start */
//       <View>
//         <Text>Filler</Text>
//         <Text>Filler</Text>
//         <Text>Filler</Text>
//         <Text>Filler</Text>
//         <ViewWorkoutBody workout={workout}/>
//         <EditNotes workout={workout} isEditable={true}/>
//         <CompleteWorkoutButton workout={workout}/>
//       </View>
//       /* jshint ignore:end */
//     );
//   }
// });

// module.exports = DoWorkout;
