const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

console.log(map([1, 2, 3, 4, 5, 6, 7], (num) => num * 2));
