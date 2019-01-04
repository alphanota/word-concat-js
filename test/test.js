const { expect } = require("chai");
const generate = require("../index.js");

var assert = require("assert");
describe("generate", function() {
  describe("default behavior", function() {
    it("should return a single words concatenated with an number  when there are no arguments", function() {
      const word = generate();
      const ary = word.split(".");
      assert.equal(ary.length, 2);
    });
  });
  describe("with wordlength of 2", function() {
    it("should return two words concatted with an number  when there are no arguments", function() {
      const word = generate((wordlengh = 2));
      const ary = word.split(".");
      assert.equal(ary.length, 3);
    });
  });

  describe("with illegal wordlength of -2", function() {
    it("should throw error", function() {
      expect(function() {
        generate((wordlengh = -2));
      }).to.throw("value should be a positive nonzero number, actual: -2");
    });
  });
});
