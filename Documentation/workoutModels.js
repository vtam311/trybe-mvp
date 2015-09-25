var skillWorkout = {
  id: 24,
  username: 'John_Snow',
  trybe: 'Ryan Hurst\'s Muscle Up Program',
  day: 17,
  createdAt: '2015-06-28T02:16:44.000Z',
  type: 'Progressions',
  instructions: null,
  time: null,
  //Would an array of rounds be better?
  // rounds: [
  //   {
    //   name: 'Pull Ups',
    //   reps: 10,
    //   load: {units: 'lbs', val: null},
    //   hold: null,
    //   standard: {type: 'reps', value: 10},
    //   focusArea: {name: 'Strength', progression: 1},
    //   video: null
    // },
  //   {
  //     name: 'False Grip Hang',
  //     reps: null,
  //     load: {units: 'lbs', val: null},
  //     hold: 60,
  //     standard: {type: 'time', value: 60},
  //     focusArea: {name: 'Grip', progression: 3},
  //     video: null
  //   }
  // ],
  rounds: {
    numRounds: 5,
    repeat: true,
    round1: {
      exercise1: {
        name: 'Pull Ups',
        reps: 10,
        load: {units: 'lbs', val: null},
        hold: null,
        standard: {type: 'reps', value: 10},
        focusArea: {name: 'Strength', progression: 1},
        video: null
      },
      exercise2: {
        name: 'False Grip Hang',
        reps: null,
        load: {units: 'lbs', val: null},
        hold: 60,
        standard: {type: 'time', value: 60},
        focusArea: {name: 'Grip', progression: 3},
        video: null
      }
    }
  },
  origin: 23, //copied from workout id 23
  finalResult: {type: null, value: null}
};

var customWorkout = {
  id: 24,
  username: 'John_Snow',
  trybe: 'CF San Mateo Team Elite',
  day: 17,
  createdAt: '2015-06-28T02:16:44.000Z',
  type: 'Custom',
  parts: [
    {
      instructions:'Every 2 Minutes For As Long As Possible, Complete:',
      media: {
        title: 'Speed and Efficiency',
        url: 'www.youtube.com'
      },
      exercises: [
        {
          name: 'Rope Climb',
          reps: null,
          load: {units: 'lb', val: null},
          time: null,
          distance: {units: 'ft', val: 15},
          url: null
        },
        {
          name: 'Front Squats',
          reps: 2,
          load: {units: 'lb', val: 185},
          time: null,
          distance: null,
          url: null
        },
      ],
      notes:
        'Continue Adding 2 Reps to the Front Squat Each Interval. \n' +
        'Track number of minutes completed',
    }
  ],
  origin: 23, //copied from workout id 23
  finalResult: {type: 'Time', value: '00:16:23'}
};

var liftWorkout = {
  id: 24,
  username: 'John_Snow',
  trybe: 'Smolov\'s Squat Program',
  day: 17,
  createdAt: '2015-06-28T02:16:44.000Z',
  type: 'Lift',
  instructions: null,
  time: null,
  rounds: {
    numRounds: 5,
    repeat: false,
    round1: {
      exercise1: {
        name: 'Squats',
        reps: 5,
        load: {units: 'lbs', val: 185},
        hold: null,
        standard: {type: null, value: null},
        focusArea: {name: null, progression: null},
        video: null
      }
    },
    round2: {
      exercise1: {
        name: 'Squats',
        reps: 5,
        load: {units: 'lbs', val: 190},
        hold: null,
        standard: {type: null, value: null},
        focusArea: {name: null, progression: null},
        video: null
      }
    },
    round3: {
      exercise1: {
        name: 'Squats',
        reps: 5,
        load: {units: 'lbs', val: 195},
        hold: null,
        standard: {type: null, value: null},
        focusArea: {name: null, progression: null},
        video: null
      }
    },
    round4: {
      exercise1: {
        name: 'Front Squats',
        reps: 5,
        load: {units: 'lbs', val: 200},
        hold: null,
        standard: {type: null, value: null},
        focusArea: {name: null, progression: null},
        video: null
      }
    },
    round5: {
      exercise1: {
        name: 'Front Squats',
        reps: 5,
        load: {units: 'lbs', val: 205},
        hold: null,
        standard: {type: null, value: null},
        focusArea: {name: null, progression: null},
        video: null
      }
    },
  },
  origin: 23, //copied from workout id 23
  finalResult: {type: null, value: null}
};

var timedCircuitWorkout = {
  id: 24,
  username: 'John_Snow',
  trybe: 'Chris Spealler\'s CF Conditioning',
  day: 17,
  createdAt: '2015-06-28T02:16:44.000Z',
  type: 'Timed Circuit',
  instructions: null,
  time: null,
  rounds: {
    numRounds: 5,
    repeat: true,
    round1: {
      exercise1: {
        name: 'Pull Ups',
        reps: 15,
        load: {units: 'lbs', val: null},
        hold: null,
        standard: {type: null, value: null},
        focusArea: {name: null, progression: null},
        video: null
      },
      exercise2: {
        name: 'Thrusters',
        reps: 15,
        load: {units: 'lbs', val: 95},
        hold: null,
        standard: {type: null, value: null},
        focusArea: {name: null, progression: null},
        video: null
      }
    }
  },
  origin: 23, //copied from workout id 23
  finalResult: {type: 'Time', value: '8:38'}
};

var amrapWorkout = {
  id: 24,
  username: 'John_Snow',
  trybe: 'Chris Spealler\'s CF Conditioning',
  day: 17,
  createdAt: '2015-06-28T02:16:44.000Z',
  type: 'AMRAP',
  instructions: null,
  time: '00:20:00',
  rounds: {
    numRounds: null,
    repeat: true,
    round1: {
      exercise1: {
        name: 'Pull Ups',
        reps: 5,
        load: {units: 'lbs', val: null},
        hold: null,
        standard: {type: null, value: null},
        focusArea: {name: null, progression: null},
        video: null
      },
      exercise2: {
        name: 'Push ups',
        reps: 10,
        load: {units: 'lbs', val: null},
        hold: null,
        standard: {type: null, value: null},
        focusArea: {name: null, progression: null},
        video: null
      },
      exercise3: {
        name: 'Squats',
        reps: 15,
        load: {units: 'lbs', val: 95},
        hold: null,
        standard: {type: null, value: null},
        focusArea: {name: null, progression: null},
        video: null
      }
    }
  },
  origin: 23, //copied from workout id 23
  finalResult: {type: 'Rounds', value: '23'}
};
