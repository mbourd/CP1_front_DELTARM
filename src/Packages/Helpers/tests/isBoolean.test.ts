import { isBoolean } from '../src';

describe('isBoolean', () => {
  it('should be a boolean', () => {
    expect(isBoolean(true)).toBeTruthy();
  });

  it('should not be a boolean', () => {
    expect(isBoolean(1)).toBeFalsy();
  });
});
