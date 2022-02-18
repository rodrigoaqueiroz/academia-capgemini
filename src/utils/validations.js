const testLowerCase = (string) => /[A-Z]/.test(string);
const testUpperCase = (string) => /[a-z]/.test(string);
const testNumber = (string) => /[0-9]/.test(string);
const testSpecialCharacter = (string) => /\W|_/.test(string);
const testLength = (string) => ((string.length < 6) ? 6 - string.length : 'O tamanho da senha está seguro.');

const validateSchema = {
  password: testLength,
  upperCase: testLowerCase,
  lowerCase: testUpperCase,
  number: testNumber,
  special: testSpecialCharacter,
};

module.exports = {
  validateSchema,
};
