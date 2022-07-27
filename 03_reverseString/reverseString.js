const reverseString = function(str) {
  let result = "";
  for (let i = 1; i <= str.length; i++) {
    result += str.substr(str.length - i, 1)
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
