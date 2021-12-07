import { isObject } from './';
import { ObjectLiteralType } from './';

export const mergeObject = (
  first: ObjectLiteralType,
  second: ObjectLiteralType,
): ObjectLiteralType => {
  Object.keys(second).map((key) => {
    if (isObject(first[key]) && isObject(second[key])) {
      first[key] = mergeObject(
        first[key] as ObjectLiteralType,
        second[key] as ObjectLiteralType,
      );

      return key;
    }

    if (isObject(first[key])) {
      return key;
    }

    first[key] = second[key];

    return key;
  });

  return first;
};
