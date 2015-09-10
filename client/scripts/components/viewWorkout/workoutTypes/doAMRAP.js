//Not using since 9/4/15

// 'use strict';

// var React = require('react-native');

// //Load components
// var Exercise = require('../viewExercise');

// var {
//   StyleSheet,
//   Text,
//   View,
// } = React;

// var AMRAP = React.createClass({

//   render: function(){
//     //The round is an array of exercises
//     var roundElements = [];
//     var workout = this.props.workout;
//     var rounds = workout.rounds;

//     var renderRound = function(rounds) {
//       switch(workout.type) {
//         case 'Custom':
//           var instructions = <Text>{workout.instructions}</Text>;
//           roundElements.push(instructions);
//           break;
//         case 'AMRAP':
//           //AMRAP workout obj only has 1 round
//           var currRound = rounds.round1;
//           titleRound(currRound);
//           renderExercisesOfRound(currRound);
//           break;
//         case 'Lift':
//           //Lift workout obj uses rounds as sets
//         case 'Progressions':
//         case 'Timed Circuit':
//           for(let i = 1; i <= rounds.numRounds; i++) {
//             roundElements[i] = [];
//             var currRound;
//             //If workout repeats rounds, set currRound to round1
//             if(rounds.repeat) {
//               currRound = rounds['round1'];
//             } else {
//               currRound = rounds['round' + i];
//             }
//             titleRound(currRound, i);
//             renderExercisesOfRound(currRound, i);
//           }
//           break;
//         default:
//           console.log('Unrecognized workout type');
//       }
//     };

//     var titleRound = function(round, roundNum){
//       /* jshint ignore:start */
//       switch(workout.type) {
//         case 'AMRAP':
//           var roundHeader = <Text>Each Round</Text>;
//           roundElements.push(roundHeader);
//           break;
//         case 'Lift':
//           var setHeader = <Text>Set {roundNum}</Text>;
//           roundElements[roundNum].push(setHeader);
//           break;
//         case 'Progressions':
//         case 'Timed Circuit':
//           var roundHeader = <Text>Round {roundNum}</Text>;
//           roundElements[roundNum].push(roundHeader);
//           break;
//         default:
//           console.log('Unrecognized workout type');
//       }
//       /* jshint ignore:end */
//     };

//     var renderExercisesOfRound = function(round, roundNum) {
//       /* jshint ignore:start */
//       for(var ex in round) {
//         var currExercise = round[ex];
//         var exerciseElement = <Exercise exercise={currExercise}/>;

//         switch(workout.type) {
//           case 'AMRAP':
//             roundElements.push(exerciseElement);
//             break;
//           case 'Lift':
//           case 'Progressions':
//           case 'Timed Circuit':
//             roundElements[roundNum].push(exerciseElement);
//             break;
//           default:
//             console.log('Unrecognized workout type');
//         }
//       }
//       /* jshint ignore:end */
//     };

//     renderRound(rounds);

//     return (
//       /* jshint ignore:start */
//       <View>
//         {roundElements}
//       </View>
//       /* jshint ignore:end */
//     );
//   }
// });

// module.exports = AMRAP;
