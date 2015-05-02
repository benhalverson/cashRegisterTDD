'use strict';
var assert = require("assert"); // node.js core module
var Cash = require('../cash.js'); // cash module

describe('Cash Register', function(){
  describe('module Cash', function(){
    it('should have a getChange Method', function(){
      assert.equal(typeof Cash, 'object');
      assert.equal(typeof Cash.getChange, 'function');
    });
    it('getChange(100,300) should equal [25, 10, 5]', function(){
      assert.deepEqual(Cash.getChange(100,300), [25, 10, 5]);
    })
  });
});
