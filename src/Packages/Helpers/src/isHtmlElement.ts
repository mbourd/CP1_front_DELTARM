import { getType } from './';

export const isHtmlElement = (object: unknown): boolean =>
  /^html[a-z]*element$/i.test(getType(object) as string);
