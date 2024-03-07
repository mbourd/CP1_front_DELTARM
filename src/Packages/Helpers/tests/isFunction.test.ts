import { expect } from '@jest/globals';
import { isFunction } from '../src';

describe('isFunction', () => {
  it('should be a function', () => {
    expect(isFunction(() => null)).toBeTruthy();
  });

  it('should not be a function', () => {
    expect(isFunction(45)).toBeFalsy();
  });
});
