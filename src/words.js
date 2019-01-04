var fs = require("fs");
module.exports = fs
  .readFileSync("words.txt")
  .toString()
  .split("\n");
