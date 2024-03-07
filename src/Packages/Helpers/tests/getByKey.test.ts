import { getByKey } from '../src';
import { expect } from '@jest/globals';

const cart = {
  fruits: {
    apple: 3,
  },
};

describe('getByKey', () => {
  it('should get value by its key', () => {
    const result = getByKey(cart, 'fruits.apple');
    expect(result).toEqual(3);
  });

  it('should return null', () => {
    expect(getByKey(cart, 'fruits.orange')).toBeUndefined();
  });
});
