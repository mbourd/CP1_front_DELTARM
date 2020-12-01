import { isObject } from './';

type ObjectType = Record<string, any>;

export const setByKey = (object: ObjectType, key: string, value: unknown): ObjectType => {
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

  object[keys[0]] = setByKey(object[keys[0]] as ObjectType, keys.slice(1).join('.'), value);

  return object;
};
