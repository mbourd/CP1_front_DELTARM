import { getType } from './';

export const isFormData = (object: unknown): boolean =>
  'FormData' === getType(object);
