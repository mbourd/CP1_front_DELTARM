import { getByKey, ObjectLiteralType } from './';

export const findByValue = (
  elements: unknown[],
  key: string,
  value: unknown,
): unknown | undefined => {
  const length = elements.length;

  for (let i = 0; i < length; i++) {
    if (getByKey(elements[i] as ObjectLiteralType, key) === value) {
      return elements[i] as ObjectLiteralType;
    }
  }

  return undefined;
};
