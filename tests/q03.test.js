const { countAnagrams } = require('../src/requirements/q03');

describe('test countAnagrams function', () => {
  let stdin;
  beforeEach(() => {
    stdin = require('mock-stdin').stdin();
  });

  it('test if ovo returns 2', async () => {
    const INPUT = 'ovo';
    process.nextTick(() => {
      stdin.send(INPUT);
    });
    const result = await countAnagrams(INPUT);
    expect(result).toStrictEqual(2);
    stdin.restore();
  });

  it('test if ifailuhkqq returns 3', async () => {
    const INPUT = 'ifailuhkqq';
    process.nextTick(() => {
      stdin.send(INPUT);
    });
    const result = await countAnagrams(INPUT);
    expect(result).toStrictEqual(3);
    stdin.restore();
  });
});
