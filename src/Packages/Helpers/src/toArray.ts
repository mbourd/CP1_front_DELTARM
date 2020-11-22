import { ObjectLiteralType } from './';
import { isObject } from './isObject';

export const toArray = (object: unknown): unknown[] => {
  if (isObject(object)) {
    return Object.keys(object as ObjectLiteralType);
  }

  return [].slice.call(object);
};
