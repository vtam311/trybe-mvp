var renderTime = function(time) {
  var result = '';
  var hour = time.slice(0,2);
  var min = time.slice(3,5);
  var sec = time.slice(6,8);

  //Determine relevant units, delete irrelevant ones
  if(hour === '00') hour = null;
  if(min === '00') min = null;
  if(sec === '00') sec = null;

  //For relevant units, remove zeroes
  if(hour && hour.charAt(0) === '0') hour = hour.charAt(1);
  if(min && min.charAt(0) === '0') min = min.charAt(1);
  if(sec && sec.charAt(0) === '0') sec = sec.charAt(1);

  //Create result text
  if(hour) result += hour + ' hour(s)';
  if(min) result += min + 'min';
  if(sec) result += sec + 'sec';

  return result;
};

module.exports = renderTime;