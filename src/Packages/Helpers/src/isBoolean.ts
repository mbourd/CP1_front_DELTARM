import { getType } from './';

export const isBoolean = (object: unknown): boolean =>
  'boolean' === getType(object);
