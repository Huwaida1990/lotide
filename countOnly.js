const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(' Assertion Passed: '+ actual + ' === '  + expected)
  }else{
    console.log(' Assertion Faild: '+ actual + ' !== '  + expected)
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {

  let resulte = {}
  for(let item in itemsToCount) {
    if(itemsToCount[item]) {
      const existCount = getCount(allItems,item);
      if(existCount) {
        resulte[item] = existCount;
      }
    }
  }
  return resulte
}

const getCount = function (array,key) {
  let count = 0;
  for (let el of array) {
    if(el == key) {
      count += 1
    }
  }
  return count
}
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const obj = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }

console.log(countOnly(firstNames,obj));