import { expect } from '@jest/globals';
import { hasObjectValue } from '../src';

describe('hasObjectValue', () => {
  const users = [
    {
      name: 'user1',
      brother: {
        name: 'brother1',
        age: 25,
      },
    },
    {
      name: 'user2',
      sister: {
        name: 'sister1',
        age: 20,
      },
    },
  ];

  it('should have right values', () => {
    expect(hasObjectValue(users, 'name', 'user1')).toBeTruthy();
    expect(hasObjectValue(users, 'sister.age', 20)).toBeTruthy();
  });

  it('should not have name property', () => {
    expect(hasObjectValue(users, 'brother.name', 'sister1')).toBeFalsy();
    expect(hasObjectValue(users, 'brother.age', 23)).toBeFalsy();
  });
});
