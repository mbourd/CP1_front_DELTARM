import { expect } from '@jest/globals';
import { isHtmlElement } from '../src';

describe('isHtmlElement', () => {
  it('should be a HTMLElement', () => {
    expect(isHtmlElement(document.createElement('div'))).toBeTruthy();
  });

  it('should not be a HTMLElement', () => {
    expect(isHtmlElement({})).toBeFalsy();
  });
});
