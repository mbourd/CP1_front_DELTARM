import { _escapeForRegExp } from './_escapeRegExp';
import { translation } from '../../src/Services';

export function _translate(
  lng: string,
  ns: string,
  key: string,
  escapeForRegexp = true,
): string {
  const val = translation.getResource(lng, ns)?.[key];

  if (escapeForRegexp) return _escapeForRegExp(val);

  return val;
}
