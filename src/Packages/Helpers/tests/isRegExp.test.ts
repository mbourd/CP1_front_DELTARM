import { isRegExp } from '../src';

describe('isRegExp', () => {
  it('should be a RegExp', () => {
    expect(isRegExp(/.*/)).toBeTruthy();
  });

  it('should not be a RegExp', () => {
    expect(isRegExp({})).toBeFalsy();
  });
});
