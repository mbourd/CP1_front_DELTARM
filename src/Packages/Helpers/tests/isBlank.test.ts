import { expect } from '@jest/globals';
import { isBlank } from '../src';

describe('isBlank', () => {
  it('should be blank', () => {
    expect(isBlank('')).toBeTruthy();
    expect(isBlank('      ')).toBeTruthy();
  });

  it('should not be blank', () => {
    expect(isBlank('0')).toBeFalsy();
  });
});
