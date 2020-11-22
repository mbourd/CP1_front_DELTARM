import { getByKey, ObjectLiteralType } from './';

export const hasObjectValue = (elements: ObjectLiteralType[], key: string, value: unknown): boolean => {
  const length = elements.length;

  for (let i = 0; i < length; i++) {
    if (getByKey(elements[i], key) === value) {
      return true;
    }
  }

  return false;
};
