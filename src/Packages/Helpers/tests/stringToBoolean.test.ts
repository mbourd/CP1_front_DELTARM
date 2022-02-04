import { stringToBoolean } from '../src/stringToBoolean';

describe('test method function string to boolean', () => {
  it('should render false while giving a null value', () => {
    const value = null;
    const result = stringToBoolean(value);
    expect(result).toStrictEqual(false);
  });
  it('should render true while giving a true string value', () => {
    const value = 'true';
    const result = stringToBoolean(value);
    expect(result).toStrictEqual(true);
  });
  it('should render false while giving a false string value', () => {
    const value = 'false';
    const result = stringToBoolean(value);
    expect(result).toStrictEqual(false);
  });
  it('should render false while giving a toto string value', () => {
    const value = 'toto';
    const result = stringToBoolean(value);
    expect(result).toStrictEqual(false);
  });
});
