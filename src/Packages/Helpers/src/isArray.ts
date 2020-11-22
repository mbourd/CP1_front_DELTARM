import { getType } from './';

export const isArray = (object: unknown): boolean => 'Array' === getType(object);
