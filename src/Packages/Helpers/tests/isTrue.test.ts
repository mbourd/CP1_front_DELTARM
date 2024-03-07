import { expect } from '@jest/globals';
import { isTrue } from '../src';

describe('isTrue', () => {
  it('should be true', () => {
    expect(isTrue(true)).toBeTruthy();
  });

  it('should not be true', () => {
    expect(isTrue({})).toBeFalsy();
  });
});
