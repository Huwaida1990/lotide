const assertEqual = require('./assertEqual');


const eqArrays = function (array1, array2) {
  if(array1.toString() == array2.toString()) return true;
  return false
};
assertEqual(1,1)

module.exports = eqArrays
