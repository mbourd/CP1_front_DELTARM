import { getType } from './';

export const isString = (object: unknown): boolean => 'string' === getType(object);
