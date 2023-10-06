import { getType } from '../src';

describe('getType', () => {
  it('should be a string', () => {
    expect(getType('Hello World')).to.be.deep.equal('string');
  });

  it('should be a number', () => {
    expect(getType(42)).to.be.deep.equal('number');
  });

  it('should be an array', () => {
    expect(getType([])).to.be.deep.equal('Array');
  });

  it('should be a boolean', () => {
    expect(getType(true)).to.be.deep.equal('boolean');
  });

  it('should be a FormData', () => {
    expect(getType(new FormData())).to.be.deep.equal('FormData');
  });

  it('should be a function', () => {
    expect(getType(() => null)).to.be.deep.equal('function');
  });

  it('should be a html element', () => {
    expect(getType(document.createElement('div'))).to.match(
      /^html[a-z]*element$/i,
    );
  });

  it('should be an object', () => {
    expect(getType({})).to.be.deep.equal('Object');
  });

  it('should be a RegExp', () => {
    expect(getType(/.*/)).to.be.deep.equal('RegExp');
  });
});
