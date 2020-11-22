import { isNumber } from './';

export const isEmpty = (object: unknown): boolean => {
  if (!object) {
    return true;
  }
  // @ts-ignore
  const objectKeys = Object.keys(object);
  for (let k = 0; k < objectKeys.length; k += 1) {
    if (Object.prototype.hasOwnProperty.call(object, objectKeys[k])) {
      return false;
    }
  }

  return !(true === object || isNumber(object));
};
