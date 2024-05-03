import { expect } from '@jest/globals';
import { isFormData } from '../src';

describe('isFormData', () => {
  it('should be a FormData', () => {
    expect(isFormData(new FormData())).toBeTruthy();
  });

  it('should not be a FormData', () => {
    expect(isFormData({})).toBeFalsy();
  });
});
