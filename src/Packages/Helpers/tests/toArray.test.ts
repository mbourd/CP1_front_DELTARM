import { expect } from '@jest/globals';
import { toArray } from '../src';

describe('toArray', () => {
  it('should return array of keys', () => {
    const fruits = {
      apples: 5,
      orange: 1,
    };
    expect(toArray(fruits)).toStrictEqual(['apples', 'orange']);
  });

  it('should return each letter in array', () => {
    const apples = 'apples';
    expect(toArray(apples)).toStrictEqual(['a', 'p', 'p', 'l', 'e', 's']);
  });
});
