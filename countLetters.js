// const assertEqual = function(actual, expected) {
//   if(actual === expected) {
//     console.log(' Assertion Passed: '+ actual + ' === '  + expected)
//   }else{
//     console.log(' Assertion Faild: '+ actual + ' !== '  + expected)
//   }
// };

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);


const countLetters = function (word) {
  let result = {};
  for(let el of word){
    if (el in result){
      result[el] +=1
    }else{
      result[el] = 1
    }
  }
  return result
}

console.log(countLetters('LHL'))