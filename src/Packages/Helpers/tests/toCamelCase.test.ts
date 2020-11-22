import { toCamelCase } from '../src';

describe('toCamelCase', () => {
  it('should convert text to camelCase', () => {
    let result = toCamelCase('java script');
    expect(result).toEqual('javaScript');

    result = toCamelCase('java.script');
    expect(result).toEqual('javaScript');
  });
});
