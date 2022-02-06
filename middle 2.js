
// AssertEqual
const assertEqual = function(actual, expected) {
  if(actual.toString() === expected.toString()) {
    console.log(' Assertion Passed: '+ actual + ' === '  + expected)
    return true
  }else{
    console.log(' Assertion Faild: '+ actual + ' !== '  + expected)
    return false
  }

};

// assertEqual(['1',2],['1',2])


// eqArrays
const eqArrays = function(array1,array2){
  console.log(array1.toString());
  if(array1.toString() == array2.toString()){
    return true
  }else {
    return false
  }

}



// middle Function
const middle = function(array) {

  if(array.length <= 2) {
    return []
  }
  // The arry lenth more than 2

  if(array.length % 2 ) {
    // This Condetion work for odd Lenght 

    // get index of middle element
    const index = (array.length + 1) /2;
    return [array[index - 1]]

  }else {
    // This Condetion work for even Lenght 
    // get index of middle element
    const index = (array.length) /2;
    return [array[index -1 ], array[index]]
  }

}
const firstName = 'mostfa';

const obj = {
  firstName : firstName,
  lastName : "ahmed"
}

obj['age'] 

console.log(obj.hasOwnProperty("age"));

/*
  boolean => true or false
  string  => "someting inside Qutes"
  number. => number value
  object  => { key : value}
  array   => [indexs]
*/ 
[1,2,3,4]
var planetMoons = {
  mercury: 0,
  venus: 0,
  earth: 1,
  mars: 2,
  jupiter: 67,
  saturn: 62,
  uranus: 27,
  neptune: 14
};

for(let planet in planetMoons) {
  const numberOfMoons  = planetMoons[planet]
  // console.log("Planet: " + planet + ", # of Moons: "+ numberOfMoons);
}