import { getByKey } from './getByKey';

/**
 * Gets data from theme.
 *
 * @example
 *  getThemeData<string>('key.subKey.subSubKey');
 */
export function getThemeData<T>(key?: string): T {
  // @ts-ignore
  const data = this.data;

  return key ? getByKey<T>(data, key) : data;
}
