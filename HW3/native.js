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

// Task 9

function doesBrickFit(a, b, c, w, h) {
  if (
    typeof a === "number" &&
    typeof b === "number" &&
    typeof c === "number" &&
    typeof w === "number" &&
    typeof h === "number"
  ) {
    return (a <= h && b <= w) || (a <= h && c <= w);
  } else return "Wrong data passed";
}

console.log(doesBrickFit(1, 1, 1, 1, 1));
console.log(doesBrickFit(1, 2, 1, 1, 1));
console.log(doesBrickFit(1, 2, 2, 1, 1));

// Task 10

function splitString(str) {
  if (typeof str === "string") {
    return str.split("\\").pop().split(".").shift();
  } else return "Wrong data passed";
}

console.log(splitString("c:\\WebServers\\home\\testsite\\www\\myfile.txt"));

// Task 11

function areStringsRotated(str1, str2) {
  if (typeof str1 === "string" && typeof str2 === "string") {
    const concatStr1 = str1 + str1;
    return str1.length == str2.length && concatStr1.indexOf(str2) != -1;
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
        a.splice(i, 1);
      }
      if (a[i] === res[1]) {
        a.splice(i, 1);
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

// Task 13

function recomposeStr(str, linksForbidden, contactsForbidden) {
  if (
    typeof str === "string" &&
    typeof linksForbidden === "string" &&
    typeof contactsForbidden === "string"
  ) {
    let result = "";
    const words = str.split(" ");

    words.forEach((word, idx) => {
      if (idx === 0) result += word[0].toUpperCase() + word.slice(1) + " ";
      else if (word.match(/^https?:\/\/\S+$/i)) result += linksForbidden + " ";
      else if (word.match(/\S+@\S+\.\S+/i)) result += contactsForbidden + " ";
      else if (!word.match(/^\d{4,}$/)) result += word.toLowerCase() + " ";
    });

    if (result.length > str.length) {
      const timer = setInterval(() => {
        const helpMessage = confirm("Чи потрібна Вам допомога?");
        if (helpMessage) {
          alert("Допомога на підході!");
          clearInterval(timer);
        }
      }, 5000);
    }

    return result;
  } else return "Wrong data passed";
}

const str =
  "Time 1234 123 text with LINKS: http://example.com and https://www.google.com and an email: john.doe@example.com";
const linksForbidden = "[посилання заборонені]";
const contactsForbidden = "[контакти заборонені]";

console.log(recomposeStr(str, linksForbidden, contactsForbidden));

// Task 16

function generateNumber(start) {
  return Math.floor(Math.random() * start);
}

function generatePassword() {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";

  let password = "";
  let prevNumber = false;

  const length = Math.floor(Math.random() * (20 - 6 + 1) + 6);

  for (let i = 0; i < 2; i++) {
    password += uppercase[generateNumber(uppercase.length)];
  }

  let numCount = 0;
  while (numCount < 5) {
    const num = numbers[generateNumber(numbers.length)];
    if (prevNumber && num === password[password.length - 1]) {
      continue;
    }
    password += num;
    numCount++;
    prevNumber = true;
  }

  const i = generateNumber(password.length);
  const left = password.slice(0, i);
  const right = password.slice(i + 1);
  password = left + "_" + right;

  while (password.length < length) {
    const charSet = generateNumber(3);
    switch (charSet) {
      case 0:
        password += lowercase[generateNumber(lowercase.length)];
        break;
      case 1:
        password += uppercase[generateNumber(uppercase.length)];
        break;
      case 2:
        password += numbers[generateNumber(numbers.length)];
        break;
    }
    prevNumber = false;
  }

  return password;
}
