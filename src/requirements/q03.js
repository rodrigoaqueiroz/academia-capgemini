const prompt = require('prompt-sync')({ sigint: true });

const word = prompt('type a word: ');

const countAnagrams = (str) => {
  if (word === '') return 'type a word.';
  const res = [];
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    for (let j = i + 1; j <= str.length; j += 1) {
      res.push(str.substring(i, j));
    }
  }
  const sortedArr = res.map((item) => item.split('').sort().join(''));
  const setArr = new Set(sortedArr);
  const reducedObj = {};
  for (const setItem of setArr) {
    const indexArr = sortedArr.reduce((acc, cur, index) => {
      if (setItem === cur) {
        acc.push(index);
      }
      return acc;
    }, []);
    reducedObj[setItem] = indexArr;
  }
  const finalArr = [];
  for (const reduceItem in reducedObj) {
    finalArr.push(reducedObj[reduceItem].map((item) => res[item]));
  }
  for (let i = 0; i < finalArr.length; i += 1) {
    finalArr[i].length > 1 ? count += 1 : null;
  }
  return count;
};

// // referência: https://www.codegrepper.com/code-examples/javascript/counting+anagrams+javascript

console.log(countAnagrams(word));

module.exports = {
  countAnagrams,
};
