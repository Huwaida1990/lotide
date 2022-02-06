const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    results[sentence[i]] = i;
  }

  return results;
};
console.log(letterPositions("hello"));
