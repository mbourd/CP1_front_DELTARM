import { isObject } from './';
import { ObjectLiteralType } from './';

export const setByKey = (
  object: ObjectLiteralType,
  key: string,
  value: unknown,
): ObjectLiteralType => {
  if ('' === key) {
    return object;
  }

  const keys = key.split('.');
  if (0 === keys.length) {
    return object;
  }

  if (1 === keys.length) {
    object[keys[0]] = value;

    return object;
  }

  if (!isObject(object[keys[0]])) {
    object[keys[0]] = {};
  }

  object[keys[0]] = setByKey(
    object[keys[0]] as ObjectLiteralType,
    keys.slice(1).join('.'),
    value,
  );

  return object;
};
