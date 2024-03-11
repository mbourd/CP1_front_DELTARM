import { expect } from '@jest/globals';
import { removeFromArrayByIndex } from '../src';

describe('removeFromArrayByIndex', () => {
  it('should return an array', () => {
    const anArray = ['Apple', 'Banana', 'Orange'];
    const resultArray = removeFromArrayByIndex(anArray, 0);
    expect(Array.isArray(resultArray)).toBeTruthy();
  });

  it('should remove first argument', () => {
    const anArray = ['Apple', 'Banana', 'Orange'];
    const resultArray = removeFromArrayByIndex(anArray, 0);
    expect(resultArray).toEqual(['Banana', 'Orange']);
  });
});
