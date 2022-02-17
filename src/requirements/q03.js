const prompt = require("prompt-sync")({ sigint: true });
const word = prompt("type your word: ")

const getAllSubstrings = (str) => {
  var res = [];
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j <= word.length; j++) {
      res.push(word.substring(i, j));
    }
  }
  return res;
}

let arr = [... getAllSubstrings(word)]
const groupedAnagrams = (arr) => {
  let sortedArr = arr.map(item => item.split('').sort().join(''));
  let setArr = new Set(sortedArr);
  let reducedObj = {};
  for (let setItem of setArr) {
    let indexArr = sortedArr.reduce((acc, cur, index) => {
      if (setItem === cur) {
        acc.push(index);
      }
      return acc;
    }, []);
    reducedObj[setItem] = indexArr;
  }
  let finalArr = [];
  for (let reduceItem in reducedObj) {
    finalArr.push(reducedObj[reduceItem].map(item => arr[item]));
  }
  return finalArr;
}

// referência: https://www.codegrepper.com/code-examples/javascript/counting+anagrams+javascript

const countAnagrams = () => {
  let anagrams = groupedAnagrams(arr)
  let count = 0
  for (let i = 0; i < anagrams.length; i += 1) {
    anagrams[i].length > 1 ? count += 1 : null
  }
  return count
}

console.log(countAnagrams(word))

module.exports = {
  countAnagrams,
}