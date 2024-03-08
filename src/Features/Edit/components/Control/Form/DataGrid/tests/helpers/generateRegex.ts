import toRegex from 'to-regex';

export function generateRegex(list: string[]) {
  return toRegex(list);
}
