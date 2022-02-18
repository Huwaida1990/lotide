const assert = require("chai").assert
const middle = require('../middle');

describe("#middle",() =>{
  it("return [ ] for [ '1' ] or [ 2, 3 ] ",()=>{
    assert.strictEqual(middle([ 3 ]).toString(),[].toString())
  })
  it('return [ 3 ] for [ 1 ,3 ,5 ]',()=>{
    assert.strictEqual(middle([1,3,5]).toString() ,[3].toString() )
  })
  it('return [ 3, 5 ] for [ 1 ,3 ,5 ,6 ]',()=>{
    assert.strictEqual(middle([1,3,5,6]).toString() ,[3,5].toString() )
  })

})