'use strict';
var assert = require("assert"); // node.js core module
var Cash = require('../cash.js'); // cash module

describe('Cash Register', function(){
  describe('module Cash', function(){
    it('should have a getChange Method', function(){
      assert.equal(typeof Cash, 'object');
      assert.equal(typeof Cash.getChange, 'function');
    });
    it('getChange(210,300) should equal [50,20,20]', function(){
        assert.deepEqual(Cash.getChange(210,300), [50, 20, 20]);
    });

    it('getChange(486,1000) should equal [500, 10, 2, 2]', function(){
        assert.deepEqual(Cash.getChange(486,1000), [500, 10, 2, 2]);
    });

    it('getChange(1487,10000) should equal [5000, 2000, 1000, 500, 10, 2, 1 ]', function(){
    assert.deepEqual(Cash.getChange(1487,10000), [5000, 2000, 1000, 500, 10, 2, 1 ]);
    });

    // try to force an error:
    it('getChange("random","str") to return [] (empty array)', function(){
    // assert.throw(C.getChange("random","str"), Error, "totalPayable and cashPaid MUST both be numbers");
    assert.deepEqual(Cash.getChange("random","str"), []);

});

  });
});
