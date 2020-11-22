import { getType } from './';

export const isObject = (object: unknown): boolean => 'Object' === getType(object);
