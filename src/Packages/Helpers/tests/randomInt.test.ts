import { randomInt } from '../src';

describe('randomInt', () => {
  it('should return random int', () => {
    expect(randomInt(20)).toBeLessThan(20);
  });
});
