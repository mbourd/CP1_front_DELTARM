import { getByKey } from './getByKey';

/**
 * Gets from theme.
 *
 * @example
 *  getFromTheme<string>('color.primary.dark');
 */
export function getFromTheme<T>(key?: string): T {
  // @ts-ignore
  return key ? getByKey<T>(this, key) : this;
}
