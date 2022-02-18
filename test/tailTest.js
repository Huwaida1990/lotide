const assert = require("chai").assert;
const tail = require('../tail.js');

describe("#tail",()=>{
  it("return [ 2, 3 ] for [ 1, 2, 3 ]",()=>{
    assert.strictEqual(tail([1,2,3]).toString(),[2,3].toString())
  })
})