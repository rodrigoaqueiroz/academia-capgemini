const { validatePassword } = require('../src/requirements/q02');

describe('test validatePassword function', () => {
  let stdin;

  beforeEach(() => {
    stdin = require('mock-stdin').stdin();
  });

  it('test if password has less than 6 characters ', async () => {
    const INPUT = 'Ya3';
    process.nextTick(() => {
      stdin.send(INPUT);
    });
    const result = await validatePassword(INPUT);
    expect(result).toStrictEqual(3);
  });

  it('test if has a uppercase character', async () => {
    const INPUT = 'password123';
    process.nextTick(() => {
      stdin.send(INPUT);
    });
    const result = await validatePassword(INPUT);
    expect(result).toStrictEqual('Falta letra caixa alta.');
  });

  it('test if has a lower character', async () => {
    const INPUT = 'PASSWORD123';
    process.nextTick(() => {
      stdin.send(INPUT);
    });
    const result = await validatePassword(INPUT);
    expect(result).toStrictEqual('Falta letra caixa baixa.');
  });

  it('test if has a number', async () => {
    const INPUT = 'StrongerPassword';
    process.nextTick(() => {
      stdin.send(INPUT);
    });
    const result = await validatePassword(INPUT);
    expect(result).toStrictEqual('Falta número.');
  });

  it('test if has a special character', async () => {
    const INPUT = 'StrongerPassword2';
    process.nextTick(() => {
      stdin.send(INPUT);
    });
    const result = await validatePassword(INPUT);
    expect(result).toStrictEqual('Falta caractere especial.');
    stdin.restore();
  });
});
