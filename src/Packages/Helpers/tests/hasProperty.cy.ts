import { hasProperty } from '../src';

describe('hasProperty', () => {
  const user = {
    name: 'John',
  };

  it('should have name property', () => {
    expect(hasProperty(user, 'name')).to.be.true;
  });

  it('should not have name property', () => {
    expect(hasProperty(user, 'lastname')).to.be.false;
  });
});
