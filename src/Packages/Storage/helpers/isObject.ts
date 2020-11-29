import { getType } from './';

export const isObject = (object: any): boolean => 'Object' === getType(object);
