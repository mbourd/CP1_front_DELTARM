import { isUndefined } from '../src';

describe('isUndefined', () => {
  it('should be undefined', () => {
    expect(isUndefined(undefined)).toBeTruthy();
  });

  it('should not be undefined', () => {
    expect(isUndefined({})).toBeFalsy();
  });
});
