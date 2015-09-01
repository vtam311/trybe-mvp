'use strict';

var copyObjectHelper = function(obj) {
  return JSON.parse(JSON.stringify(obj));
};

module.exports = copyObjectHelper;
