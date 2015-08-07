var skillWorkout = {
  id: 24,
  username: 'John_Snow',
  trybe: 'Ryan Hurst\'s Muscle Up Program',
  day: 17,
  type: 'Progressions',
  instructions: null,
  time: null,
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
  type: 'Custom',
  instructions:
    'Every 2 minutes for as long as possible complete: \n' +
      '15-ft. rope climbs, 2 ascents \n' +
      '185-lb. front squats, 2 reps \n' +
    'Continue adding 2 reps to the front squat each interval for as long as you are able. \n' +
    'Track number of minutes completed',
  time: null,
  rounds: {
    numRounds: null,
    repeat: null,
    round1: {
      exercise1: {
        name: null,
        reps: null,
        load: {units: 'lbs', val: null},
        hold: null,
        standard: {type: null, value: null},
        focusArea: {name: null, progression: null},
        video: null
      }
    }
  },
  origin: 23, //copied from workout id 23
  finalResult: {type: 'Time', value: '00:16:00'}
};

var liftWorkout = {
  id: 24,
  username: 'John_Snow',
  trybe: 'Smolov\'s Squat Program',
  day: 17,
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
        load: {units: 'lbs', val: 175},
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
        load: {units: 'lbs', val: 185},
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
        hold: 60,
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
        name: 'Air Squats',
        reps: 15,
        load: {units: 'lbs', val: null},
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