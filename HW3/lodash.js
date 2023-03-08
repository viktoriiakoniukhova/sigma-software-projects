var _ = require("lodash");

// Task 1

function substractMaxMin(arr) {
  if (arr instanceof Array) {
    if (arr.length < 2) return 0;

    const maxValue = _.max(arr);
    const minValue = _.min(arr);

    return maxValue - minValue;
  } else return "Wrong data type passed";
}

console.log(substractMaxMin([1, 2, 3, -4]));
console.log(substractMaxMin([16]));

// Task 2

function getArrayOfWords(str, num) {
  if (typeof str === "string" && typeof num === "number") {
    const words = _.split(str, " ");
    return _.filter(words, (word) => word.length > num);
  } else return "Wrong data type passed";
}

console.log(getArrayOfWords("Hello you are awesome person", 5));

// Task 3

function checkEnding(str, strEnd) {
  if (typeof str === "string" && typeof strEnd === "string") {
    return _.endsWith(str, strEnd);
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
  return _.every(arr, (num) => Number.isInteger(num));
}

// Task 6

function difference(arr1, arr2) {
  if (arr1 instanceof Array && arr2 instanceof Array) {
    return _.difference(arr1, arr2);
  } else return "Wrong data type passed";
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));

// Task 11

function areStringsRotated(str1, str2) {
  if (typeof str1 === "string" && typeof str2 === "string") {
    const concatStr1 = _.concat(str1, str2);
    return str1.length == str2.length && _.indexOf(concatStr1, str2 != -1);
  } else return "Wrong data passed";
}

// Task 12

function recomposeArr(a, aSize, b, c) {
  if (
    a instanceof Array &&
    b instanceof Array &&
    c instanceof Array &&
    typeof aSize === "number"
  ) {
    for (let i = 0; i < aSize / 2; i++) {
      const res = findMinDiffElems(a, a.length);

      b.push(res[0]);
      c.push(res[1]);

      if (a[i] === res[0]) {
        _.splice(a, i, 1);
      }
      if (a[i] === res[1]) {
        _.splice(a, i, 1);
      }
    }
    return [b, c];
  } else return "Wrong data passed";
}

function findMinDiffElems(arr, n) {
  let diff = Number.MAX_VALUE;
  let elem1 = Number.MAX_VALUE,
    elem2 = Number.MAX_VALUE;

  for (let i = 0; i < n - 1; i++)
    for (let j = i + 1; j < n; j++)
      if (Math.abs(arr[i] - arr[j]) < diff) {
        diff = Math.abs(arr[i] - arr[j]);
        [elem1, elem2] = [arr[i], arr[j]];
      }
  return [elem1, elem2].sort();
}

console.log(recomposeArr([0, 1, 3, 5, 6, -2], 6, [], []));

// Task 17

function rearrangeArray(arr) {
  if (arr instanceof Array) {
    const sortedArr = quickSort(arr);
    const resultArr = Array(arr.length);
    let i = 0;

    _.forEach(sortedArr, (elem, idx) => {
      if (idx % 2 === 0) resultArr.splice(i, 1, elem);
      else {
        resultArr.splice(arr.length - 1 - i, 1, elem);
        i++;
      }
    });
    return resultArr;
  } else return "Wrong data type passed";
}

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];

  const left = [];
  const right = [];

  _.forEach(arr, (elem) => {
    if (elem < pivot) left.push(elem);
    else if (elem > pivot) right.push(elem);
  });

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(rearrangeArray([0, 5, 7, 2, 8, 3]));
