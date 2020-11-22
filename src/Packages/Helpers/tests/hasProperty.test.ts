import { hasProperty } from '../src';

describe('hasProperty', () => {
  const user = {
    name: 'John',
  };

  it('should have name property', () => {
    expect(hasProperty(user, 'name')).toBeTruthy();
  });

  it('should not have name property', () => {
    expect(hasProperty(user, 'lastname')).toBeFalsy();
  });
});
