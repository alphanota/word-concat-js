var fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname, "words.txt");

module.exports = fs
  .readFileSync(filepath)
  .toString()
  .split("\n");
