// const assertEqual = function(actual, expected) {
//   if(actual.toString() === expected.toString()) {
//     console.log(' Assertion Passed: '+ actual + ' === '  + expected)
//     return true
//   }else{
//     console.log(' Assertion Faild: '+ actual + ' !== '  + expected)

//     return false
//   }

// };

// assertEqual(['1',2],['1',2])
const without = function (arry1,arry2){
  var  result =[];
  for(let i =0 ; i<arry1.length;i++){

    if( !arry2.includes(arry1[i])) result.push(arry1[i])
  }
  
  return console.log(result)
}
without([1,3,5],[1])