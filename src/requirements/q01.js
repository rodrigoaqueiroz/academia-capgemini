const prompt = require('prompt-sync')({ sigint: true });

const input = prompt('length: ');

const makeAsteriskStairs = (n) => {
  if (Number.isNaN(Number(input))) console.log('Não é um número.');
  if (input < 1) console.log('Digite um número maior do que zero.');
  const asteriskArray = [];
  for (let i = 1; i <= n; i += 1) {
    asteriskArray.push(' '.repeat(n - i) + '*'.repeat(i));
    console.log(' '.repeat(n - i) + '*'.repeat(i));
  }
  return asteriskArray;
};

makeAsteriskStairs(input);

module.exports = {
  makeAsteriskStairs,
};
