import { ObjectLiteralType } from './';

export const hasProperty = (
  object: ObjectLiteralType,
  property: string,
): boolean => Object.prototype.hasOwnProperty.call(object, property);
