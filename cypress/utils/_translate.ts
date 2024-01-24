import { _escapeForRegExp } from './_escapeRegExp';
import { translation } from '../../src/Services';

export function _translate(
  lng: string,
  ns: string,
  key: string,
  defaultStr?: string,
  escapeForRegexp = true,
): string {
  let val = translation.getResource(lng, ns)?.[key];

  if (escapeForRegexp) val = _escapeForRegExp(val);

  return (
    (val !== undefined ? val : key) +
    (defaultStr ? '|' + _escapeForRegExp(defaultStr) : '')
  );
}
