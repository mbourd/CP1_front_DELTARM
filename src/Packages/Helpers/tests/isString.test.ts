import { isString } from '../src';

describe('isString', () => {
  it('should be a string', () => {
    expect(isString('')).toBeTruthy();
  });

  it('should not be a string', () => {
    expect(isString({})).toBeFalsy();
  });
});
