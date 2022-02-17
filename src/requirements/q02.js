const { validateSchema } = require('../utils/validations')
const prompt = require("prompt-sync")({ sigint: true });
const password = prompt("type your password: ")

const validatePassword = (password) => {
  if (password.length >= 6) {
    if (!validateSchema.upperCase(password)) return 'Falta letra caixa alta.'
    if (!validateSchema.lowerCase(password)) return 'Falta letra caixa baixa.'
    if (!validateSchema.number(password)) return 'Falta número.'
    if (!validateSchema.special(password)) return 'Falta caractere especial.'
  }
  return validateSchema.password(password)
}

console.log(validatePassword(password))

module.exports = { 
  validatePassword,
};

// referência: https://stackoverflow.com/questions/1027224/how-can-i-test-if-a-letter-in-a-string-is-uppercase-or-lowercase-using-javascrip