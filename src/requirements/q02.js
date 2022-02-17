const prompt = require('prompt-sync')({ sigint: true });
const { validateSchema } = require('../utils/validations');

const password = prompt('type your password: ');

const validatePassword = (str) => {
  if (str.length >= 6) {
    if (!validateSchema.upperCase(str)) return 'Falta letra caixa alta.';
    if (!validateSchema.lowerCase(str)) return 'Falta letra caixa baixa.';
    if (!validateSchema.number(str)) return 'Falta número.';
    if (!validateSchema.special(str)) return 'Falta caractere especial.';
  }
  return validateSchema.password(str);
};

console.log(validatePassword(password));

module.exports = {
  validatePassword,
};

// referência: https://stackoverflow.com/questions/1027224/how-can-i-test-if-a-letter-in-a-string-is-uppercase-or-lowercase-using-javascrip
