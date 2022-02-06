const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(" Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log(" Assertion Faild: " + actual + " !== " + expected);
  }
};

const eqArrays = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) {
    return false;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      const elem1 = firstArray[i];
      const elem2 = secondArray[i];
      if (Array.isArray(elem1) && Array.isArray(elem2)) {
        if (!eqArrays(elem1, elem2)) return false;
      } else if (typeof elem1 === "object" && typeof elem2 === "object") {
        if (JSON.stringify(elem1) !== JSON.stringify(elem2)) return false;
      } else if (elem1 !== elem2) {
        return false;
      }
    }
  }
  return true;
};

const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (
        typeof object1[key] === "object" &&
        typeof object2[key] === "object"
      ) {
        if (!eqObjects(object1[key], object2[key])) {
          return false;
        }
      } else if (!(object1[key] === object2[key])) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertObjectsEqual = (actual, expected) => {
  if (eqObjects(actual, expected)) {
    console.log("✅✅✅ Assertion Passed:", actual, "===", expected);
  } else {
    console.log("❌❌❌ Assertion Failed:", actual, "!==", expected);
  }
};
