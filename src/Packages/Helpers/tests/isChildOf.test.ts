import { expect } from '@jest/globals';
import { isChildOf } from '../src';

describe('isChildOf', () => {
  it('should be a child of another', () => {
    const parent = document.createElement('div');
    const child = document.createElement('p');
    parent.appendChild(child);
    const result = isChildOf(child, parent);
    expect(result).toBeTruthy();
  });

  it('should not be a child of another', () => {
    const parent = document.createElement('div');
    const child = document.createElement('p');
    const falseChild = document.createElement('p');
    parent.appendChild(child);
    const result = isChildOf(falseChild, parent);
    expect(result).toBeFalsy();
  });
});
