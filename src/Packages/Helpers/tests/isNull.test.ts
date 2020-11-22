import { isNull } from '../src';

describe('isNull', () => {
  it('should be null', () => {
    expect(isNull(null)).toBeTruthy();
  });

  it('should not be null', () => {
    expect(isNull({})).toBeFalsy();
  });
});
