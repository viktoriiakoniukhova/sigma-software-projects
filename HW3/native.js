// Task 1

function substractMaxMin(arr) {
  if (arr instanceof Array) {
    if (arr.length < 2) return 0;

    const maxValue = Math.max(...arr);
    const minValue = Math.min(...arr);

    return maxValue - minValue;
  } else return "Wrong data type passed";
}

console.log(substractMaxMin([1, 2, 3, -4]));
console.log(substractMaxMin([16]));

// Task 2

function getArrayOfWords(str, num) {
  if (typeof str === "string" && typeof num === "number") {
    const words = str.split(" ");
    return words.filter((word) => word.length > num);
  } else return "Wrong data type passed";
}

console.log(getArrayOfWords("Hello you are awesome person", 5));

// Task 3

function checkEnding(str, strEnd) {
  if (typeof str === "string" && typeof strEnd === "string") {
    return str.endsWith(strEnd);
  } else return "Wrong data type passed";
}

// Task 4

function getAverages(arr) {
  if (arr instanceof Array && onlyIntegers(arr)) {
    if (arr.length < 2) return 0;
    const averages = [];

    for (let i = 0; i < arr.length - 1; i++) {
      averages.push((arr[i] + arr[i + 1]) / 2);
    }

    return averages;
  } else return "Wrong data type passed";
}

function onlyIntegers(arr) {
  return arr.every((num) => Number.isInteger(num));
}

// Task 5.1

function countVowels(str) {
  if (typeof str === "string") {
    return str.match(/[aeiou]/gi).length;
  } else return "Wrong data type passed";
}

console.log(countVowels("Celebration"));

// Task 5.2

function removeABC(str) {
  if (typeof str === "string") {
    return str.match(/[abc]/gi) ? str.replace(/[abc]/gi, "") : null;
  } else return "Wrong data type passed";
}

console.log(removeABC("hello world!"));

// Task 6

function difference(arr1, arr2) {
  if (arr1 instanceof Array && arr2 instanceof Array) {
    const uniqueArr1 = arr1.filter((el) => arr2.indexOf(el) === -1);
    const uniqueArr2 = arr2.filter((el) => arr1.indexOf(el) === -1);

    return uniqueArr1.concat(uniqueArr2);
  } else return "Wrong data type passed";
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));

// Task 7

function reverseObject(obj) {
  if (typeof obj === "object") {
    let reversedObject = {};
    for (let key in obj) {
      reversedObject[obj[key]] = key;
    }
    return reversedObject;
  } else return "Wrong data type passed";
}

// Task 8

function calculateDifference(obj, insurenceNum) {
  if (
    typeof obj === "object" &&
    typeof insurenceNum === "number" &&
    Object.keys(obj).length !== 0
  ) {
    const sum = Object.values(obj).reduce((a, b) => a + b, 0);

    return sum > insurenceNum
      ? sum - insurenceNum
      : "Sum price is less than insurence";
  } else return "Wrong data passed";
}

console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));
console.log(calculateDifference({ "baseball bat": 20 }, 5));
