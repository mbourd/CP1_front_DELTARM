import { getType } from './';

export const isRegExp = (object: unknown): boolean => 'RegExp' === getType(object);
