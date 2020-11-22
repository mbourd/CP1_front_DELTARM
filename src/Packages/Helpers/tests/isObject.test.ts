import { isObject } from '../src';

describe('isObject', () => {
  it('should be an object', () => {
    expect(isObject({})).toBeTruthy();
  });

  it('should not be an object', () => {
    expect(isObject(0)).toBeFalsy();
  });
});
