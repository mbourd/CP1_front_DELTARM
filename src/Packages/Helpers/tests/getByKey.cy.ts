import { getByKey } from '../src';

const cart = {
  fruits: {
    apple: 3,
  },
};

describe('getByKey', () => {
  it('should get value by its key', () => {
    const result = getByKey(cart, 'fruits.apple');
    expect(result).to.be.deep.equal(3);
  });

  it('should return null', () => {
    expect(getByKey(cart, 'fruits.orange')).to.be.undefined;
  });
});
