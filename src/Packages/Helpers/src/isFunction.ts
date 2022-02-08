import { getType } from './';

export const isFunction = (object: unknown): boolean =>
  'function' === getType(object);
