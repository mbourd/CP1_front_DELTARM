import { expect } from '@jest/globals';
import { isNumber } from '../src';

describe('isNumber', () => {
  it('should be a number', () => {
    expect(isNumber(42)).toBeTruthy();
  });

  it('should not be a number', () => {
    expect(isNumber({})).toBeFalsy();
  });
});
