import { expect } from '@jest/globals';
import { randomColor } from '../src';

describe('randomColor', () => {
  it('should be match the expected syntax', () => {
    const color = randomColor();
    const expression = /^#([a-f0-9]{6})$/;
    expect(color).toMatch(expression);
  });
});
