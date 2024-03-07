import { expect } from '@jest/globals';
import { isArray } from '../src';

describe('isArray', () => {
  it('should be an array', () => {
    expect(isArray([])).toBeTruthy();
  });

  it('should not be an array', () => {
    expect(isArray({})).toBeFalsy();
  });
});
