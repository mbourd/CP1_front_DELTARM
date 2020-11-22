import { setByKey } from '../src';

describe('setByKey', () => {
  const car = {
    type: 'Fiat',
  };

  it('should not be added', () => {
    const result = setByKey(car, '', 20000);
    expect(result).toStrictEqual({ type: 'Fiat' });
  });

  it('should be added', () => {
    let result = setByKey(car, 'price', 20000);
    expect(result).toStrictEqual({ price: 20000, type: 'Fiat' });
    result = setByKey(car, 'price.max', 400000);
    expect(result).toStrictEqual({ price: { max: 400000 }, type: 'Fiat' });
  });
});
