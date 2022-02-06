const assertEqual = function(actual, expected) {
  if(actual.toString() === expected.toString()) {
    console.log(' Assertion Passed: '+ actual + ' === '  + expected)
    return true
  }else{
    console.log(' Assertion Faild: '+ actual + ' !== '  + expected)

    return false
  }

};

assertEqual(['1',2],['1',2])