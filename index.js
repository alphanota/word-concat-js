const words = require("./words.js");

const numWords = words.length;

const randomIntRange = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomInt = function(max) {
  const min = 0;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//ary = the list to sample from
// n = number of elements to sample
// returns : an array with the sample elements
const sampleNoReplacement = function(ary, aryLength, n) {
  const pickedElements = [];
  for (i = 0; i < n; i++) {
    const element = ary[randomInt(aryLength)];
    pickedElements.push(element);
  }
  return pickedElements;
};

const validateNumber = function(value) {
  if (typeof value != "number") {
    throw new TypeError("value should be an number, actual: " + value);
  }
  if (!(value === parseInt(value, 10))) {
    throw new TypeError("value should be an integer");
  }
  if (value < 1) {
    throw new RangeError(
      "value should be a positive nonzero number, actual: " + value
    );
  }
};

const validateRanges = function(min, max) {
  validateNumber(min);
  validateNumber(max);

  if (min > max) {
    throw new RangeError(
      "min value must be greater than max value, actualmin: " +
        min +
        ", actual max: " +
        max
    );
  }
};

const generate = function(
  wordlength = 1,
  minNum = 1,
  maxNum = 1000,
  delim = "."
) {
  validateNumber(wordlength);
  validateNumber(numWords);
  validateRanges(minNum, maxNum);
  pickedElements = sampleNoReplacement(words, numWords, wordlength);
  randomNumber = randomIntRange(minNum, maxNum);
  pickedElements.push(String(randomNumber));
  concatElements = pickedElements.join(delim);
  return concatElements;
};

module.exports = generate;
