import { getType } from './';

export const isNumber = (object: unknown): boolean => 'number' === getType(object);
