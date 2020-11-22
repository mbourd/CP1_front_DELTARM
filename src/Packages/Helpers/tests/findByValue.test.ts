import { findByValue } from '../src';

describe('findByValue', () => {
  const brother = {
    name: 'user1',
    brother: {
      name: 'brother1',
      age: 25,
    },
  };

  const sister = {
    name: 'user2',
    sister: {
      name: 'sister1',
      age: 20,
    },
  };

  const users = [brother, sister];

  it('should have right values', () => {
    expect(findByValue(users, 'name', 'user1')).toStrictEqual(brother);
    expect(findByValue(users, 'sister.age', 20)).toStrictEqual(sister);
  });

  it('should not have name property', () => {
    expect(findByValue(users, 'brother.name', 'sister1')).toBeUndefined();
    expect(findByValue(users, 'brother.age', 23)).toBeUndefined();
  });
});
