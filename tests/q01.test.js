const { makeAsteriskStairs } = require('../src/requirements/q01');

describe('test makeAsteriskStairs function', () => {
  let stdin;
  beforeEach(() => {
    stdin = require('mock-stdin').stdin();
  });

  it('test input type string', async () => {
    const INPUT = 'imNotANumber';
    process.nextTick(() => {
      stdin.send(INPUT);
    });
    const result = await makeAsteriskStairs(INPUT);
    expect(result).toStrictEqual([]);
  });

  it('test input number smaller than 1', async () => {
    const INPUT = 0;
    process.nextTick(() => {
      stdin.send(INPUT);
    });
    const result = await makeAsteriskStairs(INPUT);
    expect(result).toStrictEqual([]);
  });

  it('input n = 6', async () => {
    const INPUT = 6;
    process.nextTick(() => {
      stdin.send(INPUT);
    });
    const result = await makeAsteriskStairs(INPUT);
    expect(result).toStrictEqual([
      '     *',
      '    **',
      '   ***',
      '  ****',
      ' *****',
      '******',
    ]);
    stdin.restore();
  });
});

// referência: https://medium.com/@altshort/unit-testing-node-cli-apps-with-jest-2cd4adc599fb
