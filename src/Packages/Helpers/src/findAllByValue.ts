import { getByKey, ObjectLiteralType } from './';

export const findAllByValue = (elements: unknown[], key: string, value: unknown): unknown[] => {
  const length = elements.length;
  const values = [];

  for (let i = 0; i < length; i++) {
    if (getByKey(elements[i] as ObjectLiteralType, key) === value) {
      values.push(elements[i] as ObjectLiteralType);
    }
  }

  return values;
};
