import regexgen from 'regexgen';

export function generateRegex(list: string[]): RegExp {
  return new RegExp('^' + regexgen(list).source + '$');
}
