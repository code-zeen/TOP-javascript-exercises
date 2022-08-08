const leapYears = function(year) {
  const leapYear = true;

  if (year % 400 == 0) {
    return leapYear;
  } else if (year % 4 == 0 && year % 100 != 0) {
    return leapYear;
  } else {
    return false;
  }
};

// better answer:

// const leapYears = function(year) {
// return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0 );
// };


// Do not edit below this line
module.exports = leapYears;

