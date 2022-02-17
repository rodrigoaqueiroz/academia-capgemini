const prompt = require("prompt-sync")({ sigint: true });
const word = prompt("type your word: ")

const countAnagrams = (str) => {
  let res = [];
  let count = 0
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      res.push(str.substring(i, j));
    }
  }
  let sortedArr = res.map(item => item.split('').sort().join(''));
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
    finalArr.push(reducedObj[reduceItem].map(item => res[item]));
  }
  for (let i = 0; i < finalArr.length; i += 1) {
    finalArr[i].length > 1 ? count += 1 : null
  }
  return count
}

// // referência: https://www.codegrepper.com/code-examples/javascript/counting+anagrams+javascript

console.log(countAnagrams(word))

module.exports = {
  countAnagrams,
}
