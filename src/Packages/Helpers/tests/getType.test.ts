import { getType } from '../src';

describe('getType', () => {
  it('should be a string', () => {
    expect(getType('Hello World')).toBe('string');
  });

  it('should be a number', () => {
    expect(getType(42)).toBe('number');
  });

  it('should be an array', () => {
    expect(getType([])).toBe('Array');
  });

  it('should be a boolean', () => {
    expect(getType(true)).toBe('boolean');
  });

  it('should be a FormData', () => {
    expect(getType(new FormData())).toBe('FormData');
  });

  it('should be a function', () => {
    expect(getType(() => null)).toBe('function');
  });

  it('should be a html element', () => {
    expect(getType(document.createElement('div'))).toMatch(
      /^html[a-z]*element$/i,
    );
  });

  it('should be an object', () => {
    expect(getType({})).toBe('Object');
  });

  it('should be a RegExp', () => {
    expect(getType(/.*/)).toBe('RegExp');
  });
});
