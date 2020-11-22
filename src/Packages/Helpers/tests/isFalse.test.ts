import { isFalse } from '../src';

describe('isFalse', () => {
  it('should be false', () => {
    expect(isFalse(false)).toBeTruthy();
  });

  it('should not be false', () => {
    expect(isFalse({})).toBeFalsy();
  });
});
