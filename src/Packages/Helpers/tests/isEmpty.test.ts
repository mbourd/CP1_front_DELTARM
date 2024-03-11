import { expect } from '@jest/globals';
import { isEmpty } from '../src';

describe('isEmpty', () => {
  it('should be an empty string', () => {
    const result =
      isEmpty({}) &&
      isEmpty(null) &&
      isEmpty([]) &&
      isEmpty(0) &&
      isEmpty(NaN) &&
      isEmpty('') &&
      isEmpty(false);

    expect(result).toBeTruthy();
  });

  it('should not be an empty string', () => {
    const result =
      isEmpty({ name: 'john' }) &&
      isEmpty(null) &&
      isEmpty([]) &&
      isEmpty(0) &&
      isEmpty(NaN) &&
      isEmpty('') &&
      isEmpty(false);

    expect(result).toBeFalsy();
  });
});
