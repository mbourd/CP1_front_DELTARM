import { expect } from '@jest/globals';
import { toSlug } from '../src';

describe('toSlug', () => {
  it('should convert text to camelCase', () => {
    expect(toSlug('java script')).toEqual('java-script');
    expect(toSlug('javaScript')).toEqual('java-script');
    expect(toSlug('java.script')).toEqual('java-script');
    expect(toSlug('java----script----')).toEqual('java-script');
    expect(toSlug('à demain')).toEqual('a-demain');
  });
});
