import { ObjectLiteralType } from './';

export const sortByObject = (
  objects: ObjectLiteralType[],
  key: string,
): ObjectLiteralType[] =>
  objects.sort((a, b) => {
    if ((a[key] as ObjectLiteralType) > (b[key] as ObjectLiteralType)) {
      return 1;
    }

    if ((a[key] as ObjectLiteralType) < (b[key] as ObjectLiteralType)) {
      return -1;
    }

    return 0;
  });
